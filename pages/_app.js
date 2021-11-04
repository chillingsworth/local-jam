import '../styles/globals.css'
import { BrowserRouter } from 'react-router-dom';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
