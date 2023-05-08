import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FirstBanner from '@/components/firstBanner'
import EsParaVosSi from '@/components/esParaVosSi'
import EsParaVosSi2 from '@/components/esParaVosSi2'
import EsParaVosSi3 from '@/components/esParaVosSi3'
import EsParaVosSi4 from '@/components/esParaVosSi4'
import EsParaVosSi5 from '@/components/esParaVosSi5'
import QueVasAEncontrar from '@/components/queVasAEncontrar'
import Regalar from '@/components/regalar'
import Comprar from '@/components/comprar'
import Dudas from '@/components/dudas'
import AboutWeSex from '@/components/aboutWeSex'
import AfterDiv from '@/components/afterDiv'
import NavBarWS from '@/components/navbar'
import Profesionales from '@/components/profesionales'
import NoLoPienses from '@/components/noLoPienses'
import Footer from '@/components/footer'
import SeguisDudando from '@/components/seguisDudando'
import ComprarMaster1 from '@/components/comprarMaster1'
import FirstBannerMC from '@/components/firstBannerMC'
import EsParaVosSi3MC from '@/components/esParaVosSi3MC'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guía completa sobre como tener sexo anal - WeSex</title>
        <meta name="description" content="Aprende todo lo que necesitas saber sobre sexo anal con nuestra guía completa. Si es la primera vez que tienes sexo anal, si no pudiste experimentarlo por dolor, por higiene, o simplemente quieres dominar esta práctica, en esta guía te enseñamos todo para que solo te preocupes por disfrutar." /> 
        <meta name="keywords" content="sexo anal, guía de sexo anal, masaje anal, consejos para sexo anal, técnicas para sexo anal, preparación para sexo anal, lubricantes anales, experiencia placentera, Que juguetes usar en el sexo anal, higiene sexo anal, dolor en el sexo anal" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>

        {/* Google Analytics */}
        <script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-N99R6MFQZ3"></script>
        <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N99R6MFQZ3');` }}/>

         {/* Google Tag Manager */}
         <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MGQLHDP');
        `,
          }}
        />
        

      </Head>
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGQLHDP"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
        }}
      />
      <main>
        {/* <NavBarWS />
        <FirstBanner />
        <AfterDiv />
        <EsParaVosSi3 />
        <QueVasAEncontrar />
        <AfterDiv />
        <Profesionales />
        <Regalar /> */}
        <NavBarWS />
        <FirstBannerMC />
        <AfterDiv />
        <EsParaVosSi3MC />
        <Profesionales />
        <Dudas />
        <ComprarMaster1 />
        <AboutWeSex />
        {/* <Dudas />
        <AboutWeSex />
        <SeguisDudando /> */}
        {/* <NoLoPienses /> */}
        <Footer />
      </main>
    </>
  )
}
