import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import FirstBannerUniversal from '@/components/firstBannerUniversal'
import EsParaVosSiUniversal from '@/components/esParaVosSiUniversal'
import ProfesionalesUniversal from '@/components/profesionalesUniversal'
import Regalar from '@/components/regalar'
import ComprarUniversal from '@/components/comprarUniversal'
import Dudas from '@/components/dudas'
import AboutWeSex from '@/components/aboutWeSex'
import AfterDiv from '@/components/afterDiv'
import NavBarWS from '@/components/navbar'
import NoLoPienses from '@/components/noLoPienses'
import Footer from '@/components/footer'
import SeguisDudando from '@/components/seguisDudando'
import Pack from '@/components/pack'
import Header from '@/components/header'
import HeaderPremium from '@/components/headerPremium';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guía de zonas erogenas - WeSex</title>
        <meta name="description" content="Guía de zonas erogenas WeSex" /> 
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
        <FirstBannerUniversal titleText='Guía de' titleSpan='zonas erógenas' price='AR$ 1500  /  U$D 6' description1='Deja de dudar,' 
          description2='regálate placer y empieza a experimentar con esta maravillosa práctica.' imageVisibility={true} 
          videoVisibility={false} image='../../img/ico/ZonasErogenas (1).png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Zonas Erógenas ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='La magia de combinar diferentes zonas y técnicas para ' text1Span='alcanzar un placer extremo.' text1_2=''
          emoji2='👀' text2_1='Cómo ' text2Span='romper con el coitocentrismo' text2_2=' y explorar nuevas prácticas sexuales.' 
          emoji3='💦' text3_1='Formas de minimizar ' text3Span='relacionados con la eyaculación precoz' text3_2=' y la falta de erección.' 
          emoji4='💗' text4_1 ='La importancia de ' text4Span='disfrutar el placer' text4_2 = ' más allá de la penetración vaginal.'
          emoji5='🤟' text5_1='' text5Span='Técnicas de ' text5_2='masajes eróticos.' 
          emoji6='😋' text6_1='' text6Span='Cómo estimular cada parte del cuerpo' text6_2=', de pies a cabeza.'
          emoji7='🫦' text7_1='' text7Span='Variadas técnicas de estimulación' text7_2='desde suaves mordiscos hasta succiones.' />
        <AfterDiv />
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        {/* <Pack/> */}
        <Regalar />
        <ComprarUniversal title_mp='B - Guía Zonas Erógenas - WeSex' unit_price_mp= {1500} quantity_mp={1} currency_id_mp='ARS'
          price_ARG='AR$  1500' price_USD='U$D  6' redirection_succesful_mp='https://payhip.com/b/kOASy' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-zonas-erogenas-barbi'
          link_payhip_usd='https://payhip.com/b/OIuPk' has_promo={true}
          buy_just='Comprar solo guía zonas erógenas' reminder_buy_just='Estás comprando solo la guía de zonas erógenas' 
          link_promo='/premium-material/packs/pack1-barbi' text_promo1_1='O llevate la '
          text_promo1Span='guía de zonas erógenas + tantra + sexo anal' text_promo1_2=' a un precio orgásmico'
          link_promo2='/premium-material/packs/pack2-barbi' text_promo2_1='O llevate la '
          text_promo2Span='guía de zonas erógenas + tantra' text_promo2_2=' a un precio orgásmico'
          />
        <Dudas />
        <AboutWeSex />
        {/* <SeguisDudando /> */}
        {/* <NoLoPienses /> */}
        <Footer />
      </main>
    </>
  )
}
