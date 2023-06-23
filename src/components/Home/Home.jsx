import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"


const Home = (props) => {
  const {pageRefs, intersectionRef, isVisible, } = props
  console.log(isVisible, "Home"); 

  return (  
    <Flex
    alignItems={"center"}
    height={"100vh"}
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
  )
}
 
export default Home