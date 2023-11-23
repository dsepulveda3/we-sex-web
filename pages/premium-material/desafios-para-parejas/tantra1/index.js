import Tantra1 from "../../../../components/premiumMaterial/desafiosParejas/tantra1";
import React, { useEffect, useState } from 'react';


const DesafioTantra1 = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    return(
        <>
            {isClient && (
                <>
                    <Tantra1 />
                </>
            )}
        </>
    );
}

export default DesafioTantra1;