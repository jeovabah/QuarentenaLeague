import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { CardPlayerSticker } from "../CardPlayerSticker";
import ponta from "../../assets/ponta-png.png";
export const CardStickerAlbum = ({ players, team }: any) => {
  const switchCase = (team: string) => {
    console.log(team);
    switch (team) {
      case "Argentina":
        return "https://img.freepik.com/fotos-gratis/bandeira-da-argentina_1401-57.jpg";
      case "Alemanha ":
        return "https://www.meusdicionarios.com.br/wp-content/uploads/2016/05/sh_bandeira-da-alemanha_386181889.jpg";
      case "Brasil":
        return "https://pbs.twimg.com/media/EJu-T-eWkAA8rcd?format=jpg&name=4096x4096";
      case "França ":
        return "https://http2.mlstatic.com/D_NQ_NP_665516-MLB28079382444_092018-O.jpg";
      case "Cuba":
        return "https://img.freepik.com/fotos-gratis/bandeira-de-cuba_1401-62.jpg";
      case "EUA":
        return "https://img.freepik.com/fotos-gratis/bandeira-dos-eua_1401-63.jpg";
      case "França":
        return "https://img.freepik.com/fotos-gratis/bandeira-da-franca_1401-64.jpg";
      case "Japão":
        return "https://img.freepik.com/fotos-gratis/bandeira-do-japao_1401-65.jpg";
      default:
        return "https://img.freepik.com/fotos-gratis/bandeira-da-argentina_1401-57.jpg";
    }
  };

  const switchCaseBackground = (team: string) => {
    console.log(team);
    switch (team) {
      case "Argentina ":
        return "linear-gradient(90deg, rgba(236,236,247,1) 0%, rgba(0,198,215,1) 100%);";
      case "Alemanha ":
        return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(121,9,9,1) 35%, rgba(217,255,0,1) 100%)";
      case "Brasil":
        return "linear-gradient(90deg, rgba(247,255,0,1) 32%, rgba(82,198,0,1) 69%);";
      case "França ":
        return "linear-gradient(90deg, rgba(0,9,198,1) 22%, rgba(255,255,255,1) 49%, rgba(255,0,0,1) 78%);";
      case "Cuba":
        return "https://img.freepik.com/fotos-gratis/bandeira-de-cuba_1401-62.jpg";
      case "EUA":
        return "https://img.freepik.com/fotos-gratis/bandeira-dos-eua_1401-63.jpg";
      case "França":
        return "https://img.freepik.com/fotos-gratis/bandeira-da-franca_1401-64.jpg";
      case "Japão":
        return "https://img.freepik.com/fotos-gratis/bandeira-do-japao_1401-65.jpg";
      default:
        return "https://img.freepik.com/fotos-gratis/bandeira-da-argentina_1401-57.jpg";
    }
  };

  const switchCaseColor = (team: string) => {
    console.log(team);
    switch (team) {
      case "Argentina ":
        return "black";
      case "Alemanha ":
        return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(121,9,9,1) 35%, rgba(217,255,0,1) 100%)";
      case "Brasil":
        return "linear-gradient(90deg, rgba(247,255,0,1) 32%, rgba(82,198,0,1) 69%);";
      case "França ":
        return "linear-gradient(90deg, rgba(0,9,198,1) 22%, rgba(255,255,255,1) 49%, rgba(255,0,0,1) 78%);";
      case "Cuba":
        return "https://img.freepik.com/fotos-gratis/bandeira-de-cuba_1401-62.jpg";
      case "EUA":
        return "https://img.freepik.com/fotos-gratis/bandeira-dos-eua_1401-63.jpg";
      case "França":
        return "https://img.freepik.com/fotos-gratis/bandeira-da-franca_1401-64.jpg";
      case "Japão":
        return "https://img.freepik.com/fotos-gratis/bandeira-do-japao_1401-65.jpg";
      default:
        return "https://img.freepik.com/fotos-gratis/bandeira-da-argentina_1401-57.jpg";
    }
  };
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
        <Text color={"white"} fontWeight={600}>
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
          return <CardPlayerSticker key={index} player={player} />;
        })}
      </Flex>
    </Box>
  );
};
