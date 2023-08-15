import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { useState } from "react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { useMediaQuery, useColorModeValue } from "@chakra-ui/react"


const MyExperience = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const [selectedTab, setSelectedTab] = useState(0)
  const handleTabChange = (index) => {
    setSelectedTab(index)
  }
  return (
    <Flex
    id={"My Experience"}
    alignItems={"center"}
    height={"100vh"}
    justifyContent={"flex-start"}
    zIndex={1}
    marginRight={"10%"}
    display={"flex"}
    >
      <Stack
        ref={intersectionRef}
        minHeight={"100vh"}
        height={"100vh"}
        maxHeight={"100vh"}
      >
        <Box
            width={"100%"}
            marginTop={isLargeScreen ? "5vw" : "0"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={""}
          >
        <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        marginBottom={"3vh"}
        >

        <Heading
              textAlign={"center"}
              whiteSpace={"nowrap"}
              fontSize={"clamp(3rem, 4rem, 5rem)"}
              marginTop={"2vh"}
              marginBottom={"5vh"}
              mb="2rem"
              margin={"2vw"}
            >
          My Experience
          <Divider
                style={{ borderColor: "#C53030" }}
                
                transition={"250ms ease-in"}
              />
        </Heading>
        </Box>
        <Tabs
          index={selectedTab} onChange={handleTabChange}
          orientation={isLargeScreen ? "vertical" : "horizontal"}
          width={isLargeScreen ? "60vw" : ""}
          size={"sm"}
          colorScheme={useColorModeValue("white", "black")}
        >
          <TabList
          width={isLargeScreen ? "" : "auto"}
          whiteSpace={isLargeScreen ? "nowrap" : ""}
          height={isLargeScreen ? "60vh" : "6vh"}
          justifyContent={"space-around"}
          marginRight={"5vw"}
          overflowX={isLargeScreen ? "" : ""}   
          >
            <Tab
            justifyContent={"flex-start"}
            _hover={{
              color: "#C53030",
            }}
            _focus={{outline:"none"}}
            color={selectedTab === 0 ? "#C53030" : ""}
            outline={"none"}
            border={"none"}
            fontSize={"clamp(1rem, 1.2rem, 2rem)"}
            borderRadius={0}
            >
              Vertice Oil Tools
            </Tab>
            <Tab
            justifyContent={"flex-start"}
            _hover={{
              color: "#C53030",
            }}
            _focus={{outline:"none"}}
            color={selectedTab === 1 ? "#C53030" : ""}
            outline={"none"}
            border={"none"}
            fontSize={"clamp(1rem, 1.2rem, 2rem)"}
            borderRadius={0}
            >
              General Assembly
            </Tab>
            <Tab
            justifyContent={"flex-start"}
            _hover={{
              color: "#C53030",
            }}
            _focus={{outline:"none"}}
            color={selectedTab === 2 ? "#C53030" : ""}
            outline={"none"}
            border={"none"}
            fontSize={"clamp(1rem, 1.2rem, 2rem)"}
            borderRadius={0}
            >
              Vertice Oil Tools
            </Tab>
            <Tab
            justifyContent={"flex-start"}
            _hover={{
              color: "#C53030",
            }}
            _focus={{outline:"none"}}
            color={selectedTab === 3 ? "#C53030" : ""}
            outline={"none"}
            border={"none"}
            fontSize={"clamp(1rem, 1.2rem, 2rem)"}
            >
              Texas A&M
            </Tab>
          </TabList>
          <TabPanels
          width={"40vw"}
          >
            <TabPanel>
              <List 
                spacing={3}  
                alignItems={"left"}
                display={"flex"}
                flexDirection={"column"}
              >
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(2rem, 2rem, 2rem)"}
                >
                  
                  Engineering Technican
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                color={"#C53030"}
                >
                <Text
                    as={"a"}
                    fontSize={"clamp(1rem, 1.5rem, 2rem)"}
                    href="https://verticeoiltools.com/" target="_blank"
                    color={"#822727"}
                    position={"relative"}
                    _before={{
                      backgroundColor: "#C53030",
                      borderRadius: "5px",
                      bottom: -1,
                      content: `""`,
                      height: "2px",
                      position: "absolute",
                      transition: "200ms ease-out",
                      width: 0
                    }}
                    _hover={{
                      color: "#C53030",
                      _before: {
                        width: "100%"
                      }
                    }}
                    >
                      Vertice Oil Tools
                    </Text>

                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"5vh"}
                alignItems={"center"}
                >
                Current
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Create custom fixtures for accurate data collection                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Ensure plans align with standards and optimize procedures
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Execute tests, maintain equipment, and troubleshoot issues
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
            <List 
                spacing={3}  
                alignItems={"left"}
                display={"flex"}
                flexDirection={"column"}
              >
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"flex-start"}
                fontSize={"clamp(2rem, 2rem, 2rem)"}
                whiteSpace={"nowrap"}
                >
                  
                  Software Engineering Fellow
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                color={"#C53030"}
                >
                  <Text
                    as={"a"}
                    fontSize={"clamp(1rem, 1.5rem, 2rem)"}
                    href="https://generalassemb.ly/education/software-engineering-immersive" target="_blank"
                    color={"#822727"}
                    position={"relative"}
                    _before={{
                      backgroundColor: "#C53030",
                      borderRadius: "5px",
                      bottom: -1,
                      content: `""`,
                      height: "2px",
                      position: "absolute",
                      transition: "200ms ease-out",
                      width: 0
                    }}
                    _hover={{
                      color: "#C53030",
                      _before: {
                        width: "100%"
                      }
                    }}
                    >
                      General Assembly
                    </Text>
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"5vh"}
                alignItems={"center"}
                >
                March-June 2023
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                whiteSpace={"nowrap"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Attended an 80+ hours/weekly bootcamp focused on full-stack software development
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                whiteSpace={"nowrap"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Developed a portfolio using HTML/CSS/JS/TS, SQL, MongoDB, and Node
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                whiteSpace={"nowrap"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Utilized Git version control and managed team repositories
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
            <List 
                spacing={3}  
                alignItems={"left"}
                display={"flex"}
                flexDirection={"column"}
              >
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(2rem, 2rem, 2rem)"}
                >
                  
                  Field Technician
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                color={"#C53030"}
                >
                <Text
                    as={"a"}
                    fontSize={"clamp(1rem, 1.5rem, 2rem)"}
                    href="https://verticeoiltools.com/" target="_blank"
                    color={"#822727"}
                    position={"relative"}
                    _before={{
                      backgroundColor: "#C53030",
                      borderRadius: "5px",
                      bottom: -1,
                      content: `""`,
                      height: "2px",
                      position: "absolute",
                      transition: "200ms ease-out",
                      width: 0
                    }}
                    _hover={{
                      color: "#C53030",
                      _before: {
                        width: "100%"
                      }
                    }}
                    >
                      Vertice Oil Tools
                    </Text>
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"5vh"}
                alignItems={"center"}
                >
                June 2019 - March 2023
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                whiteSpace={"nowrap"}
                overflowX={"hidden"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Built, tested, sold and ran new product lines for customers, including ConocoPhillips                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Wrote the technical manuals for the downhole-tools sold and run by our company
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  Coordinate rig operations, supervise crew activities, and promote a culture of safety             
                  </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
            <List 
                spacing={3}  
                alignItems={"left"}
                display={"flex"}
                flexDirection={"column"}
              >
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(2rem, 2rem, 2rem)"}
                >
                  
                  Bachelor's Degree in Philosophy
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                color={"#C53030"}
                >
                <Text
                    as={"a"}
                    fontSize={"clamp(1rem, 1.5rem, 2rem)"}
                    href="https://www.tamu.edu/index.html" target="_blank"
                    color={"#822727"}
                    position={"relative"}
                    _before={{
                      backgroundColor: "#C53030",
                      borderRadius: "5px",
                      bottom: -1,
                      content: `""`,
                      height: "2px",
                      position: "absolute",
                      transition: "200ms ease-out",
                      width: 0
                    }}
                    _hover={{
                      color: "#C53030",
                      _before: {
                        width: "100%"
                      }
                    }}
                    >
                      Texas A&M in College Station
                    </Text>
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"5vh"}
                alignItems={"center"}
                >
                Class of '18{'\u00A0'}
                <Text
                as={"span"}
                color={"#C53030"}
                
              >
                {' WHOOP! '}
              </Text>
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={"2vh"}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  <Text
                  as={"span"}
                  color={"#C53030"}
                  >
                    Howdy, Dammit!
                  </Text>
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                fontSize={"clamp(1rem, 1rem, 1rem)"}
                >
                  <ListIcon as={ChevronRightIcon}  />
                  <Text
                  as={"span"}
                  color={"#C53030"}
                  >
                    Thanks and Gig'em.
                  </Text>
                </ListItem>
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      </Stack>
    </Flex>
  )
}

export default MyExperience
