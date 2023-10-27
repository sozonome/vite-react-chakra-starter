import { Flex, Image } from '@chakra-ui/react';

const ICON_SIZE = 22;

const SomeImage = () => {
  return (
    <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
      <Image
        src="/assets/vite-logo.svg"
        title="vite"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/react-icon.svg"
        title="react"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/chakra-ui-logomark-colored.svg"
        title="Chakra UI"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/ts-logo-512.svg"
        title="TypeScript"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
    </Flex>
  );
};

export default SomeImage;
