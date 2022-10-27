import { Box, Button, grid, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../components/Container";

export default function Home() {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/teams");
  };
  return (
    <Container alignItems={"center"} justifyContent={"center"}>
      <Box display={"flex"} flexDir={"row"} alignItems={"center"}>
        <Text color={"white"} fontWeight={"bold"}>
          {"<Copa>"}
        </Text>
        <Text color={"white"} fontWeight={"bold"} fontSize={"1.4rem"}>
          Quarentena League
        </Text>
      </Box>

      <Box w={"100%"} m={"1rem 0"} maxW={"400px"}>
        <Button onClick={handleRouter} w={"100%"}>
          Arrisque-se
        </Button>
      </Box>
      <Text textAlign={"center"} color={"GrayText"}>
        Depois de Ver o que veremos, não conseguirá mais ver o que veremos!
      </Text>
    </Container>
  );
}
