import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoFootballOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
export const BottomTabBar = () => {
  const router = useRouter();
  return (
    <Box
      position={"fixed"}
      bottom={0}
      left={0}
      w={"100%"}
      display={"flex"}
      alignItems={"center"}
      background={"#202024"}
      padding={"1.2rem"}
    >
      <Box cursor={"pointer"} w={"50%"}>
        <Link href={"/player"}>
          <Text
            textAlign={"center"}
            color={router.pathname == "/player" ? "var(--primary)" : "white"}
            fontWeight={"bold"}
            flexDir="column"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5rem"}
          >
            {<AiOutlineTeam size={20} />}
          </Text>
        </Link>
      </Box>
      <Box cursor={"pointer"} w={"50%"}>
        <Link href={"/teams"}>
          <Text
            textAlign={"center"}
            color={router.pathname == "/teams" ? "var(--primary)" : "white"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5rem"}
          >
            {<IoFootballOutline size={20} />}
          </Text>
        </Link>
      </Box>
      <Box cursor={"pointer"} w={"50%"}>
        <Link href={"/album"}>
          <Text
            textAlign={"center"}
            color={router.pathname == "/album" ? "var(--primary)" : "white"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5rem"}
          >
            {<GiNewspaper size={20} />}
          </Text>
        </Link>
      </Box>
      <Box cursor={"pointer"} w={"50%"}>
        <Link href={"/regulamento"}>
          <Text
            textAlign={"center"}
            color={
              router.pathname == "/regulamento" ? "var(--primary)" : "white"
            }
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5rem"}
          >
            {<RiFilePaper2Line size={20} />}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
