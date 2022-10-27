import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { CardTeam } from "../../components/CardTeam";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
export default function Teams() {
  const [search, setSearch] = useState("");
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
