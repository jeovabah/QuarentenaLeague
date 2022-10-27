import { Box } from "@chakra-ui/react";
import { BottomTabBar } from "../TabBar";
interface Props {
  children: React.ReactNode;
}
export const Container = ({ children, ...rest }: any) => {
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
      <BottomTabBar />
    </Box>
  );
};
