import Head from 'next/head';
import StripeBrick from '../../../../components/stripeBrick'

export default function Stripe() {
    
    return (
        <>
        <Head>
            <title>Suscripción Stripe</title>
            <meta name="description" content="Material Premium" /> 
            <meta name="keywords" content="" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/img/favicon/site.webmanifest"/>
        </Head>
        <main>
            <div>
                <StripeBrick/>
            </div>
        </main>
        </>
    )
}