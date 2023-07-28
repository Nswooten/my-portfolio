import { Box, Flex, Heading, Stack, Text, Divider, useColorModeValue } from "@chakra-ui/react"
import { FiCodepen, FiGithub, FiLinkedin, FiFacebook, FiMail } from "react-icons/fi"


const Social = (props) => {
  const { intersectionRef, isVisible, } = props
  console.log(isVisible, "AboutMe");
  return (
    <>
    <Stack
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    justify="center" 
    position={"fixed"}
    right={{ base: 5, sm: 5, lg:15 }}
    width={"11vw"}
    height={"60vh"}
    marginTop={"79"}
    zIndex={3}
    >
    <Divider
    color={useColorModeValue("white", "black")}
    transition={"250ms ease-in"}
    orientation="vertical"
    />
      <FiLinkedin 
      size={"80px"}
      />
     
      <FiGithub
      margin
      size={"80px"}
      />
      <FiFacebook 
      size={"80px"}
      />
      <FiMail
      size={"80px"}
      />
      <Divider
    color={useColorModeValue("white", "black")}
    transition={"250ms ease-in"}
    orientation="vertical"
    />
    </Stack>
    </>
  )
}

export default Social