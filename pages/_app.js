import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  
}

export default MyApp