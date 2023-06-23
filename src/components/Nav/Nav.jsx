import { HStack, Text } from '@chakra-ui/react'



const Nav = (props) => {
  const {pageRefs, scrollDir, y} = props
  console.log(scrollDir, y);
  
  return (
    <HStack>
      <Text>
      HEY HEY LISTEN
      </Text>
      
    </HStack>
  )
}
 
export default Nav