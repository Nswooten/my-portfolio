import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"


const Home = (props) => {
  const {pageRefs, intersectionRef, isVisible, } = props
  console.log(isVisible, "Home"); 

  return ( 
    <Container>
    <Flex
    id={"Home"}
    alignItems={"center"}
    height={"100vh"}
    justifyContent={"center"}
    zIndex={1}
    >
      <Stack
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            HOWDY! Me llamo
          </Text>
          <Heading>
            Nick Wooten
          </Heading>
        </Box>
      </Stack>
    </Flex>
    <Box>

    </Box>
    </Container> 
  )
}
 
export default Home