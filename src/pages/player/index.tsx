import { Box, Spinner } from "@chakra-ui/react";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardPlayer } from "../../components/CardPlayer";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { database } from "../../firebase/firebase";

export default function Player() {
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

  return (
    <>
      <Header title="Jogadores" />
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
        <Box display={"grid"} gap=".5rem" mt="1rem" mb="2rem">
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
