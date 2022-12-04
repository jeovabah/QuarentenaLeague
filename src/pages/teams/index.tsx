import { useEffect, useState } from "react";
import { Box, Input, Spinner, Text } from "@chakra-ui/react";
import { CardTeam } from "../../components/CardTeam";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { get, ref } from "firebase/database";
import { database } from "../../firebase/firebase";
interface PlayerProps {
  linl_url: string;
  player: string;
  position: string;
  team: string;
}

export default function Teams() {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState<any>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [teamsRepeat, setTeamsRepeat] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function readPlayerData() {
    await get(ref(database, "player/")).then((snapshot) => {
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
    await get(ref(database, "team/")).then((snapshot) => {
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
    async () => {
      setLoading(true);
      await readPlayerData();
      await readTeamData();
      setLoading(false);
    };
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
    <>
      <Header title="Times Cadastrados" />
      <Container>
        {loading && (
          <Spinner
            size="xl"
            color="var(--primary)"
            position="absolute"
            top="50%"
            left="50%"
          />
        )}
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
          {teamsRepeat.length > 0 &&
            teamsRepeat
              .filter(async (team) => {
                return await team.team
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((team, index) => (
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
              ))}
        </Box>
      </Container>
    </>
  );
}
