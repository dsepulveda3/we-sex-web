import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack7() {
  
  return (
    <>
      <Head>
        <title>Guía Masturbación Tántrica + Zonas Erógenas + Anal - WeSex</title>
        <meta name="description" content="Guía Masturbación Tántrica + Zonas Erógenas + Anal - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías' titleSpan='Masturbación Tántrica + Zonas Erógenas + Anal' 
          price_before={`AR$ ${globalPrices.OneProductARS*3}  /  U$D ${globalPrices.OneProductUSD*3}`}
          price={`AR$ ${globalPrices.ThreeProductARS}  /  U$D ${globalPrices.ThreeProductUSD}`}
          description1='Llevate 3, paga 2 :) .' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica  ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='👀' text1_1='Experimentar nuevas ' text1Span='dimensiones de placer.' text1_2=''
          emoji2='✨' text2_1='Transformar el ' text2Span='autoplacer' text2_2=' en una práctica espiritual y de bienestar.' 
          emoji3='💗' text3_1='' text3Span='Amigarte con tu cuerpo' text3_2=' y tu placer interior.' 
          emoji4='🏓' text4_1 ='Introducirte ' text4Span='a nuevas técnicas' text4_2 = ' de Masturbación.'
          emoji5='🫦' text5_1='Sensibilizar tus tejidos para una' text5Span=' experiencia más profunda.' text5_2='' 
          emoji6='🧚‍♀️' text6_1='Descubrir el poder de la' text6Span=' atención plena en tu vida sexual.' text6_2=''
          emoji7='🧘' text7_1='Explorar la ' text7Span='conexión mente-cuerpo.' text7_2='' 
        />
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
        <ComprarUniversal title_mp='Guía Masturbación Tántrica + Zonas Erógenas + Anal - WeSex' 
          unit_price_mp= {globalPrices.ThreeProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*3}`} price_ARG={`AR$ ${globalPrices.ThreeProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*3}`} price_USD={`U$D ${globalPrices.ThreeProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/yK8ws' 
          redirection_failed_mp='https://www.we.sex/packs/pack7-MT-zonas-anal'
          link_payhip_usd='https://payhip.com/b/J4zaZ' has_promo={true}
          buy_just='Comprar pack 3x2' reminder_buy_just='Estás comprando el pack 3x2'
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='' text_promo2_1=''
          text_promo2Span='' text_promo2_2=''
        />
        <Footer />
        </Layout>
      </main>
    </>
  )
}