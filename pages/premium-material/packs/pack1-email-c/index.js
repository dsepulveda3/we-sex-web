import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guías de Zonas Erógenas + Anal + Tantra - WeSex</title>
        <meta name="description" content="Guía Tantra + Sexo Anal - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>        
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guías de ' titleSpan='Zonas Erógenas + Anal + Tantra' 
          price_before= {`AR$ ${globalPrices.OneProductARS*3}  /  U$D ${globalPrices.OneProductUSD*3}`}
          price={`AR$ ${globalPrices.ThreeProductARS}  /  U$D ${globalPrices.ThreeProductUSD}`} 
          description1='Llevate 3, paga 2 :) .' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
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
        <EsParaVosSiUniversal title1_1='Esta guía de Sexo Anal es ' title1Span='para ti' title1_2=' si buscas' 
        emoji1='🤟' text1_1='Un ' text1Span='paso a paso' text1_2=' sobre cómo tener una experiencia anal placentera.'
        emoji2='👀' text2_1='Reducir ' text2Span='riesgos asociados con el sexo anal' text2_2=' y cómo cuidar tu salud.' 
        emoji3='🧼' text3_1='Tener una ' text3Span='buena higiene' text3_2=' en el sexo anal.' 
        emoji4='🗨️' text4_1 ='Información sobre ' text4Span='cómo comunicarte con tu pareja' text4_2 = ' sobre tus deseos y limites en relación al sexo anal.'
        emoji5='😬' text5_1='' text5Span='Evitar dolor ' text5_2='innecesario.' 
        emoji6='🍆' text6_1='' text6Span='Diferentes juguetes sexuales ' text6_2='y cómo usarlos de forma segura y placentera.'
        emoji7='💦' text7_1='Tipos de ' text7Span='lubricantes disponibles' text7_2='y como usarlos correctamente para evitar el dolor o la incomodidad.' />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Tantra es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💗' text1_1='' text1Span='Inducirte al tantra' text1_2=' y aplicarlo en tu vida sexual.'
          emoji2='✨' text2_1='Tener orgasmos ' text2Span='más profundos y duraderos.' text2_2='' 
          emoji3='🏋️‍♀️' text3_1='Practicar ' text3Span='tantra con tu pareja.' text3_2='' 
          emoji4='🍆' text4_1 ='Incrementar las sensaciones de ' text4Span='placer en tu vida.' text4_2 = ''
          emoji5='🫦' text5_1='Técnicas de ' text5Span='liberación emocional.' text5_2='' 
          emoji6='🤟' text6_1='' text6Span='Técnicas  ' text6_2='para llevar tus encuentros al siguiente nivel.'
          emoji7='🧘' text7_1='Una ' text7Span='meditación guiada' text7_2=' vía audio.' />
        <ComprarUniversal title_mp='EMC - Guía Zonas Erógenas + Anal + Tantra - WeSex' 
          unit_price_mp= {globalPrices.ThreeProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*3}`} price_ARG={`AR$ ${globalPrices.ThreeProductARS}`} 
          price_before_USD={`U$D ${globalPrices.OneProductUSD*3}`} price_USD={`U$D ${globalPrices.ThreeProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/KQeJv' 
          redirection_failed_mp='https://www.we.sex/packs/pack1-email-c'
          link_payhip_usd='https://payhip.com/b/dH53R' has_promo={false}
        />
        <Footer />
        </Layout>
      </main>
    </>
  )
}