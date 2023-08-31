import { AuthUserProvider } from '../context/authUserContext';
import { ToastContainer } from 'react-toastify';
import CodeInputModal from "../components/codeInputModal";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CookiesProvider } from "react-cookie";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/stripeFormStyles.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  

  useEffect(() => {
    console.log("reading use effect");
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);

          // Request permission for push notifications
          return registration.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'BEyd8mqBYfPUB5gXlbRQbKJltxAJS0w4m7tGMGiu2iVy4MZxPLZlvBltJi7D1zyNY1uCvQfd9i_5lW1vvJCrW1s', // Replace with your VAPID public key
              });
            }
          });
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Trigger push notification when accessing the specified URL
    console.log("url comming");
    console.log(router.pathname);
    if (router.pathname === '/notification') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Trigger a push notification
          console.log("permision granted");
          navigator.serviceWorker.ready.then(registration => {
            registration.showNotification('Notification Title', {
              body: 'Test', // Customize the notification content
              
            });
          });
        }
      });
    }
  }, [router.pathname]);

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

export default MyApp;

