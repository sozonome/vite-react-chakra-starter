import Icon from "@chakra-ui/icon";
import { Box, Heading } from "@chakra-ui/layout";
import { BiWinkSmile } from "react-icons/bi";

import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Box>
        <Heading textAlign="center">
          Hello
          <Icon as={BiWinkSmile} />
        </Heading>
      </Box>
    </Layout>
  );
}

export default App;
