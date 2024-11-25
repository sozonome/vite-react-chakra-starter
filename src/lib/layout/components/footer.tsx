import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          agustinusnathaniel.com
        </Link>
      </Text>
    </Flex>
  );
};
