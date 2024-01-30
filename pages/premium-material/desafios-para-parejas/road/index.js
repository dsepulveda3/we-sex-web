import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationComponent from "../../../../components/allowNotificationsPopUp";
import PwaInstallPopup from "../../../../components/pwaInstallButton";
import { get_web_push_data } from "../../../../requests/premiumService";
import React, { useState, useEffect } from "react";


const DesafioRoad = ({ coupleData }) => {
    const [issupported, setIsSupported] = useState(false);

    useEffect(() => {
      if (!("Notification" in window) || /android/i.test(navigator.userAgent)) {
        console.log("This browser does not support desktop notification or is running on Android");
        setIsSupported(false);
      } else {
        console.log("This browser supports desktop notification");
        setIsSupported(true);
      }
    }, []);
    

    return(
        <>
        <Road />
        {issupported && <NotificationComponent coupleData={coupleData} />}
        {!issupported && <PwaInstallPopup />}
        </>
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const { origin } = context.query;
    const response = await get_web_push_data(origin);
    return {
        props: {
            coupleData: response.data,
        }
    }
}
