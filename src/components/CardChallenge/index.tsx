import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { switchCase } from "../../utils/Helper";

export const CardChallenger = ({ data }: any) => {
  return (
    <Flex
      background={"#202024"}
      p={5}
      justifyContent="space-between"
      borderRadius={10}
      mt="1rem"
    >
      <Box>
        {" "}
        <Text display={"flex"} color={"#fff"}>
          {/* {data?.team}{" "} */}
          <Image
            ml={"1rem"}
            width={8}
            objectFit="cover"
            height={8}
            src={switchCase(data?.team)}
          />
        </Text>{" "}
      </Box>
      <Box>
        {" "}
        <Text color={"#fff"}>{data?.goalTeam}</Text>{" "}
      </Box>
      <Box>
        {" "}
        <Text color={"#fff"}>x</Text>{" "}
      </Box>
      <Box>
        {" "}
        <Text color={"#fff"}>{data?.goalTeamRival}</Text>{" "}
      </Box>
      <Box>
        {" "}
        <Text color={"#fff"} display="flex">
          {/* {data?.teamRival}{" "} */}
          <Image
            ml={"1rem"}
            width={8}
            objectFit="cover"
            height={8}
            src={switchCase(data?.teamRival)}
          />
        </Text>
      </Box>
    </Flex>
  );
};
