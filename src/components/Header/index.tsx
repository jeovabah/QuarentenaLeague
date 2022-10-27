import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
}
export const Header = ({ title }: Props) => {
  return (
    <Box
      w={"100%"}
      display={"flex"}
      background={"#202024"}
      padding={"1.2rem"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text color={"white"} fontWeight={600}>
        {title}
      </Text>
    </Box>
  );
};
