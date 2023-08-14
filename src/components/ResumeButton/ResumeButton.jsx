import { Button, useColorModeValue } from "@chakra-ui/react"




const ResumeButton = (props) => {
  const { isLargeScreen } = props
  return (
    <Button
      fontSize={"clamp(12px, 1.7vw, 16px)"}
      border={"1px solid lightgrey"}
      color={useColorModeValue("black", "white")}
      bgColor={useColorModeValue("white", "black")}
      marginRight={isLargeScreen ? "40px" : "0"}
      _hover={{
        color: useColorModeValue("white", "black"),
        bgColor: useColorModeValue("black", "white"),
        border: "1px solid darkGrey"
      }}
      
    >
      Resume
    </Button>
  )
}

export default ResumeButton