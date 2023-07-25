// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserProvider } from '../hooks/authUserContext';
import '../styles/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp
