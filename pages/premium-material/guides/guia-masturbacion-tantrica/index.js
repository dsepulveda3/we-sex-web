import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ProfesionalesUniversal from '../../../../components/premiumMaterial/profesionalesUniversal'
import Regalar from '../../../../components/premiumMaterial/regalar'
import PackUniversal from '../../../../components/premiumMaterial/packUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import Dudas from '../../../../components/premiumMaterial/dudas'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import AboutWeSex from '../../../../components/premiumMaterial/aboutWeSex'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'


export default function MasturbacionTantrica() {
  
  return (
    <>
      <Head>
        <title>Guía Masturbación Tántrica - WeSex</title>
        <meta name="description" content="Guía Masturbación Tántrica - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía' titleSpan=' Masturbación Tántrica' 
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`} 
          description1='' 
          description2='Descubre nuevas capas de placer y goza como nunca' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/Masturbacion_tantrica.png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de masturbación tántrica es  ' title1Span='para ti' title1_2=' si buscas'
          emoji1='👀' text1_1='Experimentar nuevas ' text1Span='dimensiones de placer.' text1_2=''
          emoji2='✨' text2_1='Transformar el ' text2Span='autoplacer' text2_2=' en una práctica espiritual y de bienestar.'
          emoji3='💗' text3_1='' text3Span='Amigarte con tu cuerpo' text3_2=' y tu placer interior.'
          emoji4='🏓' text4_1 ='Introducirte ' text4Span='a nuevas técnicas' text4_2 = ' de Masturbación.'
          emoji5='🫦' text5_1='Sensibilizar tus tejidos para una' text5Span=' experiencia más profunda.' text5_2=''
          emoji6='🧚‍♀️' text6_1='Descubrir el poder de la' text6Span=' atención plena en tu vida sexual.' text6_2=''
          emoji7='🧘' text7_1='Explorar la ' text7Span='conexión mente-cuerpo.' text7_2=''
        />
        <AfterDiv />
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <PackUniversal title1_1='3 x 2' title1_2={`Por AR$${globalPrices.ThreeProductARS} llevate 3 guías de WeSex: `}
        title1_3='Masturbación Tántrica, Zonas Erógenas, Sexo Anal.' link_promo='/premium-material/packs/pack7-MT-zonas-anal' />
        <Regalar />
        <ComprarUniversal title_mp='Guía Masturbación Tántrica - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} price_USD={`U$D ${globalPrices.OneProductUSD}`} redirection_succesful_mp='https://payhip.com/b/s29W0' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-masturbacion-tantrica'
          link_payhip_usd='https://payhip.com/b/iYPqx' has_promo={true}
          buy_just='Comprar solo guía masturbación tántrica 1' reminder_buy_just='Estás comprando la guía para salir de la rutina' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='' text_promo2_1=''
          text_promo2Span='' text_promo2_2=''
          />
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}