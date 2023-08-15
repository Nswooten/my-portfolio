import { Button, useColorModeValue, Link } from "@chakra-ui/react"




const ResumeButton = (props) => {
  const { isLargeScreen } = props
  return (
    <Link
    href={"https://nickwootenresume.s3.us-east-2.amazonaws.com/NickWootenResume.pdf"}
    target="_blank"
    >
      <Button
        fontSize={"clamp(.8rem, 1rem, 1.2rem)"}
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
    </Link>
  )
}

export default ResumeButton