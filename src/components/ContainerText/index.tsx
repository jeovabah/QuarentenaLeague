import { Box, Text } from "@chakra-ui/react";

export const ContainerText = ({ text, ...rest }: any) => {
  return (
    <Box {...rest} mt={"1rem"} ml={"1.5rem"} padding="0.5rem" textAlign="left">
      <ul>
        <li>
          <Text fontWeight={600} color={"black"} mt="1rem">
            {text}
          </Text>
        </li>
      </ul>
    </Box>
  );
};
