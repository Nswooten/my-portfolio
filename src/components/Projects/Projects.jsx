import { Box, Flex, Stack, Text, Container, Heading, Grid, GridItem, useMediaQuery, Divider } from "@chakra-ui/react"
import ProjectCard from "../ProjectCard/ProjectCard"
import NET from "../../assets/net.png"
import Opinionated from "../../assets/Opinionated.png"
import Snake from "../../assets/Snake.png"




const Projects = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  // console.log(isVisible, "Projects");
  return (
    <Flex
      alignItems={"flex-start"}
      flexDirection={"column"}
      id="Projects"
      justifyContent={"flex-start"}
      zIndex={1}
      ref={intersectionRef}
      marginTop={isLargeScreen ? "" : ""}
      marginRight={"10%"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}>
        <Heading
          textAlign={"center"}
          whiteSpace={"nowrap"}
          fontSize={{ base: "2rem", md: "clamp(3rem, 7.4vw, 4rem)" }}
          marginTop={"2vh"}
          mb="2rem"
          margin={"2vw"}
        >
          Apps
        </Heading>
      </Box>
      <Grid
        display={"grid"}
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"repeat(3, 1fr)"}
        position={"relative"}
        width={"65vw"}
        justifyContent={"center"}
      >
        <GridItem
          gridArea={"1 / 1 / 2 / 2"}
        >
          <ProjectCard
            index={0}
            title="Never Enough Thyme"
            imageSrc={NET}
            gitLink={"https://github.com/Nswooten/never-enough-thyme-front-end"}
            appLink={"https://never-enough-thyme.netlify.app/"}
            description="lorem ipsum loquitor lorem ipsum loquitor lorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitor" />
        </GridItem>
        <GridItem
          gridArea={"2 / 1 / 3 / 2"}
        >
          <ProjectCard
            index={1}
            title="Opinionated"
            imageSrc={Opinionated}
            gitLink={"https://github.com/Nswooten/opinionated"}
            appLink={"https://opinionated.fly.dev/"}
            description="lorem ipsum loquitor lorem ipsum loquitor lorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitor" />
        </GridItem>
        <GridItem
          gridArea={"3 / 1 / 4 / 2"}
        >
          <ProjectCard
            index={2}
            title="Snake (Shrek Themed)"
            imageSrc={Snake}
            gitLink={"https://github.com/Nswooten/Blue-Flower-Red-Thorns"}
            appLink={"https://main--snake-blue-flower-red-thorns-theme.netlify.app/"}
            description="lorem ipsum loquitor lorem ipsum loquitor lorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitorlorem ipsum loquitor" />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Projects