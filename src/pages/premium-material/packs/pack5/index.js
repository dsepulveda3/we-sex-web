import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FirstBannerUniversal from '@/components/firstBannerUniversal'
import EsParaVosSiUniversal from '@/components/esParaVosSiUniversal'
import ComprarUniversal from '@/components/comprarUniversal'
import Dudas from '@/components/dudas'
import AboutWeSex from '@/components/aboutWeSex'
import AfterDiv from '@/components/afterDiv'
import NavBarWS from '@/components/navbar'
import Profesionales from '@/components/old/profesionales'
import NoLoPienses from '@/components/noLoPienses'
import Footer from '@/components/footer'
import SeguisDudando from '@/components/seguisDudando'
import Header from '@/components/header'
import HeaderPremium from '@/components/headerPremium';

// heey 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guías de Salir de la rutina + Zonas Erógenas - WeSex</title>
        <meta name="description" content="Guías Salir de la rutina + Zonas Erógenas - WeSex" /> 
        <meta name="keywords" content="" /> 
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
        {/* <NavBarWS /> */}
        <HeaderPremium />
        <FirstBannerUniversal titleText='Guías ' titleSpan='Salir de la rutina + Zonas Erógenas' price_before= 'AR$ 3200  /  U$D 12' price='AR$ 2400  /  U$D 10' description1='' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
          <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía para salir de la rutina es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='Dejar de hacer siempre lo mismo a la hora de ' text1Span='darse placer.' text1_2=''
          emoji2='💑' text2_1='Juegos prácticos para ' text2Span=' experimentar' text2_2=' con tu pareja.' 
          emoji3='✨' text3_1='' text3Span='Explorar tu sexualidad' text3_2=' más allá de lo convencional.' 
          emoji4='🏓' text4_1 ='Ping pong de ' text4Span='preguntas para hablar' text4_2 = ' de sexo en pareja.'
          emoji5='🧸' text5_1='Incorporar' text5Span=' juguetes sexuales' text5_2=' en la pareja.' 
          emoji6='🧚‍♀️' text6_1='Llevar a cabo' text6Span=' tus fantasías.' text6_2=''
          emoji7='👅' text7_1='Explorar' text7Span=' tus sentidos.' text7_2='' />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Zonas Erógenas es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='La magia de combinar diferentes zonas y ' text1Span='técnicas para alcanzar un placer extremo.' text1_2=''
          emoji2='👀' text2_1='Cómo ' text2Span='romper con el coitocentrismo' text2_2=' y explorar nuevas prácticas sexuales.' 
          emoji3='💦' text3_1='Minimizar conflictos ' text3Span='relacionados con la eyaculación precoz' text3_2=' y la falta de erección.' 
          emoji4='💗' text4_1 ='La importancia de ' text4Span='disfrutar el placer' text4_2 = ' más allá de la penetración vaginal.'
          emoji5='🤟' text5_1='' text5Span='Técnicas de ' text5_2='masajes eróticos.' 
          emoji6='😋' text6_1='' text6Span='Cómo estimular cada parte del cuerpo' text6_2=', de pies a cabeza.'
          emoji7='🫦' text7_1='' text7Span='Variadas técnicas de estimulación' text7_2=' desde suaves mordiscos hasta succiones.' />
        {/* <QueVasAEncontrar />
        <AfterDiv />
        <Profesionales />
        <Regalar /> */}
        <ComprarUniversal title_mp='Guía Salir de la rutina + Zonas Erógenas - WeSex' unit_price_mp= {2400} quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG='AR$  3200' price_ARG='AR$  2400' price_before_USD='U$D  12' price_USD='U$D  10' redirection_succesful_mp='https://payhip.com/b/kcSsq' 
          redirection_failed_mp='https://www.we.sex/packs/pack5'
          link_payhip_usd='https://payhip.com/b/l76c4' has_promo={false}
        />
        {/* <Dudas />
        <AboutWeSex />
        <SeguisDudando /> */}
        {/* <NoLoPienses /> */}
        <Footer />
      </main>
    </>
  )
}