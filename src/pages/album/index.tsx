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
import { useGeralProvider } from "../../GeralProvider";
export default function Album() {
  const { players, teams, teamsRepeat, filterTeamsWithPlayersCadastred } =
    useGeralProvider();
  const [search, setSearch] = useState("");
  // const [players, setPlayers] = useState<any>([]);
  // const [teams, setTeams] = useState<any[]>([]);
  // const [teamsRepeat, setTeamsRepeat] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    filterTeamsWithPlayersCadastred(teams, players);
  }, [teams, players]);

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
      {teams.length == 0 && (
        <Spinner
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {teamsRepeat.length > 0 && (
        <Slide easing="ease" autoplay={false}>
          {teamsRepeat
            .filter((team: any) => {
              return team.team.toLowerCase().includes(search.toLowerCase());
            })
            .map((team: any, index: any) => (
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
