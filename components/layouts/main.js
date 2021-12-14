import Head from 'next/head'
import styled from '@emotion/styled'

const Main = ({ children, router }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>자소설 닷컴</title>
      </Head>
      <Wrapper>{children}</Wrapper>
    </main>
  )
}

export default Main

const Wrapper = styled.div`
  padding: 50px 100px 100px 100px;
  height: 100vh;
  width: 100vw;
`
