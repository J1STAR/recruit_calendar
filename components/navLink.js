import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
const NavLink = ({ text, path }) => {
  return (
    <NextLink href={path}>
      <Link _hover={{ fontWeight: 'bold' }}>{text}</Link>
    </NextLink>
  )
}
export default NavLink
