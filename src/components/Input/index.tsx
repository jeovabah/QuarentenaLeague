import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export const Input = ({ placeholder, ...rest }: any) => {
  return (
    <ChakraInput
      placeholder={placeholder}
      w={"100%"}
      background={"#202024"}
      color={"white"}
      borderRadius={"10px"}
      border={"none"}
      padding={"1rem"}
      margin={"1rem 0"}
      {...rest}
    />
  );
};
