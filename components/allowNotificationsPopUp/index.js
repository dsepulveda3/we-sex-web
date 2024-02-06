import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { subscribe_to_notifications } from '../../requests/premiumService';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: var(--violet);
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Title = styled.h3`
  color: #fff;
  margin-bottom: 10px;
`;


const Button = styled.button`
  padding: 8px 16px;
  background: var(--green);
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Label = styled.p`
  color: #fff;
  font-size: 12px;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CenteredWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const NotificationComponent = ({ coupleData }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [acceptedNotifications, setAcceptedNotifications] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      navigator.serviceWorker.ready.then(reg => {
        reg.pushManager.getSubscription().then(sub => {
          if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
            setSubscription(sub)
          }
        })
        setRegistration(reg)
      })
    } else {
      console.error('service worker is not working.');
    }
  }, [])

  useEffect(() => { 
      Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        setShowPopup(false);
        if (!subscription && registration) {
          subscribeButtonOnClick();
        }
      }}).catch(error => {
        console.error('Error requesting notification permission:', error);
      }
    )
  }, [registration]);

  const subscribeButtonOnClick = () => {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
    }).then( sub =>
      {
        console.log("sub", sub);
        setSubscription(sub);
        subscribe_to_notifications(sub, coupleData.coupleName);
      }
    )
  }

  const requestNotificationPermission = () => {
    setShowPopup(false);
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted!');
        subscribeButtonOnClick();
      } else {
        console.log('Notification permission denied!');
      }
    }).catch(error => {
      console.error('Error requesting notification permission:', error);
    })
  };

  if (showPopup) {
    return (
    <>
      <Container>
        <CenteredWrapper>
            <ContentWrapper>
            <Title>WeSex quiere enviarte notificaciones</Title>
            <ButtonWrapper>
                <Button onClick={requestNotificationPermission}>Permitir</Button>
                <Button onClick={() => setShowPopup(false)}>Descartar</Button>
            </ButtonWrapper>
            <Label>Las notificaciones pueden ser desactivadas en cualquier momento en los ajustes de tu navegador.</Label>
            </ContentWrapper>
        </CenteredWrapper>
      </Container>
    </>
    );
  }

  return null;
};

export default NotificationComponent;

