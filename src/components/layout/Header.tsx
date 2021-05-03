import { Flex, Heading } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
    >
      <Heading as="h1" size="sm">
        vite-react-chakra-starter
      </Heading>
    </Flex>
  );
};

export default Header;
