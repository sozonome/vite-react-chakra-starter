import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Josefin Sans, sans-serif",
    body: "Josefin Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config: {
    initialColorMode: "light",
  },
});
