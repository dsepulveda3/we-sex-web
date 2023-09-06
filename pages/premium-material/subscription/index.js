
import Head from 'next/head';
import Layout from '../../../components/general/Layout';
import Intro from '../../../components/premiumMaterial/subscription/intro';
import Explicacion from '../../../components/premiumMaterial/subscription/explicacion';
import Plans from '../../../components/premiumMaterial/subscription/plans';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../context/authUserContext';


export default function Subscription() {
    const [isSubscribedStatus, setIsSubscribedStatus] = useState(false);
    const { authUser, loading, isSubscribed } = useAuth();

    useEffect(() => {
        if (!loading && authUser) {
            setIsSubscribedStatus(isSubscribed);
        }
    }, [authUser, loading]);
    
    return (
        <>
        <Head>
            <title>Suscripción</title>
            <meta name="description" content="Material Premium" /> 
            <meta name="keywords" content="" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/img/favicon/site.webmanifest"/>
        </Head>
        <main>
            <Layout type={'nothidden'}>
                <Intro/>
                {/* <Explicacion/> */}
                <Plans/>
            </Layout>
        </main>
        </>
    )
}