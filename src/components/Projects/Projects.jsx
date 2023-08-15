import { Box, Flex, Stack, Text, Container, Heading, Grid, GridItem, useMediaQuery, Divider } from "@chakra-ui/react"
import ProjectCard from "../ProjectCard/ProjectCard"
import NET from "../../assets/NET.png"
import Opinionated from "../../assets/Opinionated.png"
import Snake from "../../assets/Snake.png"




const Projects = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
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
          fontSize={"clamp(3rem, 4rem, 5rem)"}
          marginTop={"2vh"}
          mb="2rem"
          margin={"2vw"}
          color={"#C53030"}
        >
          Apps
        </Heading>
      </Box>
      <Grid
        display={"grid"}
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"repeat(3, 1fr)"}
        position={"relative"}
        width={"80vw"}
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
            description="Experience gardening in a fresh way through this user-friendly web app. Crafted with TypeScript and React, enjoy a dynamic interface while SQL and Sequelize seamlessly manage data. JWT is used for authentication. Design garden beds with custom dimensions and watch as the app intuitively arranges seeds based on manufacturer spacing recommendations." />
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
            description="Opinionated is a web app built using MongoDB, Express.js, and Node.js (MEN stack). It enables users to share opinions and ratings on media content. Google OAuth ensures secure logins, while EJS provides dynamic views. This platform fosters a community of media enthusiasts to exchange insights." />
        </GridItem>
        <GridItem
          gridArea={"3 / 1 / 4 / 2"}
        >
          <ProjectCard
            index={2}
            title={"Snake"}
            imageSrc={Snake}
            gitLink={"https://github.com/Nswooten/Blue-Flower-Red-Thorns"}
            appLink={"https://main--snake-blue-flower-red-thorns-theme.netlify.app/"}
            description="This is my first project that I've created. While the code and technologies used may be somewhat basic, I believe you might enjoy witnessing the progress I've made in the last 5 months. As a bonus, I thought you'd also like to have a little fun playing Snake." />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Projects