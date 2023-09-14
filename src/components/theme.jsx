import { chakra, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#121317", "#FFFFFC")(props),
    },
  }),
}

export const aggieTheme = extendTheme({
  colors: {
    primary: "#4f0b00",
    lightGrey: "#8c8d8d",
    darkGrey: "#474747",
    white: "#FFFFFC",
    black: "#121317"
  },
  config,
  styles,
})