import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { Box, Spinner, Text } from "@chakra-ui/react";
import { get, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardStickerAlbum } from "../../components/CardStickerAlbum";
import { CardTeam } from "../../components/CardTeam";
import { Container } from "../../components/Container";
import { database } from "../../firebase/firebase";
import { BottomTabBar } from "../../components/TabBar";
export default function Album() {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState<any>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [teamsRepeat, setTeamsRepeat] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function readPlayerData() {
    setLoading(true);
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
        setLoading(false);
        setPlayers(teams);
      } else {
        console.log("No data available");
      }
    });
  }

  async function readTeamData() {
    setLoading(true);
    get(ref(database, "team/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teamsAll = Object.entries(data).map(([key, value]: any) => {
          return {
            team: value.team,
          };
        });
        setLoading(false);
        setTeams(teamsAll);
      } else {
        console.log("No data available");
      }
    });
  }

  useEffect(() => {
    async () => {
      setLoading(true);
      await readPlayerData();
      await readTeamData();
      setLoading(false);
    };
  }, []);

  const filterTeamsWithPlayersCadastred = () => {
    setLoading(true);
    const teamsWithPlayersCadastred = teams.filter((team) => {
      return players.some((player: any) => {
        return player.team === team.team;
      });
    });
    setTeamsRepeat(teamsWithPlayersCadastred);
    setLoading(false);
  };
  useEffect(() => {
    filterTeamsWithPlayersCadastred();
  }, [teams]);

  return (
    <Box
      p={"10px"}
      bg={"#121214"}
      display={"flex"}
      flexDirection={"column"}
      w={"100%"}
      minH={"100vh"}
      h={"100%"}
    >
      {loading && (
        <Spinner
          size="xl"
          color="var(--primary)"
          position="absolute"
          top="50%"
          left="50%"
        />
      )}
      {!loading &&
        teamsRepeat.length > 0 &&
        teams.length > 0 &&
        players.length > 0 && (
          <Slide easing="ease" autoplay={false}>
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
                ))}
          </Slide>
        )}
      <BottomTabBar />
    </Box>
  );
}
