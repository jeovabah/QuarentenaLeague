import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { CardPlayerSticker } from "../CardPlayerSticker";
import ponta from "../../assets/ponta-png.png";
import {
  switchCaseColor,
  switchCaseBackground,
  switchCase,
} from "../../utils/Helper";
export const CardStickerAlbum = ({ players, team }: any) => {
  return (
    <Box
      display={"flex"}
      h={"90vh"}
      overflow={"auto"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={"1rem"}
      background={switchCaseBackground(team)}
      position={"relative"}
      borderRadius={"0.5rem"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.25)"}
    >
      <Flex alignItems={"center"}>
        <Text
          color={switchCaseColor(team)}
          fontSize={"1.5rem"}
          fontWeight={600}
        >
          {team}
        </Text>
        <Image
          src={switchCase(team)}
          ml={"1rem"}
          width={8}
          objectFit="cover"
          height={8}
        />
      </Flex>
      <Flex w={"100%"} justifyContent={"space-between"} flexWrap="wrap">
        {players.map((player: any, index: number) => {
          return <CardPlayerSticker key={index} team={team} player={player} />;
        })}
      </Flex>
    </Box>
  );
};
