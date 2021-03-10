import { Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://sznm.dev" isExternal>
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
