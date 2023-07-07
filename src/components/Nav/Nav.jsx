import { useState } from 'react'

import { HStack, IconButton, useMediaQuery, VStack } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'

import NavButton from '../NavButton/NavButton'
import ResumeButton from '../ResumeButton/ResumeButton'

import { FaMoon, FaSun } from "react-icons/fa"
import { Squash as Hamburger } from 'hamburger-react'


const Nav = (props) => {
  const {scrollDir, y} = props
  console.log(scrollDir, y)
  const scrollIntoView = (label) => {
    const section = document.getElementById(label)
    if (section) {
      section.scrollIntoView({behavior: 'smooth' })
    }
  }
  const {colorMode, toggleColorMode} = useColorMode()
  const ColorModeToggleIcon = colorMode === "dark" ? FaMoon : FaSun
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(isLargeScreen)
  console.log(menuOpen, "menu");
  
  return (
    <>
      <HStack 
        position={"fixed"}
        justify={isLargeScreen ? "center" : "space-between"}
        top={y > 80 && scrollDir === "down" ? -110 : 0}
        transition={"200ms ease-out"}
        width={"100%"}
        boxShadow={y !== 0 && scrollDir === "up" 
        ? "dark-lg" 
        : "none" }
        height={y !== 0 && scrollDir === "up" ? 65 : 100}
        zIndex={2}
      >
        <IconButton
          margin={"10px"}
          icon={<ColorModeToggleIcon/>}
          onClick={toggleColorMode}
        />
        {isLargeScreen ? (
          <>
        <NavButton label="Home" scroll={scrollIntoView}/>
        <NavButton label="About Me" scroll={scrollIntoView}/>
        <NavButton label="My Experience" scroll={scrollIntoView}/>
        <NavButton label="Projects" scroll={scrollIntoView}/>
        <NavButton label="Contact" scroll={scrollIntoView}/>
        <ResumeButton />
        </>
        ) 
        : (
          // <IconButton
          // icon={<Hamburger/>}
          // onClick={() => setMenuOpen(!menuOpen)}
          // />
          <Hamburger
          margin={"10px"}
          onToggle={() => setMenuOpen(!menuOpen)}
          />
      
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
      zIndex={1}
      top={0}
      visibility={menuOpen ? "visible" : "hidden"}
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