import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { background, useColorModeValue, useColorMode } from "@chakra-ui/react";



const Particle = () => {
    const currentColor = useColorModeValue("rgba(14,17,17)", "rgba(245,245,245)")
    const inverseCurrentColor = useColorModeValue("rgba(245,245,245)", "rgba(14,17,17)")
    const { colorMode } = useColorMode()
    console.log(colorMode);
    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [currentColor])
    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [currentColor])
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: colorMode === "light" ? "attract" : "repulse",
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
                        value: inverseCurrentColor,
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
                        value: 25,
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