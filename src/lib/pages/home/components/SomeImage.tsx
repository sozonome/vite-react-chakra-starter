import { Box, Flex, Image, Link } from "@chakra-ui/react";

const SomeImage = () => {
  return (
    <>
      <Box textAlign="center" marginX="auto" maxWidth={[280, 400]}>
        <Image width={240} src="/assets/Building blocks-amico.svg" />
        <Link fontSize="xs" href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Box>

      <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
        <Image
          src="/assets/vite-logo.svg"
          title="vite"
          height={33}
          width={33}
        />
        <Image
          src="/assets/react-icon.svg"
          title="react"
          height={33}
          width={33}
        />
        <Image
          src="/assets/chakra-ui-logomark-colored.svg"
          title="Chakra UI"
          height={33}
          width={33}
        />
        <Image
          src="/assets/ts-logo-512.svg"
          title="TypeScript"
          height={33}
          width={33}
        />
      </Flex>
    </>
  );
};

export default SomeImage;
