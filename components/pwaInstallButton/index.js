import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the gap between buttons */
  z-index: 1000;
`;

const SingUpButton = styled.a`
  background-color: var(--green);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  width: 30px; /* Adjust the diameter as needed */
  height: 30px; /* Equal to the width */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; /* Adjust the font size as needed */
`;

const InstallButton = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isAppInstalled, setIsAppInstalled] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            // Prevent the default behavior
            event.preventDefault();
            // Store the event for later use
            setDeferredPrompt(event);
        };

        // Listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);


    const handleInstallClick = async () => {
        // Show the install prompt
        if (!deferredPrompt) {
            console.log('Open in pwa')
            return;
        }
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
            // The app is considered installed after the user accepts the prompt
            setIsAppInstalled(true);
        } else {
            console.log('User dismissed the install prompt');
        }

        // Clear the deferredPrompt
        setDeferredPrompt(null);
        });
    };

    const handleClose = () => {
        setVisible(false);
      };

    if (!isAppInstalled) {
        return (
            <>
            {visible && (
                <Container>
                  <SingUpButton onClick={handleInstallClick}>
                    Abrir en App
                  </SingUpButton>
                  <CloseButton onClick={handleClose}>X</CloseButton>
                </Container>
            )}
            </>
        );
    }
};

export default InstallButton;
