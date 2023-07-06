import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"



const AboutMe = (props) => {
  const {intersectionRef, isVisible, } = props
  console.log(isVisible, "AboutMe"); 
  return (  
    <Flex
    alignItems={"center"}
    height={"100vh"}
    >
      <Stack
      id="AboutMe"
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            stuff bout me
          </Text>
          <Heading>
            Wanna Be frens?
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}
 
export default AboutMe

