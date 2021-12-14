import { extendTheme } from '@chakra-ui/react'
import '@fontsource/noto-sans-kr'

const fonts = {
  body: 'Noto Sans KR'
}
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
}
const theme = extendTheme({ fonts, colors })

export default theme
