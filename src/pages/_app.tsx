import { GlobalStyle } from '../styles/globals'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
    )
}
export default MyApp
