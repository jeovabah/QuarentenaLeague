import { Box } from "@chakra-ui/react";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardPlayer } from "../../components/CardPlayer";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { database } from "../../firebase/firebase";

export default function Player() {
  const [players, setPlayers] = useState<any>([]);
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

  useEffect(() => {
    readPlayerData();
  }, []);

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <>
      <Header title="Jogadores" />
      <Container>
        <Box display={"grid"} gap=".5rem" mt="1rem">
          {players.length > 0 &&
            players.map((player: any, index: number) => {
              return (
                <CardPlayer
                  player={player}
                  title={player?.player}
                  key={index}
                />
              );
            })}
        </Box>
      </Container>
    </>
  );
}
