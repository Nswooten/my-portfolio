import { Box, GridItem, Grid, Image, Heading, Text, useColorModeValue, Icon, Link } from '@chakra-ui/react'
import { useState } from 'react'
import SkillIcon from "../SkillIcon/SkillIcon"
import { FiGithub, FiExternalLink } from "react-icons/fi"



const ProjectCard = (props) => {

  const { title, imageSrc, description, index, gitLink, appLink } = props
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }
  const italicStyle = {
    fontStyle: 'italic',
  }
  return (
    <Grid
      display={"grid"}
      gridTemplateColumns={"repeat(7, 1fr)"}
      gridTemplateRows={"repeat(6, 1fr)"}
      position={"relative"}
      marginRight={"2vw"}
    >
      <GridItem
        gridArea={"1 / 1 / 7 / 5"}
        borderRadius={"4px"}
      >
        <Link
          href={appLink}
          target="_blank"
        >
          <Image
            src={imageSrc}
            alt={title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              filter: isMouseOver ? 'none' : 'grayscale(100%)',
              transform: isMouseOver ? 'scale(1.05)' : 'scale(1)',
              transition: 'filter 0.3s, transform 0.3s',
            }}
            transition="filter 0.3s"
            zIndex={1}
            borderRadius={"4px"}
            boxShadow={"dark-lg"}
          />
        </Link>
      </GridItem>
      <GridItem
        gridArea={"2 / 5 / 3 / 8"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        zIndex={3}
      >
        <Text
          fontSize={"clamp(1rem, 1.1rem, 1.6rem)"}
        >
          Featured Project
        </Text>
        <Heading
          fontSize={"clamp(2rem, 2rem, 2rem)"}
          whiteSpace={"nowrap"}
          color={"#C53030"}
          textShadow={" 2px 2px 4px rgba(0, 0, 0, 0.3)"}
        >
          {index === 3 && (
            <>
              {title} <span style={italicStyle}>(Shrek Themed)</span>
            </>
          )}
          {index !== 3 && (
            <>
              {title}
            </>
          )}
        </Heading>

      </GridItem>
      <GridItem
        gridArea={"3 / 3 / 5 / 8"}
        backgroundColor={useColorModeValue("rgba(34, 37, 37, .9)", "rgba(225, 225, 225, .9)")}
        zIndex={2}
        borderRadius={"4px"}
        boxShadow={"lg"}

      >
        <Box
          display={"flex"}
          alignContent={"right"}
          overflowX={"hidden"}
          textOverflow={"clip"}
          
        >
          <Text
            margin={"20px"}
            fontSize={"clamp(1rem, 1.2rem, 1.2rem)"}
            textAlign={"left"}
          >
            {description}
          </Text>
        </Box>
      </GridItem>
      <GridItem
        gridArea={"5 / 5 / 6 / 8"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
        >
          {index === 0 && (
            <>
              <SkillIcon icon={"SiTypescript"} color="#3074bf" label="TypeScript" />
              <SkillIcon icon={"SiReact"} color="#5ed3f2" label="React" />
              <SkillIcon icon={"SiPostgresql"} color="#31648d" label="PostgreSQL" />
              <SkillIcon icon={"SiSequelize"} color="#0bafef" label="Sequelize" />
            </>
          )}
          {index === 1 && (
            <>
              <SkillIcon icon={"SiJavascript"} color="#F7DF1E" label="JavaScript" />
              <SkillIcon icon={"SiReact"} color="#5ed3f2" label="React" />
              <SkillIcon icon={"SiMongodb"} color="#3FA037" label="MongoDB" />
              <SkillIcon icon={"SiMongoose"} color="#861b00" label="Mongoose" />
            </>
          )}
          {index === 2 && (
            <>
              <SkillIcon icon={"SiJavascript"} color="#F7DF1E" label="JavaScript" />
              <SkillIcon icon={"SiCss3"} color="#2965f1" label="CSS3" />
              <SkillIcon icon={"SiMongodb"} color="#3FA037" label="MongoDB" />
              <SkillIcon icon={"SiMongoose"} color="#861b00" label="Mongoose" />
            </>
          )}
          {index === 3 && (
            <>
              <SkillIcon icon={"SiJavascript"} color="#F7DF1E" label="JavaScript" />
              <SkillIcon icon={"SiCss3"} color="#2965f1" label="CSS3" />
              <SkillIcon icon={"SiHTML5"} color="#dd4a26" label="HTML5" />
            </>
          )}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Link
            href={gitLink}
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
              boxSize={['3', '8']}
              marginTop={"5px"}
              marginRight={"5px"}
              boxShadow={"2px 2px 4px rgba(0, 0, 0, 0.4)"}
            />
          </Link>
          <Link
            href={appLink}
            target="_blank"
            _before={{
              backgroundColor: "#C53030",
            }}
            _hover={{
              color: "#C53030",
            }}
          >
            <Icon
              as={FiExternalLink}
              boxSize={['3', '8']}
              marginTop={"5px"}
              marginRight={"5px"}
              zIndex={10}
              boxShadow={"2px 2px 2px rgba(0, 0, 0, 0.4)"}
            />
          </Link>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default ProjectCard