import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <BodyWrapper>
          <Main />
          <NextScript />
        </BodyWrapper>
      </Html>
    )
  }
}

const BodyWrapper = styled.body`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`
