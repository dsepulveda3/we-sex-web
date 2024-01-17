import React, {useEffect, useState} from "react";
import { subscribe_to_notifications } from "../../requests/premiumService";
import styled from "@emotion/styled";

const BotonNotificarDone = styled.button`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 13px;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
    justify-content: center;
    text-align: center;
`;
const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;


const Title = styled.div`
    font-size: 2.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: black;
   
  
    font-weight: bold;
    
    text-decoration: underline;
    text-decoration-color: var(--green);
    text-underline-offset: 1rem; /* ajusta la separación */
    margin-right: 2rem;
    
    @media(max-width: 540px){
        font-size: 2.5rem;
        padding-top: 0rem;
        padding-bottom: 1rem;

    }
`;


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


const NotificationButton = ({ coupleData, setShowPopup }) => {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [subscription, setSubscription] = useState(null)
    const [registration, setRegistration] = useState(null)

    useEffect(() => {
      setShowPopup(false);
    }, [isSubscribed])
  
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
  
    const subscribeButtonOnClick = async (event, memberIndex) => {
      event.preventDefault()
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
      })
      subscribe_to_notifications(sub, coupleData.coupleName, memberIndex);
      setSubscription(sub)
      setIsSubscribed(true)
      setShowPopup(false);
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
        <PopupContainer onClick={() => setShowPopup(false)}>
            <PopupDialog onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                <Title>
                    Haz click en tu boton correspondiente para suscribirte a las notificaciones
                </Title>
                {coupleData.coupleMemberOneSubscription === null && (
                  <BotonNotificarDone onClick={(e) => subscribeButtonOnClick(e, 1)} disabled={isSubscribed}>
                    {coupleData.coupleMemberOne}
                  </BotonNotificarDone>
                )}
                {coupleData.coupleMemberTwoSubscription === null && (
                  <BotonNotificarDone onClick={(e) => subscribeButtonOnClick(e, 2)} disabled={isSubscribed}>
                    {coupleData.coupleMemberTwo}
                  </BotonNotificarDone>
                )}
                <button onClick={unsubscribeButtonOnClick} disabled={!isSubscribed}>
                  Unsubscribe
                </button>
                <button onClick={sendNotificationButtonOnClick} disabled={!isSubscribed}>
                  Send Notification
                </button>
            </PopupDialog>
        </PopupContainer>
      </>
    )
};

  
export default NotificationButton;