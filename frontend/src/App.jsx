import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip={"text"}
          >
            My Besties
          </Text>
          🚀
        </Text>
      </Container>
    </Stack>
  );
}

export default App;
