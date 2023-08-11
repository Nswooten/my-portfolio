import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import Footer from "../Footer/Footer"
import ResumeButton from "../ResumeButton/ResumeButton"


const Contact = (props) => {
  const { intersectionRef, isVisible, } = props
  // console.log(isVisible, "Contact");
  return (
    <>

      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100vh"}
        id="Contact"
        zIndex={1}
      >
        <Stack
          ref={intersectionRef}
          flexBasis={{ base: 0, md: 0 }}
        >
          <Box
            marginTop={"20vh"}
          >
            <Text
            fontSize={"clamp(14px, 1.7vw, 22px)"}
            >
              Whats next?
            </Text>
            <Heading
            color={"#C53030"}
            fontSize={{ base: "2rem", md: "clamp(3rem, 7.4vw, 5rem)" }}
            marginTop={"3vh"}
            >
              Get In Touch
            </Heading>
          </Box>
          <Box
          fontSize={"clamp(12px, 1.7vw, 20px)"}
          width={"30vw"}
          marginTop={"6vh"}
          >
            <Text
            lineHeight={"2"}
            >
              I am actively seeking new job opportunities and would welcome the chance to connect with potential employers. If you have any opportunities available, please feel free to reach out to me via
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
                {` email `}
              </Text>
              (nswooten@gmail.com) or by
              <Text
                as={"a"}
                color={"#822727"}
                href={"sms:1-979-417-7881"}
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
                {` phone. `}
              </Text> (979-417-7881). I'm excited to explore how my skills and experience could contribute to your team and organization.
            </Text>
          </Box>
          <Box
          marginTop={"10vh"}
          >
          <ResumeButton/>
          </Box>
        </Stack>
        <Footer />
      </Flex>
    </>
  )
}

export default Contact