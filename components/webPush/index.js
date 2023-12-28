import React, {useEffect, useState} from "react";
import Head from "next/head";
import { subscribe_to_notifications } from "../../requests/premiumService";


const base64ToUint8Array = base64 => {
    const padding = '='.repeat((4 - (base64.length % 4)) % 4)
    const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')
  
    const rawData = window.atob(b64)
    const outputArray = new Uint8Array(rawData.length)
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}


const NotificationButton = ({ coupleName, index }) => {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [subscription, setSubscription] = useState(null)
    const [registration, setRegistration] = useState(null)
  
    useEffect(() => {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
        navigator.serviceWorker.ready.then(reg => {
          reg.pushManager.getSubscription().then(sub => {
            if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
              setSubscription(sub)
              setIsSubscribed(true)
            }
          })
          setRegistration(reg)
        })
      } else {
        console.error('service worker is not working.');
      }
    }, [])
  
    const subscribeButtonOnClick = async event => {
      event.preventDefault()
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
      })
      subscribe_to_notifications(sub, coupleName, index);
      setSubscription(sub)
      setIsSubscribed(true)
    }
  
    const unsubscribeButtonOnClick = async event => {
      event.preventDefault()
      await subscription.unsubscribe()
      setSubscription(null)
      setIsSubscribed(false)
      console.log('web push unsubscribed!')
    }
  
    const sendNotificationButtonOnClick = async event => {
      event.preventDefault()
      if (subscription == null) {
        console.error('web push not subscribed')
        return
      }

  
      await fetch('/api/notification', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription
        })
      })
    }
  
    return (
      <>
        <Head>
          <title>next-pwa example</title>
        </Head>
        <h1>Next.js + PWA = AWESOME!</h1>
        <button onClick={subscribeButtonOnClick} disabled={isSubscribed}>
          Subscribe
        </button>
        <button onClick={unsubscribeButtonOnClick} disabled={!isSubscribed}>
          Unsubscribe
        </button>
        <button onClick={sendNotificationButtonOnClick} disabled={!isSubscribed}>
          Send Notification
        </button>
      </>
    )
};

  
export default NotificationButton;