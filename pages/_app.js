import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
//import Header from "../components/Header.js";
// import Navbar from "../components/Nav/Navbar.js";
import App from "../components/Hamburger/App";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <App />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
