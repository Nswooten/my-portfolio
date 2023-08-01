import { useState, useEffect } from "react"
import { Box, Portal } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react";



const Spotlight = () => {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 })
  const [isLargeScreen] = useMediaQuery("(min-width: 1050px)")
  const handleMouseMovement = (event) => {
    setMouseLocation({
      x: event.clientX, 
      y: event.clientY, 
    })
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMovement)
    return () => {
      document.removeEventListener("mousemove", handleMouseMovement)
    }
  }, [])

  const generateGradientBackground = () => {
    const gradientColors = [];
    for (let i = 0; i <= 100; i++) {
      const opacity = i / 100
      const stop = i
      gradientColors.push(`rgba(0, 0, 0, ${opacity}) ${stop}%`)
    }

    return `radial-gradient(circle at ${mouseLocation.x}px ${mouseLocation.y}px, ${gradientColors.join(", ")})`
  }
  return (
    <>
    <Portal>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        pointerEvents="none"
        zIndex={9999}
        onMouseMove={handleMouseMovement}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          pointerEvents="none"
          backgroundImage={generateGradientBackground()}
        />
      </Box>
    </Portal>
    </>
  );
};

 
export default Spotlight