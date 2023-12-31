import { Box, Flex, Heading, Stack, Text, Divider} from "@chakra-ui/react"
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
              fontSize={"clamp(1rem, 1.5rem, 2rem)"}
              style={{ wordSpacing: ".3em" }}
            >
              <Text
                as={"a"}
                fontWeight={"bold"}
                color={"#822727"}
                href="https://www.youtube.com/watch?v=CwIAPKHUdvE" target="_blank"
                position={"relative"}
                textShadow={" 2px 2px 4px rgba(0, 0, 0, 0.1)"}
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
              fontSize={"clamp(5rem, 6rem, 7rem)"}
              marginTop={"2vh"}
              fontWeight={"extrabold"}
              textShadow={" 2px 2px 4px rgba(0, 0, 0, 0.5)"}
            >
              Nick Wooten.
            </Heading>
            <Heading
              textAlign={"left"}
              fontSize={"clamp(2rem, 3rem, 4rem)"}
              whiteSpace={"nowrap"}
              marginTop={"1vh"}
              fontWeight={"bold"}
              color={"#C53030"}
              textShadow={" 2px 2px 4px rgba(0, 0, 0, 0.5)"}
            >
              Full-Stack Developer
            </Heading>
          </Box>
          <Box
            width={"75%"}
          >
            <Text
              fontSize={"clamp(1rem, 1.3rem, 1.6rem)"}
              textAlign={"left"}
              marginTop={"3vh"}
              marginBottom={"3vh"}
              fontWeight={"light"}
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
              fontSize={"clamp(1rem, 1.5rem, 2rem)"}
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