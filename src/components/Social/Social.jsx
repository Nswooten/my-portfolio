import { Box, Flex, Heading, Stack, Text, Divider, useColorModeValue } from "@chakra-ui/react"
import { FiCodepen, FiGithub, FiLinkedin, FiFacebook, FiMail } from "react-icons/fi"
import { useMediaQuery } from "@chakra-ui/react"


const Social = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  return (
    <>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        justify="center"
        position={"fixed"}
        right={{ base: 1, sm: 20, lg: 150 }}
        width={"11vw"}
        height={"60vh"}
        marginTop={isLargeScreen ? "10%" : "25%"}
        zIndex={3}
      >
        <Divider
          style={{ borderColor: "#C53030" }}
          transition="250ms ease-in"
          orientation="vertical"
        />
        <FiLinkedin
          size={"80px"}
        />
        <FiGithub
          size={"80px"}
        />
        <FiMail
          size={"80px"}
        />
        <Divider
          style={{ borderColor: "#C53030" }}
          transition="250ms ease-in"
          orientation="vertical"
        />
      </Stack>
    </>
  )
}

export default Social