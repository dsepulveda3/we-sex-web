import React, {useEffect} from 'react';

const Descargar = () => {
    useEffect(() => {

        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            window.location.replace("/");
            // return "Windows Phone";
        }else if (/android/i.test(userAgent)) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.wesx");
            // return "Android";
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            window.location.replace("https://apps.apple.com/us/app/wesex/id1526063508");
            // return "iOS";
        } else {
            window.location.replace("/");
        }

    }, []);
    return (
        <p> </p>
    );
}
 
export default Descargar;