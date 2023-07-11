import {Text} from '@chakra-ui/react'


const NavButton = (props) => {
  const {label, scroll, setMenuOpen, menuOpen } = props
  
  
  
  return (
    <>
    {!setMenuOpen && 
    <Text
    fontSize={18}
    cursor={'pointer'}
    onClick={() => scroll(label)}
    >
      {label}
    </Text>
    }
    {setMenuOpen && 
    <Text
    cursor={'pointer'}
    onClick={() => {
      setMenuOpen(!menuOpen)
      scroll(label)
      
    }}
    >
      {label}
    </Text>
    }
    </>


  )
}
 
export default NavButton