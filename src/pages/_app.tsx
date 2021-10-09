import { GlobalStyle } from '../styles/globals'
import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { SideMenu } from '../components/SideMenu'
import { useState } from 'react';

import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen}/>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>

      <Component {...pageProps} />
      <GlobalStyle />
    </>
    )
}
export default MyApp
