import { useEffect, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { CardTeam } from "../../components/CardTeam";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { get, ref } from "firebase/database";
import { database } from "../../firebase/firebase";
export default function Teams() {
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
            position: value.team,
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

  return (
    <>
      <Header title="Times Cadastrados" />
      <Container>
        <Box>
          <Input
            placeholder="Pesquisar"
            w={"100%"}
            background={"#202024"}
            color={"white"}
            borderRadius={"10px"}
            border={"none"}
            padding={"1rem"}
            margin={"1rem 0"}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box mt="20px" display={"grid"} gap={"1rem"} marginBottom={"80px"}>
          {teams.length > 0 &&
            teams
              .filter((team) => {
                return team.team.toLowerCase().includes(search.toLowerCase());
              })
              .map((team, index) => (
                <>
                  <CardTeam
                    key={index}
                    players={
                      players.filter((player: any) => {
                        return player.team === team.team;
                      }) || []
                    }
                    title={team.team}
                    description={team.description}
                  />
                </>
              ))}
        </Box>
      </Container>
    </>
  );
}
