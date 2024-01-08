import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationButton from "../../../../components/webPush";
import InstallButton from "../../../../components/pwaInstallButton";
import { get_web_push_data } from "../../../../requests/premiumService";
import { useEffect, useState } from "react";


const DesafioRoad = ({ coupleData, index }) => {
    const [isPwa, setIsPwa] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isLocalSide, setIsLocalSide] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsPwa(true);
        }
        setIsLocalSide(true);
    }, []);

    return(
        <>
        {isLocalSide && (
            <>
                {isVisible && <NotificationButton coupleData={coupleData} setShowPopup={setIsVisible} />}
                {!isPwa? <InstallButton /> : null}
            </>
        )}
        </>
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const { coupleName } = context.query;
    const response = await get_web_push_data(coupleName);
    return {
        props: {
            coupleData: response.data,
        }
    }
}
