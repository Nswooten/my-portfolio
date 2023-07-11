import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { aggieTheme } from './components/theme.jsx'
import Particle from './Particle/Particle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={aggieTheme} >
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
