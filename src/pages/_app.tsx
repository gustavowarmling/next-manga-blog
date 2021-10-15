import { GlobalStyle } from "../styles/globals";
import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </>
  );
}
export default MyApp;
