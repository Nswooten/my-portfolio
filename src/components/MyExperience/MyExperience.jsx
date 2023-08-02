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
import { useMediaQuery } from "@chakra-ui/react"
// import useOnScreen from "../../hooks/useOnScreen";


const MyExperience = (props) => {
  const { intersectionRef, isVisible, } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
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
      >
        <Box
            width={"100%"}
            marginTop={"20vh"}
            
          >
        <Heading
              textAlign={"left"}
              whiteSpace={"nowrap"}
              fontSize={"clamp(40px, 7vw, 80px)"}
              marginTop={"2vh"}
            >
          My Experience
        </Heading>
        <Divider />
        <Tabs
          orientation={isLargeScreen ? "vertical" : "horizontal"}
          width={isLargeScreen ? "40vw" : ""}
          size={"sm"}
          variant={'enclosed'}
        >
          <TabList
          width={isLargeScreen ? "40vw" : "2vw"}
          whiteSpace={"nowrap"}
          height={isLargeScreen ? "60vh" : "6vh"}
          justifyContent={"space-around"}
          marginRight={"10"}
          >
            <Tab
            justifyContent={"flex-start"}>Vertice Oil Tools</Tab>
            <Tab
            justifyContent={"flex-start"}>General Assembly</Tab>
            <Tab
            justifyContent={"flex-start"}>Veritce Oil Tools</Tab>
            <Tab
            justifyContent={"flex-start"}>Texas A&M</Tab>
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