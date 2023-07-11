import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import Particle from "../../Particle/Particle";

const Home = (props) => {
  const { intersectionRef, isVisible } = props
  console.log(isVisible, "Home"); 

  return (
    <>
    <Particle/>
    <Flex
    id={"Home"}
    alignItems={"center"}
    height={"100vh"}
    justifyContent={"center"}
    zIndex={1}
    width={"75%"}

    >
      <Stack
      ref={intersectionRef}
      
      flexBasis={{ base: 0, md: "66%"}}
      marginTop={{ base: 40, md: 0 }}
      >
        <Box>
          <Text
          whiteSpace={"nowrap"}
          >
            HOWDY! My name is
          </Text>
          <Heading>
            Nick Wooten
          </Heading>
        </Box>
      </Stack>
      <Stack>
        <Box>
          <Text>
            animation
          </Text>
        </Box>
      </Stack>
    </Flex>
    </> 
  
  )
}
 
export default Home