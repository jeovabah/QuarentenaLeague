import { Box, Image, Text } from "@chakra-ui/react";

export const CardPlayerSticker = ({ player }: any) => {
  return (
    <Box
      w={"45%"}
      p={"20px 10px"}
      background={"#202024"}
      borderRadius={"10px"}
      borderBottom={"1px solid var(--primary)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Text fontWeight={600} color={"white"} mt="1rem" mb="0.5rem">
        {player?.player} <br />
      </Text>
      <Image
        objectFit={"cover"}
        src={player?.link_url}
        alt={"Dan Abramov"}
        boxSize={"5rem"}
        borderRadius={"50%"}
      />
      <Text fontWeight={400} color={"white"} mt="0.5rem">
        {player?.position} <br />
      </Text>
    </Box>
  );
};
