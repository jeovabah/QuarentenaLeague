import { Avatar, Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
interface Props {
  title: string;
  description: string;
  players: any;
}
export const CardTeam = ({ title, description, players }: Props) => {
  return (
    <>
      <Text
        fontWeight={600}
        color={"white"}
        w="100%"
        borderBottom="1px solid #d3d3d3"
        textAlign={"center"}
      >
        {title}
      </Text>
      <Box
        w={"100%"}
        p={"20px 10px"}
        background={"#202024"}
        borderRadius={"10px"}
        borderBottom={"1px solid var(--primary)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1rem"}
          maxH={"280px"}
          w={"100%"}
        >
          {players &&
            players.map((player: any, index: number) => (
              <Text
                key={index}
                color={"GrayText"}
                w="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                textTransform={"capitalize"}
                fontWeight={600}
              >
                {player.player}
                <Avatar
                  size={"md"}
                  key={index}
                  name={player.name}
                  src={player.link_url}
                />
              </Text>
            ))}
        </Box>
        <Box display={"flex"} gap={"0.5rem"}>
          {/* {players &&
          players.map((player: any, index: number) => (
            <Avatar
              key={index}
              size={"sm"}
              name={player.name}
              src={player.link_url}
            />
          ))} */}
        </Box>
      </Box>
    </>
  );
};
