import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Raleway, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config: {
    initialColorMode: "light",
  },
});
