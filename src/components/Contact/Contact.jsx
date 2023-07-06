import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"



const Contact = (props) => {
  const {intersectionRef, isVisible, } = props
  console.log(isVisible, "Contact"); 
  return (  
    <Flex
    alignItems={"center"}
    height={"100vh"}
    >
      <Stack
      id="Contact"
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            Hire MEEEE
          </Text>
          <Heading>
           PLEASE
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}
 
export default Contact