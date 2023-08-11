import { Box, Flex, Heading, Stack, Text, Divider, useColorModeValue, Link, Icon } from "@chakra-ui/react"
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
        right={{ base: 10, sm: 20, lg: 150 }}
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
        <Link
          href={"https://www.linkedin.com/in/nick-wooten-a6802599/"}
          target="_blank"
          _before={{
            backgroundColor: "#C53030",
          }}
          _hover={{
            color: "#C53030",
          }}
        >
          <Icon
            as={FiLinkedin}
            boxSize={['5', '12']} 
            marginTop={"2px"}
          />
        </Link>
        <Link
          href={"https://github.com/Nswooten"}
          target="_blank"
          _before={{
            backgroundColor: "#C53030",
          }}
          _hover={{
            color: "#C53030",
          }}
        >
          <Icon
            as={FiGithub}
            boxSize={['5', '12']} 
            marginTop={"2px"}
          />
        </Link>
        <Link
          href={"mailto:nswooten@gmail.com"}
          target="_blank"
          _before={{
            backgroundColor: "#C53030",
          }}
          _hover={{
            color: "#C53030",
          }}
        >
          <Icon
            as={FiMail}
            boxSize={['5', '12']}            
            marginTop={"2px"}
          />
        </Link>
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