// import { useState } from 'react'
import './App.css'


//components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import MyExperience from './components/MyExperience/MyExperience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <MyExperience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
