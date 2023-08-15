import SkillIcon from "../SkillIcon/SkillIcon"
import { useMediaQuery, Box, Flex, Heading, Stack, Text, Divider, HStack } from "@chakra-ui/react"

const AboutMe = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  return (
    <Flex
      id={"About Me"}
      alignItems={"center"}
      height={"100vh"}
      justifyContent={"flex-start"}
      zIndex={1}
      width={{ base: "100%", sm: "60%", md: "80%" }}
      marginRight={"10%"}
      display={"flex"}
      py={{ base: "2rem", md: "4rem" }}
    >
      <Stack
        ref={intersectionRef}
        minHeight={"100vh"}
        height={"100vh"}
        maxHeight={"100vh"}
      >
        <Box
          marginTop={isLargeScreen ? "5vh" : "0vw"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}>
            <Divider
              style={{ borderColor: "#C53030" }}
              width={"65%"}
              transition={"250ms ease-in"}
            />
            <Heading
              textAlign={"center"}
              whiteSpace={"nowrap"}
              fontSize={"clamp(3rem, 4rem, 5rem)"}
              marginTop={"2vh"}
              mb="2rem"
              margin={"2vw"}
            >
              About Me
            </Heading>
            <Divider
              style={{ borderColor: "#C53030" }}
              width={"65%"}
              transition={"250ms ease-in"}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            fontSize={"clamp(1rem, 1.1rem, 1.6rem)"}
          >
            <Text
            >
              I have a passion for utilizing logic to solve problems in creative, yet practical ways. I honed the skills necessary to effectively pursue this passion while studying philosophy at A&M. Since then, I've worked in the oilfield as a field engineer, and although actualizing in many ways, I needed a carreer with a work-life balance more codusive to happiness. Last year, I made the descision to transition carreers to software engineering.
            </Text>
            <Text
              marginTop={"2vh"}>
              Today, I am now a proud graduate of General Assembly's Software Engineering Immersive Boot Camp. I am currently working part-time as an engineering technician at Vertice Oil Tools while I continue my search for a position in my new carreer. Currently, my main tools are JavaScript/TypeScript and React.
            </Text>
            <Text
              marginTop={"2vh"}>
              I love everything outdoors, but my biggest obsession currently is mountain biking. When I'm not coding or outside, I spend my freetime taxing my mental health with League of Legends.
            </Text>
            <Text
              marginTop={"2vh"}>
              Care to know more? Keep on reading! Below are a few more skills in my toolbox:
            </Text>

          </Box>
          <Box>
            <HStack
              justifyContent={"space-around"}
              marginTop={"3vh"}
            >
              <SkillIcon icon={"SiJavascript"} color="#F7DF1E" label="JavaScript" />
              <SkillIcon icon={"SiTypescript"} color="#3074bf" label="TypeScript" />
              <SkillIcon icon={"SiReact"} color="#5ed3f2" label="React" />
            </HStack>
            <HStack
              justifyContent={"space-around"}
              marginTop={"1vh"}
            >
              <SkillIcon icon={"SiCss3"} color="#2965f1" label="CSS3" />
              <SkillIcon icon={"SiChakraui"} color="#64c9c9" label="Chakra-UI" />
              <SkillIcon icon={"SiPython"} color="#3776AB" label="Python" />
            </HStack>
            <HStack
              justifyContent={"space-around"}
              marginTop={"1vh"}
            >
              <SkillIcon icon={"SiMongodb"} color="#3FA037" label="MongoDB" />
              <SkillIcon icon={"SiMongoose"} color="#861b00" label="Mongoose" />
              <SkillIcon icon={"SiNodedotjs"} color="#006e00" label="Node.js" />
            </HStack>
            <HStack
              justifyContent={"space-around"}
              marginTop={"1vh"}
            >
              <SkillIcon icon={"SiPostgresql"} color="#31648d" label="PostgreSQL" />
              <SkillIcon icon={"SiSequelize"} color="#0bafef" label="Sequelize" />
              <SkillIcon icon={"SiGit"} color="#e94d32" label="Git" />
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AboutMe


