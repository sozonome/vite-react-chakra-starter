import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        vite-react-chakra-starter
      </Heading>
      <Text fontSize="sm">
        This is a vite react template with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
