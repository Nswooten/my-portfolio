import { useRef } from 'react'
import useOnScreen from "./hooks/useOnScreen"
import useNavigation from "./hooks/useNavigation"
import './App.css'
import { VStack, useColorModeValue } from '@chakra-ui/react'


//components
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import MyExperience from './components/MyExperience/MyExperience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Particle from './Particle/Particle'
import Social from './components/Social/Social'
import Spotlight from './components/Spotlight/Spotlight'



function App() {

  const [y, scrollDir] = useNavigation()
  const [intersectionRef1, isVisible1] = useOnScreen()
  const [intersectionRef2, isVisible2] = useOnScreen()
  const [intersectionRef3, isVisible3] = useOnScreen()
  const [intersectionRef4, isVisible4] = useOnScreen()
  const [intersectionRef5, isVisible5] = useOnScreen()

  return (
    <>
      <Spotlight />
      <Particle />
      <VStack
        spacing={0}
        color={useColorModeValue("white", "black")}
      >
        <Nav
          scrollDir={scrollDir}
          y={y}
        />
        <Social />
        <Home
          intersectionRef={intersectionRef1}
          isVisible={isVisible1}
        >
        </Home>
        <AboutMe
          intersectionRef={intersectionRef2}
          isVisible={isVisible2}
          y={y}
        />
        <MyExperience
          intersectionRef={intersectionRef3}
          isVisible={isVisible3}
        />
        <Projects
          intersectionRef={intersectionRef4}
          isVisible={isVisible4}
        />
        <Contact
          intersectionRef={intersectionRef5}
          isVisible={isVisible5}
        />
      </VStack>
    </>
  )
}

export default App
