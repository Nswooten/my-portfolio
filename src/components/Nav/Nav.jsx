import { HStack } from '@chakra-ui/react'
import NavButton from '../NavButton/NavButton'


const Nav = (props) => {
  const {scrollDir, y} = props
  console.log(scrollDir, y);
  const scrollIntoView = (label) => {
    const section = document.getElementById(label)
    if (section) {
      section.scrollIntoView({behavior: 'smooth' })
    }
  }
  
  return (
    <HStack 
    position={"fixed"}
    justify={"center"}
    top={y > 80 && scrollDir === "down" ? -110 : 0}
    transition={"200ms ease-out"}
    width={"100%"}
    boxShadow={y !== 0 && scrollDir === "up" 
    ? "dark-lg" 
    : "none" }
    height={y !== 0 && scrollDir === "up" ? 65 : 100}
    >
      <NavButton label="Home" scroll={scrollIntoView} delay={"ms"}/>
      <NavButton label="AboutMe" scroll={scrollIntoView} />
      <NavButton label="MyExperience" scroll={scrollIntoView}  />
      <NavButton label="Projects" scroll={scrollIntoView} />
      <NavButton label="Contact" scroll={scrollIntoView} />

      
    </HStack>
  )
}
 
export default Nav