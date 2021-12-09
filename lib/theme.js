import { extendTheme } from '@chakra-ui/react'
import '@fontsource/noto-sans-kr'

const styles = {
  global: props => ({
    body: {}
  })
}

const fonts = {
  body: 'Noto Sans KR'
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
}
const theme = extendTheme({ fonts, styles, config, colors })

export default theme
