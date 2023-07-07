import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
// import useOnScreen from "../../hooks/useOnScreen";


const MyExperience = (props) => {
  const {intersectionRef, isVisible, } = props
  console.log(isVisible, "MyExperience"); 
  return (
    <Flex
    alignItems={"center"}
    height={"100vh"}
    >
      <Stack
      id={"My Experience"}
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            deez my ol jobs
          </Text>
          <Heading>
            BE IMPRESSED 
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}
 
export default MyExperience