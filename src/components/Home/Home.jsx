import { Box, Container, Flex, Heading, Stack, Text, Divider, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"

const Home = (props) => {
  const { intersectionRef, isVisible } = props
  const [content, setContent] = useState(null)
  const dontRedirect = (e) => {
    e.preventDefault();
    setContent("New Content")
  }

  return (
    <>
      
      <Flex
        id={"Home"}
        alignItems={"center"}
        height={"100vh"}
        justifyContent={"flex-start"}
        zIndex={1}
        width={"80%"}
        marginRight={"10%"}
        display={"flex"}
      >
        <Stack
          ref={intersectionRef}
          minHeight={"100vh"}
          height={"100vh"}
        >
          <Box
            width={"100%"}
            marginTop={"20vh"}
          >
            <Text
              whiteSpace={"nowrap"}
              textAlign={"left"}
              fontSize={"clamp(14px, 1.9vw, 22px)"}
              style={{ wordSpacing: ".3em" }}
            >
              <Text
                as={"a"}
                color={"#822727"}
                href="https://www.youtube.com/watch?v=CwIAPKHUdvE" target="_blank"
                position={"relative"}
                _before={{
                  backgroundColor: "#C53030",
                }}
                _hover={{
                  color: "#C53030",
                }}
              >
                {`Howdy! `}
              </Text>
              My name is
            </Text>
            <Heading
              textAlign={"left"}
              whiteSpace={"nowrap"}
              fontSize={{ base: "2rem", md: "clamp(3rem, 7.4vw, 6rem)" }}
              marginTop={"2vh"}
            >
              Nick Wooten.
            </Heading>
            <Divider
              style={{ borderColor: "#C53030" }}
              width={"65%"}
              transition={"250ms ease-in"}

            />
            <Heading
              textAlign={"left"}
              fontSize={{ base: "1rem", md: "clamp(2rem, 7.4vw, 3rem)" }}
              whiteSpace={"nowrap"}
              marginTop={"1vh"}
            >
              Full-Stack Developer
            </Heading>
          </Box>
          <Box
            width={"75%"}
          >
            <Text
              fontSize={"clamp(14px, 1.7vw, 22px)"}
              textAlign={"left"}
              marginTop={"3vh"}
              marginBottom={"3vh"}
            >
              I'm a software engineer based out of Houston, Tx. I love everything about writing code (especially the
              <Text
                as={"span"}
                textDecoration={"red wavy underline"}
                textDecorationStyle={"wavy"}
                textDecorationThickness={.5}
              >
                {' bugs '}
              </Text>
              ). Currently, I'm looking for a position where I can continue to learn and grow as a developer.
            </Text>
            <Text
              fontSize={"clamp(14px, 1.7vw, 24px)"}
              textAlign={"left"}
              marginTop={"1.5vh"}
              marginBottom={"vh"}
            >
              Have an opportunity for me? I look forward to
              <Text
                as={"a"}
                color={"#822727"}
                href={"mailto:nswooten@gmail.com"}
                position={"relative"}
                _before={{
                  backgroundColor: "#C53030",
                  borderRadius: "5px",
                  bottom: -1,
                  content: `""`,
                  height: "2px",
                  position: "absolute",
                  transition: "100ms ease-out",
                  width: 0
                }}
                _hover={{
                  color: "#C53030",
                  _before: {
                    width: "100%"
                  }
                }}>
                {` hearing `}
              </Text>
              from you!
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>

  )
}

export default Home