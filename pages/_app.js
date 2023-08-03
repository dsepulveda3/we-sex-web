// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserProvider } from '../context/authUserContext';
import { ToastContainer } from 'react-toastify';
import CodeInputModal from "../components/codeInputModal"
import 'react-toastify/dist/ReactToastify.css';
import '../styles/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <AuthUserProvider>
    <Component {...pageProps} />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
    />
    <CodeInputModal />
  </AuthUserProvider>
  )
}

export default MyApp
