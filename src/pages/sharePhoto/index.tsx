import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Capture from "../../components/Capture";
import { CardPhoto } from "../../components/CardPhoto";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PositionChoice } from "../../components/PositionChoice";

export default function SharePhoto() {
  const router = useRouter();
  const {
    query: { link_url, position, team, name },
  } = router;
  const [photo, setPhoto] = useState("");
  const [namePlayer, setNamePlayer] = useState("");
  const [positionPlayer, setPositionPlayer] = useState("");

  return (
    <>
      <Header title="Compartilhar minha figurinha" />

      <Container>
        <Box
          display={"flex"}
          justifyContent="space-between"
          flexDirection={"row"}
          alignItems="center"
        >
          <PositionChoice position={position} />
          <Box>
            <Text color={"white"}>Titulos</Text>
            <Box display="flex" color="yellow">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </Box>
          </Box>
        </Box>

        <Box mt="0.5rem">
          <Text
            color={"white"}
            textAlign="center"
            fontWeight={"bold"}
            mb="0.5rem"
          >
            {name}
          </Text>
          <CardPhoto
            setPosition={setNamePlayer}
            uri={link_url ? link_url : ""}
          />
        </Box>

        <Box>
          <Input
            placeholder="Sua posicao"
            w={"100%"}
            background={"#202024"}
            color={"white"}
            borderRadius={"10px"}
            border={"none"}
            padding={"1rem"}
            margin={"1rem 0"}
            onChange={(e) => setPositionPlayer(e.target.value)}
          />
        </Box>
        <Box m="0 auto">
          <Button
            background={"#202024"}
            color={"white"}
            borderRadius={"10px"}
            border={"none"}
            padding={"1rem"}
            margin={"1rem 0"}
          >
            Compartilhar Figurinha
          </Button>
        </Box>
      </Container>
    </>
  );
}
