import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"



const Projects = (props) => {
  const {intersectionRef, isVisible, } = props
  console.log(isVisible, "Projects");
  return (  
    <Flex
    alignItems={"center"}
    height={"100vh"}
    id="Projects"
    justifyContent={"center"}
    >
      <Stack
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            MY projs
          </Text>
          <Heading>
            LOOK AT THEM
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Projects