import Head from 'next/head'

const Main = ({ children, router }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>자소설 닷컴</title>
      </Head>
      <body>{children}</body>
    </main>
  )
}

export default Main
