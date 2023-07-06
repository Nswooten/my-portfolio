import {Text} from '@chakra-ui/react'


const NavButton = (props) => {
  const {label, scroll } = props
  
  
  return (  
    <Text
    cursor={'pointer'}
    onClick={() => scroll(label)}
    >
      {label}
    </Text>


  )
}
 
export default NavButton