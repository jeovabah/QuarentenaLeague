import { Box, Image, Text } from "@chakra-ui/react";

export const CardPlayerSticker = ({ player }: any) => {
  return (
    <Box
      w={"48%"}
      p={"20px 10px"}
      background={"#202024"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.25)"}
      mt={"1rem"}
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
        alt={player?.player}
        boxSize={"8rem"}
        borderRadius={"25%"}
      />
      <Text fontWeight={400} color={"white"} mt="0.5rem">
        {player?.position} <br />
      </Text>
    </Box>
  );
};
