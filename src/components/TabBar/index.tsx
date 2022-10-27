import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoFootballOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
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
        <Link href={"/"}>
          <Text
            textAlign={"center"}
            color={router.pathname == "/" ? "var(--primary)" : "white"}
            fontWeight={"bold"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5rem"}
          >
            {<AiOutlineTeam size={20} />}
            Jogadores
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
            Times
          </Text>
        </Link>
      </Box>
      <Box cursor={"pointer"} w={"50%"}>
        <Link href={"/register"}>
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
            Times
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
