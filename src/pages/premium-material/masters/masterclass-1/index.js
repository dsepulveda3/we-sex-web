import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FirstBannerUniversal from '@/components/firstBannerUniversal'
import EsParaVosSiUniversal from '@/components/esParaVosSiUniversal'
import ProfesionalesUniversal from '@/components/profesionalesUniversal'
import Dudas from '@/components/dudas'
import AboutWeSex from '@/components/aboutWeSex'
import AfterDiv from '@/components/afterDiv'
import NavBarWS from '@/components/navbar'
import NoLoPienses from '@/components/noLoPienses'
import Footer from '@/components/footer'
import SeguisDudando from '@/components/seguisDudando'
import ComprarUniversal from '@/components/comprarUniversal'
import HeaderPremium from '@/components/headerPremium';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>MasterSex Class por Bárbara García - WeSex</title>
        <meta name="description" content="MasterSex Class por Bárbara García - WeSex" /> 
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
        <HeaderPremium/>
        <FirstBannerUniversal titleText='MasterSex Class por' titleSpan='Barbara García' price='AR$ 4.000  /  U$D 15' description1='2 horas de aprendizaje sexual.' 
          descriptionSpan='Ondemand: ¡Mira la clase cuando prefieras!' description2='Aprende a disfrutar de cada instante de tus momentos sexuales.' 
          imageVisibility={false} video="https://jumpshare.com/embed/u37eETh6sUpMkZJ2zl6A" videoVisibility={true} />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta MasterSex Class es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='🗨️' text1_1='' text1Span='Técnicas de relajación ' text1_2='para conectar con el encuentro.'
          emoji2='🤟' text2_1='' text2Span='Masajes eróticos: ' text2_2='cómo dar y darte placer con masajes.' 
          emoji3='🧼' text3_1='' text3Span='Paja express v/s paja flow: ' text3_2='cómo disfrutar más la masturbación.' 
          emoji4='🍆' text4_1='' text4Span='Posporno: ' text4_2 = 'porno y sano para nuestra sexualidad.'
          emoji5='💦' text5_1='' text5Span='Acuerdos sexuales: ' text5_2='te enseñamos a llevar a cabo tus fantasías con tus parejas.' 
          emoji6='👀' text6_1='' text6Span='Respiración  ' text6_2='orgásmica y no orgásmica.'
          emoji7='🤟' text7_1='' text7Span='Técnicas ' text7_2='para llevar tus encuentros al siguiente nivel' />
        <ProfesionalesUniversal fabiVisibility={false} ceciliaVisibility={false} barbaraVisibility={true}/>
        <Dudas />
        <ComprarUniversal title_mp='MasterSex Class: revoluciona tu vida sexual' unit_price_mp= {4000} quantity_mp={1} currency_id_mp='ARS'
          price_ARG='AR$  4000' price_USD='U$D  15' redirection_succesful_mp='https://payhip.com/b/Sdivh' 
          redirection_failed_mp='https://we.sex/premium-material/masters/masterclass-1'
          link_payhip_usd='https://payhip.com/b/FDN0X' has_promo={false}/>
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
