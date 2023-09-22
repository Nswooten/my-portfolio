import { Stack, Divider, Link, Icon, Box, useColorMode } from "@chakra-ui/react"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { useMediaQuery } from "@chakra-ui/react"


const Social = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const { colorMode } = useColorMode()
  const bgColor = colorMode === "dark" ? "#FFFFFC" : "#121317"
  const shadowColor = colorMode === "dark" ? "#EEEEEE" : "#333"
  return (
    <>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        justify="center"
        position={"fixed"}
        right={{ base: 10, sm: 20, lg: "5vw" }}
        width={"11vw"}
        height={"60vh"}
        marginTop={isLargeScreen ? "10%" : "25%"}
        zIndex={3}
      >
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
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
            borderRadius="10px"
            background={bgColor}
            boxShadow={`-5px -5px 15px ${shadowColor}, 5px 5px 15px ${shadowColor}, inset 5px 5px 10px ${shadowColor}, inset -5px -5px 10px ${shadowColor}`}
            cursor="pointer"
          >
            <Icon
              as={FiLinkedin}
              boxSize={['5', '10']}
            />
          </Box>
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
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
            borderRadius="10px"
            background={bgColor}
            boxShadow={`-5px -5px 15px ${shadowColor}, 5px 5px 15px ${shadowColor}, inset 5px 5px 10px ${shadowColor}, inset -5px -5px 10px ${shadowColor}`}
            cursor="pointer"
            marginTop={"20px"}
          >

            <Icon
              as={FiGithub}
              boxSize={['5', '10']}
            // marginTop={"20px"}
            />
          </Box>
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
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            p="10px"
            borderRadius="10px"
            background={bgColor}
            boxShadow={`-5px -5px 15px ${shadowColor}, 5px 5px 15px ${shadowColor}, inset 5px 5px 10px ${shadowColor}, inset -5px -5px 10px ${shadowColor}`}
            cursor="pointer"
            marginTop={"20px"}
          >

            <Icon
              as={FiMail}
              boxSize={['5', '10']}
            />
          </Box>
        </Link>
      </Stack>
    </>
  )
}

export default Social