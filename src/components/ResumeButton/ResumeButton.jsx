import { Button, border } from "@chakra-ui/react"



const ResumeButton = () => {
  return (
    <Button
    border={"1px solid lightgrey"}
    backgroundColor={"transparent"}
    _hover={{
      backgroundColor:"primary",
      border:"1px solid darkGrey"
    }}
    >
      Resume
    </Button>
  )
}
 
export default ResumeButton