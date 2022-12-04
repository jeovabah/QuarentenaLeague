import { Box, Button, Select } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import { database } from "../../firebase/firebase";
import { get, ref, set } from "firebase/database";

interface PropsPlayer {
  name: string;
  team: string;
  position: string;
  link_url: string;
}

export default function RegisterPlayer() {
  const [player, setPlayer] = useState({
    name: "",
    team: "",
    position: "",
    link_url: "",
  });
  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState<any>([]);

  async function writePlayerData(
    name: string,
    team: string,
    position: string,
    link_url: string
  ) {
    if (name !== "" && team !== "" && position !== "" && link_url !== "") {
      await set(ref(database, "player/" + name), {
        player: name,
        team: team,
        position: position,
        link_url: link_url,
      });
      alert("Jogador cadastrado com sucesso!");
      setPlayer({
        name: "",
        team: "",
        position: "",
        link_url: "",
      });
    } else {
      alert("Preencha todos os campos");
    }
  }

  const [players, setPlayers] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  async function readPlayerData() {
    setLoading(true);
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
        console.log(teams);
        setPlayers(teams);
      } else {
        console.log("No data available");
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    readPlayerData();
  }, []);
  async function writeTeamData(team: string) {
    // increment id
    if (team !== "") {
      await set(ref(database, "team/" + team), {
        team: team,
      });
      alert("Time cadastrado com sucesso!");
      setTeam("");
    } else {
      alert("Preencha todos os campos");
    }
  }

  async function readTeamData() {
    get(ref(database, "team/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teams = Object.entries(data).map(([key, value]: any) => {
          return {
            team: value.team,
          };
        });
        setTeams(teams);
      } else {
        console.log("No data available");
      }
    });
  }

  useEffect(() => {
    readTeamData();
  }, []);

  const updateLinkUrl = (e: any) => {};
  //transform first object in array
  // const teams = Object.keys(teams).map((key) => teams[key]);
  // console.log(teams);

  return (
    <>
      <Header title="Registrar Jogador" />

      <Container>
        <Box>
          <Input
            placeholder="Nome"
            onChange={(e: any) =>
              setPlayer({ ...player, name: e.target.value })
            }
            value={player.name}
            size="lg"
          />
          {/* <Input
            placeholder="Time"
            onChange={(e: any) =>
              setPlayer({ ...player, team: e.target.value })
            }
            value={player.team}
            size="lg"
          /> */}
          <Select
            onChange={(e: any) =>
              setPlayer({ ...player, team: e.target.value })
            }
            color="white"
            backgroundColor={"#202024"}
            value={player.team}
            size="lg"
            border={"none"}
            mt="1rem"
            mb="1rem"
          >
            <option
              value=""
              style={{
                color: "white",
                backgroundColor: "#202024",
              }}
            >
              Selecione um time
            </option>
            {teams.length > 0 &&
              teams.map((team: any) => (
                <option
                  value={team.team}
                  style={{
                    color: "white",
                    backgroundColor: "#202024",
                  }}
                  key={team.team}
                >
                  {team.team}
                </option>
              ))}
          </Select>
          <Input
            placeholder="Posição"
            onChange={(e: any) =>
              setPlayer({ ...player, position: e.target.value })
            }
            value={player.position}
            size="lg"
          />
          <Input
            placeholder="Link da Imagem"
            onChange={(e: any) =>
              setPlayer({ ...player, link_url: e.target.value })
            }
            value={player.link_url}
            size="lg"
          />
        </Box>
        <Box mt="1rem" w={"100%"}>
          <Button
            w={"100%"}
            size="lg"
            onClick={() =>
              writePlayerData(
                player.name,
                player.team,
                player.position,
                player.link_url
              )
            }
          >
            Registrar Jogador
          </Button>
        </Box>
        <Box mt="4rem">
          <Header title="Editar Jogador" />

          <Select
            onChange={(e: any) =>
              setPlayer({ ...player, team: e.target.value })
            }
            color="white"
            backgroundColor={"#202024"}
            value={player.team}
            size="lg"
            border={"none"}
            mt="1rem"
            mb="1rem"
          >
            <option
              value=""
              style={{
                color: "white",
                backgroundColor: "#202024",
              }}
            >
              Selecione um Jogador
            </option>
            {players.length > 0 &&
              players.map((team: any) => (
                <option
                  value={team.player}
                  style={{
                    color: "white",
                    backgroundColor: "#202024",
                  }}
                  key={team.player}
                >
                  {team.player}
                </option>
              ))}
          </Select>
          <Input
            placeholder="Link Da Imagem"
            onChange={(e: any) =>
              setPlayer({ ...player, link_url: e.target.value })
            }
            value={team}
            size="lg"
          />
          <Box mt="1rem" w={"100%"}>
            <Button w={"100%"} size="lg" onClick={() => writeTeamData(team)}>
              Editar
            </Button>
          </Box>
        </Box>
        <Box mt="5rem">
          <Input
            placeholder="Cadastrar Times"
            onChange={(e: any) => setTeam(e.target.value)}
            value={team}
            size="lg"
          />
        </Box>
        <Box mt="1rem" w={"100%"}>
          <Button w={"100%"} size="lg" onClick={() => writeTeamData(team)}>
            Criar Time
          </Button>
        </Box>
      </Container>
    </>
  );
}
