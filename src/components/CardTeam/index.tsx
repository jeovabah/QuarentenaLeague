import { Avatar, Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
interface Props {
  title: string;
  description: string;
  players: any;
}
export const CardTeam = ({ title, description, players }: Props) => {
  useEffect(() => {
    console.log(players);
  }, []);
  return (
    <Box
      w={"100%"}
      p={"20px 10px"}
      background={"#202024"}
      borderRadius={"10px"}
      borderBottom={"1px solid var(--primary)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"0.5rem"}
      >
        <Text fontWeight={600} color={"white"}>
          {title}
        </Text>
        <Text color={"GrayText"}>{description}</Text>
      </Box>
      <Box display={"flex"} gap={"0.5rem"}>
        <Avatar
          size={"sm"}
          name={"Dan Abrahmov"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Avatar
          size={"sm"}
          name={"Dan Abrahmov"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Avatar
          size={"sm"}
          name={"Dan Abrahmov"}
          src={"https://bit.ly/dan-abramov"}
        />
        <Avatar
          size={"sm"}
          name={"Dan Abrahmov"}
          src={"https://bit.ly/dan-abramov"}
        />
      </Box>
    </Box>
  );
};
