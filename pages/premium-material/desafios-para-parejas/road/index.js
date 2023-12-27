import Road from "../../../../components/premiumMaterial/desafiosParejas/road";
import NotificationButton from "../../../../components/webPush";
import InstallButton from "../../../../components/pwaInstallButton";
import { useEffect, useState } from "react";


const DesafioRoad = ({ coupleName, index }) => {
    const [isPwa, setIsPwa] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsPwa(true);
        }
    }, []);

    return(
        <>
            <NotificationButton coupleName={coupleName} index={index} />
            {!isPwa? <InstallButton /> : null}
        </>
    )
};

export default DesafioRoad;

export const getServerSideProps = async (context) => {
    const { coupleName, index } = context.query;

    return {
        props: {
            coupleName,
            index
        }
    }
}
