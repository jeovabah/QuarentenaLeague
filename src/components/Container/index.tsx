import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BottomTabBar } from "../TabBar";
interface Props {
  children: React.ReactNode;
}
export const Container = ({ children, ...rest }: any) => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);
  return (
    <Box
      p={"0 20px"}
      bg={"#121214"}
      display={"flex"}
      flexDirection={"column"}
      w={"100%"}
      minH={"100vh"}
      h={"100%"}
      {...rest}
    >
      {children}
      {router.pathname !== "/" && <BottomTabBar />}
    </Box>
  );
};
