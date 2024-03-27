import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationComponent from "../../../../components/allowNotificationsPopUp";
import PwaInstallPopup from "../../../../components/pwaInstallButton";
import { get_web_push_data, get_couple } from "../../../../requests/premiumService";
import React, { useState, useEffect } from "react";
import MobileNavigation from "../../../../components/general/MobileNavigation";


const DesafioRoad = ({ coupleData, coupleType }) => {
    const [issupported, setIsSupported] = useState(false);

    useEffect(() => {
      const isAndroid = /android/i.test(navigator.userAgent);
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

      if (!("Notification" in window) || (isAndroid && !isStandalone)) {
        console.log("This browser does not support desktop notification or is running on Android in standalone mode (PWA)");
        setIsSupported(false);
      } else {
        console.log("This browser supports desktop notification");
        setIsSupported(true);
      }
      localStorage.setItem('coupleName', coupleData.coupleName);
    }, []);
    

    return(
        <>
        <Road />
        <MobileNavigation type="road" coupleType={coupleType} />
        {issupported && <NotificationComponent coupleData={coupleData} />}
        {!issupported && <PwaInstallPopup />}
        </>
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const { origin } = context.query;
    const response = await get_web_push_data(origin);
    const dataCouple = await get_couple(origin);
    return {
        props: {
            coupleData: response.data,
            coupleType: dataCouple.data.type
        }
    }
}
