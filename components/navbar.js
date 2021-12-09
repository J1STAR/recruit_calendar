import { Box, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import NavLink from './navLink'
const Navbar = ({ path }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      width="100%"
      zIndex="1"
      background="transparent"
    >
      <Box p={3} display="flex" justifyContent="space-between">
        <NextLink href="/">
          <Link display="flex" alignItems="center" paddingLeft={5}>
            <Image src="./image/logo.png" alt="logo" maxWidth="120px" />
          </Link>
        </NextLink>

        <Box
          display={{ base: 'none', md: 'flex' }}
          flexDirection="row"
          gridGap={5}
          justifyContent="center"
          alignItems="center"
          fontWeight="light"
        >
          <NavLink path="/" text="채용 공고" />
          <NavLink path="/" text="자기소개서" />
          <NavLink path="/" text="이력서" />
          <NavLink path="/" text="데이터랩" />
          <NavLink path="/" text="합격자소서" />
          <NavLink path="/" text="실무경험 채우기" />
          <NavLink path="/" text="이직 준비βeta" />
        </Box>
        <Box
          display={{ base: 'none', md: 'flex' }}
          flexDirection="row"
          gridGap={8}
          alignItems="center"
        >
          <NavLink path="/" text="로그인" />
          <NavLink path="/" text="기업서비스" />
        </Box>
      </Box>
    </Box>
  )
}
export default Navbar
