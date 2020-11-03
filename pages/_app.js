import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  
}

export default MyApp