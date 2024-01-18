import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import InstallButton from "../../../../components/pwaInstallButton";
import NotificationComponent from "../../../../components/allowNotificationsPopUp";
import { get_web_push_data } from "../../../../requests/premiumService";
import React, { useState, useEffect } from "react";


const DesafioRoad = ({ coupleData }) => {
    const [ismobile, setIsMobile] = useState(false);

    useEffect(() => {
      const userAgent = window.navigator.userAgent;
      console.log(userAgent);
  
      const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = regex.test(userAgent);
      console.log(isMobileDevice)
  
      const isInStandaloneMode = 'standalone' in window.navigator && window.navigator.standalone;
      console.log(isInStandaloneMode)
  
      setIsMobile(isMobileDevice && !isInStandaloneMode);
    }, []);
    

    return(
        <>
        <Road />
        {!ismobile && <NotificationComponent coupleData={coupleData} />}
        {ismobile && <InstallButton />}
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
