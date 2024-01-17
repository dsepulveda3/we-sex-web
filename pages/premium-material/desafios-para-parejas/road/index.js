import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationButton from "../../../../components/webPush";
import InstallButton from "../../../../components/pwaInstallButton";
import NotificationComponent from "../../../../components/allowNotificationsPopUp";
import { get_web_push_data } from "../../../../requests/premiumService";
import { useState } from "react";


const DesafioRoad = ({ coupleData }) => {
    const [ismobile, setIsMobile] = useState(false);

    useEffect(() => {
      const userAgent = window.navigator.userAgent;
  
      const isMobileDevice = /Mobi|Android/i.test(userAgent);
  
      const isInStandaloneMode = 'standalone' in window.navigator && window.navigator.standalone;
  
      setIsMobile(isMobileDevice && !isInStandaloneMode);
    }, []);
    

    return(
        <>
        <Road />
        {!ismobile && <NotificationButton coupleData={coupleData} />}
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
