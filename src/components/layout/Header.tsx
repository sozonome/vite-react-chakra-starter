import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
    >
      <Heading as="h1">vitechakra-starter</Heading>
    </Flex>
  );
};

export default Header;
