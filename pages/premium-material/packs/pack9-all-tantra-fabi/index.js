import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack9Fabi() {
  
  return (
    <>
      <Head>
        <title>Pack Tántrico - WeSex</title>
        <meta name="description" content="Pack Tántrico - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías' titleSpan='Orgasmos profundos + Masturbación Tántrica + Masturbación Tántrica 2' 
          price_before={`AR$ ${globalPrices.OneProductARS*3}  /  U$D ${globalPrices.OneProductUSD*3}`}
          price={`AR$ ${globalPrices.ThreeProductARS}  /  U$D ${globalPrices.ThreeProductUSD}`}
          description1='Llevate 3, paga 2 :) .' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Orgasmos Profundos es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💗' text1_1='' text1Span='Inducirte al tantra' text1_2=' y aplicarlo en tu vida sexual.' 
          emoji2='✨' text2_1='Tener orgasmos ' text2Span='más profundos y duraderos.' text2_2='' 
          emoji3='🏋️‍♀️' text3_1='Practicar ' text3Span='tantra con tu pareja.' text3_2='' 
          emoji4='🍆' text4_1 ='Incrementar las sensaciones de ' text4Span='placer en tu vida.' text4_2 = ''
          emoji5='🫦' text5_1='Técnicas de' text5Span='liberación emocional.' text5_2='' 
          emoji6='🤟' text6_1='' text6Span='Técnicas  ' text6_2='para llevar tus encuentros al siguiente nivel.'
          emoji7='🧘' text7_1='Una ' text7Span='meditación guiada' text7_2=' vía audio.' />
        <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica 1 es ' title1Span='para ti' title1_2=' si buscas' 
            emoji1='👀' text1_1='Experimentar nuevas ' text1Span='dimensiones de placer.' text1_2=''
            emoji2='✨' text2_1='Transformar el ' text2Span='autoplacer' text2_2=' en una práctica espiritual y de bienestar.' 
            emoji3='💗' text3_1='' text3Span='Amigarte con tu cuerpo' text3_2=' y tu placer interior.' 
            emoji4='🏓' text4_1 ='Introducirte ' text4Span='a nuevas técnicas' text4_2 = ' de Masturbación.'
            emoji5='🫦' text5_1='Sensibilizar tus tejidos para una' text5Span=' experiencia más profunda.' text5_2='' 
            emoji6='🧚‍♀️' text6_1='Descubrir el poder de la' text6Span=' atención plena en tu vida sexual.' text6_2=''
            emoji7='🧘' text7_1='Explorar la ' text7Span='conexión mente-cuerpo.' text7_2='' />
        <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica 2 es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='' text1Span='Aprender técnicas' text1_2=' tántricas de masturbación.'
          emoji2='💑' text2_1='' text2Span='Sentir placer de manera más profunda' text2_2=' en tus relaciones sexuales.' 
          emoji3='✨' text3_1='Aprender masajes tántricos' text3Span=' de vulva, clítoris y canal vaginal.' text3_2='' 
          emoji4='🏓' text4_1='Aprender masajes tántricos' text4Span=' de ano, períneo, pene y testículos.' text4_2 = ''
          emoji5='🧸' text5_1='Darte un espacio de' text5Span=' placer personal.' text5_2='' 
          emoji6='🧚‍♀️' text6_1='Tener' text6Span=' orgasmos más profundos' text6_2=' y poder regularlos.'
          emoji7='👅' text7_1='Descubrir el poder de la' text7Span=' atención plena' text7_2=' en tu vida sexual.' />
        <AfterDiv />
        <AfterDiv />
        
        <ComprarUniversal title_mp='F - Guía Orgasmos más profundos + Masturbación Tántrica 1 + Masturbación Tántrica 2 - WeSex' 
          unit_price_mp= {globalPrices.ThreeProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*3}`} price_ARG={`AR$ ${globalPrices.ThreeProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*3}`} price_USD={`U$D ${globalPrices.ThreeProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/0QeXD' 
          redirection_failed_mp='https://www.we.sex/premium-material/packs/pack9-all-tantra-fabi'
          link_payhip_usd='https://payhip.com/b/U8ivP' has_promo={true}
          buy_just='Comprar pack 3X2' reminder_buy_just='Estás comprando el pack 3x2'
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