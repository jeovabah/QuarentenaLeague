import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import campo from "../../assets/campo.png";
interface Props {
  position: string;
}
export const PositionChoice = ({ position }: Props) => {
  return (
    <Box display={"flex"} flexDir="column" mt={"1rem"} alignItems="center">
      <Image
        src={campo}
        alt="campo"
        width={"80"}
        style={{
          objectFit: "contain",
        }}
      />
      <Text color="white">{position}</Text>
    </Box>
  );
};
