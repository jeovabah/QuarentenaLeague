import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  player: any;
}
export const CardPlayer = ({ title, player }: Props) => {
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
      <Text fontWeight={600} color={"white"}>
        {title}
      </Text>
      <Image
        src={player?.link_url}
        alt={"Dan Abramov"}
        boxSize={"2rem"}
        borderRadius={"50%"}
      />
    </Box>
  );
};
