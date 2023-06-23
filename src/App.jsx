import { useRef } from 'react'
import  useOnScreen from "./hooks/useOnScreen"
import  useNavigation from "./hooks/useNavigation"
import './App.css'
import { VStack } from '@chakra-ui/react'



//components
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import MyExperience from './components/MyExperience/MyExperience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'


function App() {
  const pageRefs = useRef({})
  const [y, scrollDir] = useNavigation()
  const [intersectionRef1, isVisible1] = useOnScreen()
  const [intersectionRef2, isVisible2] = useOnScreen()
  const [intersectionRef3, isVisible3] = useOnScreen()
  const [intersectionRef4, isVisible4] = useOnScreen()
  const [intersectionRef5, isVisible5] = useOnScreen()

  return (
    <VStack spacing={0}>
      <Nav 
        pageRefs={pageRefs}
        scrollDir={scrollDir}
        y={y}
      />
      <Home 
        pageRefs={pageRefs}
        intersectionRef={intersectionRef1}
        isVisible={isVisible1}
      />
      <AboutMe 
        pageRefs={pageRefs}
        intersectionRef={intersectionRef2}
        isVisible={isVisible2}
      />
      <MyExperience 
        pageRefs={pageRefs}
        intersectionRef={intersectionRef3}
        isVisible={isVisible3}
      />
      <Projects 
        pageRefs={pageRefs}
        intersectionRef={intersectionRef4}
        isVisible={isVisible4}
      />
      <Contact 
        pageRefs={pageRefs}
        intersectionRef={intersectionRef5}
        isVisible={isVisible5}
      />
    </VStack>
  )
}

export default App
