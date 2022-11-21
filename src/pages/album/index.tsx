import { Text } from "@chakra-ui/react";
import { get, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardStickerAlbum } from "../../components/CardStickerAlbum";
import { CardTeam } from "../../components/CardTeam";
import { Container } from "../../components/Container";
import { database } from "../../firebase/firebase";
export default function Album() {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState<any>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [teamsRepeat, setTeamsRepeat] = useState<any[]>([]);
  const [teamsNoReapeat, setTeamsNoReapeat] = useState<any[]>([]);

  async function readPlayerData() {
    get(ref(database, "player/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teams = Object.entries(data).map(([key, value]: any) => {
          return {
            player: value.player,
            position: value.position,
            link_url: value.link_url,
            team: value.team,
          };
        });
        setPlayers(teams);
      } else {
        console.log("No data available");
      }
    });
  }

  async function readTeamData() {
    get(ref(database, "team/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teamsAll = Object.entries(data).map(([key, value]: any) => {
          return {
            team: value.team,
          };
        });
        setTeams(teamsAll);
      } else {
        console.log("No data available");
      }
    });
  }

  useEffect(() => {
    readTeamData();
  }, []);

  useEffect(() => {
    readPlayerData();
  }, []);

  const filterTeamsWithPlayersCadastred = () => {
    const teamsWithPlayersCadastred = teams.filter((team) => {
      return players.some((player: any) => {
        return player.team === team.team;
      });
    });
    setTeamsRepeat(teamsWithPlayersCadastred);
  };
  useEffect(() => {
    filterTeamsWithPlayersCadastred();
  }, [teams]);

  return (
    <Container>
      {teamsRepeat.length > 0 &&
        teamsRepeat
          .filter((team) => {
            return team.team.toLowerCase().includes(search.toLowerCase());
          })
          .map((team, index) => (
            <CardStickerAlbum
              key={index}
              players={
                players.filter((player: any) => {
                  return player.team === team.team;
                }) || []
              }
              team={team.team}
            />
            // <CardTeam
            //   key={index}
            //   players={
            //     players.filter((player: any) => {
            //       return player.team === team.team;
            //     }) || []
            //   }
            //   title={team.team}
            //   description={team.description}
            // />
          ))}
    </Container>
  );
}
