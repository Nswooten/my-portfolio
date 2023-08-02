import { useEffect, useState } from 'react'

import { HStack, IconButton, useMediaQuery, VStack, Box } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'

import NavButton from '../NavButton/NavButton'
import ResumeButton from '../ResumeButton/ResumeButton'

import { FaMoon, FaSun } from "react-icons/fa"
import { Squash as Hamburger } from 'hamburger-react'



const Nav = (props) => {
  const { scrollDir, y } = props
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const [menuOpen, setMenuOpen] = useState(false)
  const [stopScroll, setStopScroll] = useState("initial")
  const { colorMode, toggleColorMode } = useColorMode()
  // console.log(isLargeScreen)
  // console.log(scrollDir, y)
  const scrollIntoView = (label) => {
    const section = document.getElementById(label)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const ColorModeToggleIcon = colorMode === "dark" ? FaMoon : FaSun

  useEffect(() => {
    setStopScroll(
      document.body.style.overflow = menuOpen
        ? "hidden"
        : "initial"
    )
  }, [menuOpen])
  return (
    <>
      <HStack
        position={"fixed"}
        justify={"space-between"}
        top={y > 80 && scrollDir === "down" ? -110 : 0}
        transition={"250ms ease-out"}
        width={"100%"}
        backgroundColor={
          menuOpen
            ? "transparent"
            : useColorModeValue("rgba(14,17,17, .97)", "rgba(245,245,245, .95)")
        }
        boxShadow={
          menuOpen
            ? "none"
            : y !== 0 && scrollDir === "up"
              ? "dark-lg"
              : "none"}
        height={y !== 0 && scrollDir === "up" ? "7%" : "9%"}
        zIndex={3}

      >
        <IconButton
          marginLeft={"5vw"}
          icon={<ColorModeToggleIcon />}
          onClick={toggleColorMode}
          color={useColorModeValue("black", "white")}
          bgColor={useColorModeValue("white", "black")}
          _hover={{
            color: useColorModeValue("white", "black"),
            bgColor: useColorModeValue("black", "white"),
            border: "1px solid darkGrey"
          }}
        />
        {isLargeScreen ? (
          <>
            <NavButton label="Home" scroll={scrollIntoView} />
            <NavButton label="About Me" scroll={scrollIntoView} />
            <NavButton label="My Experience" scroll={scrollIntoView} />
            <NavButton label="Projects" scroll={scrollIntoView} />
            <NavButton label="Contact" scroll={scrollIntoView} />
            <ResumeButton isLargeScreen={isLargeScreen} />
          </>
        )
          : (
            <Box
              style={{ marginRight: "5vw" }}
            >
              <Hamburger
                toggled={menuOpen}
                onToggle={() => setMenuOpen(!menuOpen)}
                size={40}
              />
            </Box>
          )
        }
      </HStack>

      {!isLargeScreen && (
        <>
          <VStack
            boxShadow={"dark-lg"}
            fontSize={16}
            height={"100%"}
            justifyContent={"center"}
            position={"fixed"}
            right={menuOpen ? 0 : "-50%"}
            spacing={10}
            transition={"300ms ease-in-out"}
            width={"50%"}
            zIndex={2}
            top={0}
            visibility={menuOpen ? "visible" : "hidden"}
            backgroundColor={
              useColorModeValue("rgba(14,17,17,.9)", "rgba(245,245,245,.9)")
            }
          >
            <NavButton label="Home" scroll={scrollIntoView} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <NavButton label="About Me" scroll={scrollIntoView} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <NavButton label="My Experience" scroll={scrollIntoView} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <NavButton label="Projects" scroll={scrollIntoView} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <NavButton label="Contact" scroll={scrollIntoView} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <ResumeButton />
          </VStack>
        </>
      )}
    </>
  )
}

export default Nav