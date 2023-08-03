import { Tooltip, Icon, useColorModeValue, Box } from "@chakra-ui/react";



const SkillIcon = (props) => {
  const {icon, label, color} = props
  
  return (
    <Tooltip label={label} hasArrow>
    <Box 
    marginTop={"1vh"}
    >
        <Icon
            as={icon}
            borderRadius={5}
            boxSize={6}
            color={color}
            _hover={{
                transform: "scale(1.1)",
                filter: useColorModeValue(
                    "brightness(1.1)" ,
                    `brightness(1.2) drop-shadow(0 0 5px ${color})`) }} />
    </Box>
    </Tooltip>  
    )
}
 
export default SkillIcon