import Head from 'next/head'
import Navbar from '../navbar'
import { Box } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>자소설 닷컴</title>
      </Head>
      <Navbar path={router.path} />
      <Box pt="64px" height="100vh">
        {children}
      </Box>
    </Box>
  )
}

export default Main
