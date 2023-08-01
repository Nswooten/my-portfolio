import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"



const Contact = (props) => {
  const { intersectionRef, isVisible, } = props
  // console.log(isVisible, "Contact");
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      id="Contact"
      zIndex={1}
    >
      <Stack
        ref={intersectionRef}
        flexBasis={{ base: 0, md: 0 }}
      >
        <Box>
          <Text>
            Hire MEEEE
          </Text>
          <Heading>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis dolorem tempora hic, eveniet quas neque dolore. Eveniet earum accusantium, hic consequatur officiis ad ducimus debitis, ea amet similique officia.
          </Heading>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Contact