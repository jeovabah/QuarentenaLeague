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
  const [teams, setTeams] = useState([
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
    {
      title: "Time 1",
      description: "Descrição do time 1",
    },
    {
      title: "Time 2",
      description: "Descrição do time 2",
    },
    {
      title: "Time 3",
      description: "Descrição do time 3",
    },
  ]);

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

  // return array of player, que tem o mesmo time
  function getPlayersByTeam(team: string) {
    return players.filter((player: any) => player.team === team);
  }
  const returnPlayer = () => {
    const arrayPlayersTeam = [];
    players.forEach((element: any) => {
      console.log(element.team);
    });
  };
  useEffect(() => {
    if (teams) {
      returnPlayer();
    }
  }, [teams]);

  useEffect(() => {
    readPlayerData();
  }, []);

  const includesFilter = () => {
    return teams.filter((team) => {
      return team.title.toLowerCase().includes(search.toLowerCase());
    });
  };

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
          {teams
            .filter((team) => {
              return team.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((team, index) => (
              <CardTeam
                key={index}
                title={team.title}
                description={team.description}
              />
            ))}
        </Box>
      </Container>
    </>
  );
}
