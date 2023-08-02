import { Box, Flex, Heading, Stack, Text, Divider, HStack } from "@chakra-ui/react"

import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiGit,
  SiChakraui,
  SiMicrosoftexcel,
  SiPostgresql,
  SiMongodb,
  SiSequelize,
  SiMongoose

} from "react-icons/si"

const AboutMe = (props) => {
  const { intersectionRef, isVisible, } = props
  // console.log(isVisible, "AboutMe");
  return (
    <Flex
    id={"About Me"}
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
          <Heading
            textAlign={"center"}
            whiteSpace={"nowrap"}
            fontSize={"clamp(50px, 7.4vw, 80px)"}
            marginTop={"2vh"}
          >
            About Me
            <Divider
              style={{ borderColor: "#C53030" }}
              width={"65%"}
              transition={"250ms ease-in"}
            />
          </Heading>
          <Text>
            I have a passion for utilizing logic to solve problems in creative, yet practical ways. I honed the skills necessary to effectively pursue this passion while studying philosophy at A&M. Since then, I've worked in the oilfield as a field engineer, and although actualizing, I needed a carreer with a work-life balance more codusive to happiness. Last year, I made the descision to transition carreers to software engineering.
          </Text>
          <Text>
            Today, I am now a proud graduate of Genrealy Assembly's Software Engineering Immersive Boot Camp. I am currently working part-time as an engineering technician while I continue my pursuit for a position in my new carreer. Currently, my main tools are JavaScript/TypeScript and React.
          </Text>
          <Text>
            I love everything outdoors, but my biggest obsession currently is mountain biking. When I'm not coding or outside, I spend my freetime taxing my mental health with League of Legends.
          </Text>
          <Text>
            Care to know more? Keep on reading! Below are a few more skills in my toolbox:
          </Text>
          <Box>
            <HStack>
              <SiJavascript />
              <SiTypescript />
              <SiPython />
            </HStack>
              <SiCss3 />
              <SiChakraui />
              <SiHtml5 />
            <HStack>
              <SiGit />
              <SiNodedotjs />
              <SiMicrosoftexcel />
            </HStack>
            <HStack>
              <SiMongodb />
              <SiMongoose />
              <SiPostgresql />
              <SiSequelize />
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AboutMe

