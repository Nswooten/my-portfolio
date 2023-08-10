import { Tooltip, Icon, useColorModeValue, Box } from "@chakra-ui/react";
import { lazy } from "react"
const SiCss3 = lazy(() => import("react-icons/si").then(module => ({ default: module.SiCss3 })));
const SiReact = lazy(() => import("react-icons/si").then(module => ({ default: module.SiReact })));
const SiNodedotjs = lazy(() => import("react-icons/si").then(module => ({ default: module.SiNodedotjs })));
const SiJavascript = lazy(() => import("react-icons/si").then(module => ({ default: module.SiJavascript })));
const SiPython = lazy(() => import("react-icons/si").then(module => ({ default: module.SiPython })));
const SiTypescript = lazy(() => import("react-icons/si").then(module => ({ default: module.SiTypescript })))
const SiGit = lazy(() => import("react-icons/si").then(module => ({ default: module.SiGit })))
const SiChakraui = lazy(() => import("react-icons/si").then(module => ({ default: module.SiChakraui })))
const SiPostgresql = lazy(() => import("react-icons/si").then(module => ({ default: module.SiPostgresql })))
const SiMongodb = lazy(() => import("react-icons/si").then(module => ({ default: module.SiMongodb })))
const SiSequelize = lazy(() => import("react-icons/si").then(module => ({ default: module.SiSequelize })))
const SiMongoose = lazy(() => import("react-icons/si").then(module => ({ default: module.SiMongoose })))
const SiHtml5 = lazy(() => import("react-icons/si").then(module => ({ default: module.SiHtml5 })))


const SkillIcon = (props) => {
    const { icon, label, color } = props

    const iconComponents = {
        "SiCss3": SiCss3,
        "SiReact": SiReact,
        "SiNodedotjs": SiNodedotjs,
        "SiJavascript": SiJavascript,
        "SiPython": SiPython,
        "SiTypescript": SiTypescript,
        "SiGit": SiGit,
        "SiChakraui": SiChakraui,
        "SiPostgresql": SiPostgresql,
        "SiMongodb": SiMongodb,
        "SiSequelize": SiSequelize,
        "SiMongoose": SiMongoose,
        "SiHTML5": SiHtml5,
    }

    const IconComponent = iconComponents[icon]

    return (
        <Tooltip label={label} hasArrow>
            <Box
                marginTop={"1vh"}
            >
                <Icon
                    as={IconComponent}
                    borderRadius={5}
                    boxSize={6}
                    color={color}
                    _hover={{
                        transform: "scale(1.1)",
                        filter: useColorModeValue(
                            "brightness(1.1)",
                            `brightness(1.2) drop-shadow(0 0 5px ${color})`)
                    }} />
            </Box>
        </Tooltip>
    )
}

export default SkillIcon