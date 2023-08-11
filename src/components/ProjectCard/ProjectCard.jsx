import { Box, SimpleGrid, GridItem, Grid, Image, Heading, Text, useColorModeValue, Divider, Flex, Icon, Link } from '@chakra-ui/react'
import { useState } from 'react'
import SkillIcon from "../SkillIcon/SkillIcon"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { SmallAddIcon } from '@chakra-ui/icons'



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
      gridTemplateColumns={"repeat(8, 1fr)"}
      gridTemplateRows={"repeat(8, 1fr)"}
      position={"relative"}
    >
      <GridItem
        gridArea={"1 / 1 / 9 / 6"}
        borderRadius={"4px"}
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
        />
      </GridItem>
      <GridItem
        gridArea={"3 / 6 / 4 / 9"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <Text
        fontSize={"clamp(12px, 1.8vw, 15px)"}
        >
          Featured Project
        </Text>
        <Heading
          fontSize={"clamp(20px, 5vw, 40px)"}
          whiteSpace={"nowrap"}
          color={"#C53030"}
        >
          {index === 2 && (
            <>
            {title} <span style={italicStyle}>(Shrek Themed)</span>
            </>
          )}
          {index !== 2 && (
            <>
            {title}
            </>
          )}
        </Heading>

      </GridItem>
      <GridItem
        gridArea={"4 / 5 / 6 / 9"}
        backgroundColor={useColorModeValue("rgba(34, 37, 37, .9)", "rgba(225, 225, 225, .9)")}
        zIndex={2}
        borderRadius={"4px"}
        
      >
        <Box
        display={"flex"}
        alignContent={"right"}
        >
        <Text
        margin={"20px"}
        fontSize={"clamp(12px, 1.8vw, 18px)"}
        
        >
          {description}
        </Text>

        </Box>

      </GridItem>
      <GridItem
        gridArea={"6 / 6 / 7 / 9"}
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
              <SkillIcon icon={"SiCss3"} color="#2965f1" label="CSS3" />
              <SkillIcon icon={"SiMongodb"} color="#3FA037" label="MongoDB" />
              <SkillIcon icon={"SiMongoose"} color="#861b00" label="Mongoose" />
            </>
          )}
          {index === 2 && (
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
              href={appLink}
              marginTop={"5px"}
              marginRight={"5px"}
            />

          </Link>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default ProjectCard