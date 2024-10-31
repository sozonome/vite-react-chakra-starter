import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading size="2xl" fontWeight="extrabold">
        vite-react-chakra-starter
      </Heading>
      <Text textStyle="sm">
        This is a vite react template with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};
