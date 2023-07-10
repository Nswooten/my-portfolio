import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"



const AboutMe = (props) => {
  const {intersectionRef, isVisible, } = props
  console.log(isVisible, "AboutMe"); 
  return (  
    <Flex
    alignItems={"center"}
    justifyContent={"center"}
    height={"100vh"}
    id="About Me"
    >
      <Stack
      ref={intersectionRef}
      flexBasis={{base:0, md: 0}}
      >
        <Box>
          <Text>
            This Info bout me
          </Text>
          <Heading>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora cupiditate porro, reiciendis a temporibus ratione consectetur doloremque incidunt laudantium. Officiis quia quaerat consequuntur optio totam. Libero iste voluptate sequi.     
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AboutMe

