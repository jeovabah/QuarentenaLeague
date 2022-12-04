import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { GeralProviderProvider } from "../GeralProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GeralProviderProvider>
        <Component {...pageProps} />
      </GeralProviderProvider>
    </ChakraProvider>
  );
}
