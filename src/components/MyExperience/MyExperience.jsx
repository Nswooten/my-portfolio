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
  UnorderedList,
} from "@chakra-ui/react"
import { useState } from "react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { useMediaQuery, useColorModeValue } from "@chakra-ui/react"
// import useOnScreen from "../../hooks/useOnScreen";


const MyExperience = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const [selectedTab, setSelectedTab] = useState(0)
  const handleTabChange = (index) => {
    setSelectedTab(index)
  }
  console.log(selectedTab);
  // console.log(isVisible, "MyExperience");
  const [isExpanded, setIsExpanded] = useState()
  return (
    <Flex
    id={"My Experience"}
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
        >

        <Heading
              textAlign={"center"}
              whiteSpace={"nowrap"}
              fontSize={{ base: "2rem", md: "clamp(3rem, 7.4vw, 4rem)" }}
              marginTop={"2vh"}
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
          width={isLargeScreen ? "40vw" : ""}
          size={"sm"}
          colorScheme={useColorModeValue("white", "black")}
          
        >
          <TabList
          width={isLargeScreen ? "" : "2vw"}
          whiteSpace={isLargeScreen ? "nowrap" : ""}
          height={isLargeScreen ? "60vh" : "6vh"}
          justifyContent={"space-around"}
          marginRight={"10"}
          paddingRight={isLargeScreen ? "2vw" : "horizontal"}
          
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
            fontSize={"clamp(16px, 1vw, 18px)"}
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
            fontSize={"clamp(16px, 1vw, 18px)"}
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
            fontSize={"clamp(16px, 1vw, 18px)"}
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
            fontSize={"clamp(16px, 1vw, 18px)"}
            borderRadius={0}
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
                fontSize={"clamp(16px, 1vw, 18px)"}
                >
                  
                  Engineering Technican
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                >
                Vertice Oil Tools
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                >
                Current
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                >
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                >
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </ListItem>
                <ListItem
                display={"flex"}
                marginY={2}
                alignItems={"center"}
                >
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing={3} >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing={3} >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing={3} >
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.500' />
                  Lorem ipsum dolor sit amet
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