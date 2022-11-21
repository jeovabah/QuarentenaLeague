import { Box, Flex, Text } from "@chakra-ui/react";
import { CardPlayer } from "../CardPlayer";
import { CardPlayerSticker } from "../CardPlayerSticker";

export const CardStickerAlbum = ({ players, team }: any) => {
  return (
    <Box
      display={"flex"}
      h={"100vh"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={"1rem"}
      background={"#202024"}
      borderRadius={"0.5rem"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.25)"}
    >
      <Text color={"white"} fontWeight={600}>
        {team}
      </Text>
      <Flex w={"100%"} justifyContent={"space-between"} flexWrap="wrap">
        {players.map((player: any, index: number) => {
          return <CardPlayerSticker key={index} player={player} />;
        })}
      </Flex>
    </Box>
  );
};
