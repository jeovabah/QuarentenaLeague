import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ContainerText } from "../../components/ContainerText";
import { BottomTabBar } from "../../components/TabBar";

export default function Regulamento() {
  return (
    <Box
      p={"0 20px"}
      bg={"#fff"}
      display={"flex"}
      flexDirection={"column"}
      w={"100%"}
      minH={"100vh"}
      h={"100%"}
      mb={"5rem"}
    >
      <Flex alignItems={"center"} mt="1rem" justifyContent={"space-between"}>
        <Box>
          <Image
            w={"5rem"}
            src="https://media.discordapp.net/attachments/1048799236801712272/1049508559194423367/image.png"
            alt="Logo"
          />
        </Box>
        <Text
          fontWeight={"bold"}
          textTransform="uppercase"
          fontSize={"1.5rem"}
          ml={"1rem"}
          mr={"1rem"}
        >
          Regulamento
        </Text>
        <Image
          w={"5rem"}
          src="https://media.discordapp.net/attachments/1048799236801712272/1049509092797980773/image.png"
          alt="Logo"
        />
      </Flex>
      <Box>
        <ContainerText
          text=" Cada partida será composta por dois períodos de 7 min exatos cada um,
intercalando-se em 3 min. Além disso, entre duas partidas consecutivas
haverá um intervalo de 2 min OBRIGATÓRIO"
        />
        <ContainerText
          text=" Até 4 min de cada tempo , todos os integrantes da equipe deverão ter
entrado em quadra por tempo considerável, caso contrário o time
adversário escolherá 1 ou 2 jogadores( baseado no time e em quantas
substituições fizeram) do time punido para se ausentar do jogo por 1min"
        />
        <ContainerText
          text={
            "O jogador que for penalizado com um cartão amarelo deverá se ausentar da partida durante 2 min e poderá retornar após isso. "
          }
        />
        <ContainerText
          text={
            "O jogador que for penalizado com um cartão vermelho deixará a partida de imediato e o seu time ficará com um integrante a menos, em campo, durante 3 min."
          }
        />
        <ContainerText
          text={
            "O jogador que for penalizado com um cartão vermelho deixará a partida de imediato e o seu time ficará com um integrante a menos, em campo, durante 3 min."
          }
        />
        <ContainerText
          text={
            "Caso um jogador tome 2 cartões amarelos em partidas ou 1 cartão vermelho, ele não poderá jogar o 1º tempo da partida seguinte"
          }
        />
        <ContainerText
          text={`
             Se um time cometer 6 faltas em um único tempo, essa equipe será
             penalizada com shoot-out.
             *Shoot-out: Um jogador da equipe adversária terá 10s para conduzir a
             bola de forma livre desde a marcação pós meio campo e tentar buscar o
             gol sozinho. Após encerrado esse tempo, a bola deverá ser reposta pelo
             goleiro( em caso de shoot-out desperdiçado) ou no meio de campo( no
             caso de gol)
             `}
        />
        <ContainerText
          text={`
          Cada seleção joga contra as demais duas vezes, totalizando 6 jogos de
          cada time e com isso, a equipe que tiver 6 vitórias nestes jogos já é
          declarada campeã, fora isso, os dois time mais bem classificados( com
          saldo de gols como critério de desempate) passam para final única com
          vantagem do empate caso um time tenha ganhado os dois jogos contra o
          adversário da final
             `}
        />
        <ContainerText
          text={`
          É de grande importância salientar que a UQL é fruto de longo esforço da
          administração e todos os envolvidos, logo, em caso de desrespeito com a
          equipe de adminstração , mesários, juízes ou até os próprios
          companheiros o cidadão será penalizado com punições que vão de cartão
          amarelo direto até a expulsão do torneio.
             `}
        />
      </Box>
      <BottomTabBar />
    </Box>
  );
}
