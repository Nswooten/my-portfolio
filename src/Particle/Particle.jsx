import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { background, useColorModeValue } from "@chakra-ui/react";



const Particle = () => {
  const colorMode = useColorModeValue("rgba(14,17,17)","rgba(245,245,245)")
  const inverseColorMode = useColorModeValue("rgba(245,245,245)","rgba(14,17,17)" )
  console.log(colorMode);
  const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFull(engine)
    }, [colorMode])
    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [colorMode])
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: inverseColorMode,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: .5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 10,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "square",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
    />
    );
}

export default Particle;