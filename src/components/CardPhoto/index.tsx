import { Image, Input } from "@chakra-ui/react";

interface Props {
  uri?: any;
  setPosition?: any;
}

export const CardPhoto = ({ uri, setPosition }: Props) => {
  return (
    <>
      {!uri ? (
        <Image
          src="https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG"
          alt="campo"
          w="100%"
          style={{
            objectFit: "contain",
          }}
        />
      ) : (
        <Image
          src={uri}
          alt="campo"
          maxW="250px"
          borderRadius={"10px"}
          margin={"0 auto"}
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <Input
        placeholder={"Digite seu nome"}
        w={"100%"}
        background={"#202024"}
        color={"white"}
        borderRadius={"10px"}
        border={"none"}
        padding={"1rem"}
        margin={"1rem 0"}
      />
    </>
  );
};
