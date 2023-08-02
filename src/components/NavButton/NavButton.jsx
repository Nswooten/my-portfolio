import { Text } from '@chakra-ui/react'


const NavButton = (props) => {
  const { label, scroll, setMenuOpen, menuOpen } = props



  return (
    <>
      {!setMenuOpen &&
        <Text
          as={"a"}
          color={"#822727"}
          position={"relative"}
          _before={{
            backgroundColor: "#C53030",
            borderRadius: "5px",
            bottom: -1,
            content: `""`,
            height: "2px",
            position: "absolute",
            transition: "200ms ease-out",
            width: 0
          }}
          _hover={{
            color: "#C53030",
            _before: {
              width: "100%"
            }
          }}
          fontSize={18}
          cursor={'pointer'}
          onClick={() => scroll(label)}
        >
          {label}
        </Text>
      }
      {setMenuOpen &&
        <Text
          color={"#C53030"}
          textDecoration={"underline"}
          textDecorationColor={"#822727"}
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