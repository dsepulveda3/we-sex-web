import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const InstallButton = () => {
    const router = useRouter();
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

  // Render the "Install App" button if the app is not installed
    if (!isAppInstalled) {
        return (
            <button onClick={handleInstallClick}>
            Open in App
            </button>
        );
    }
};

export default InstallButton;
