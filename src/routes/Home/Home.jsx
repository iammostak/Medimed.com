import { Container, Text } from "@chakra-ui/react";

function Home() {
   return (
      <Container
         minH={"100vh"}
         maxW={"container"}
         p={0}
         m={0}
         align={"center"}
         bg={"#f3f6fb"}
      >
         <Text p={7}>home page!</Text>
      </Container>
   );
}

export default Home;
