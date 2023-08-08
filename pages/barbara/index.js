import Head from 'next/head'
import FirstBannerUniversal from '../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../components/premiumMaterial/esParaVosSiUniversal'
import ProfesionalesUniversal from '../../components/premiumMaterial/profesionalesUniversal'
import Regalar from '../../components/premiumMaterial/regalar'
import ComprarUniversal from '../../components/premiumMaterial/comprarUniversal'
import Dudas from '../../components/premiumMaterial/dudas'
import AboutWeSex from '../../components/premiumMaterial/aboutWeSex'
import AfterDiv from '../../components/premiumMaterial/afterDiv'
import Footer from '../../components/premiumMaterial/footer'
import SeguisDudando from '../../components/premiumMaterial/seguisDudando'
import Layout from '../../components/general/Layout';

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
        

      </Head>
      <main>
        <Layout>
        <FirstBannerUniversal titleText='Guía completísima de' titleSpan='sexo anal' price='AR$ 1600  /  U$D 6' description1='Dejate de dudar,' 
          description2='regalate placer y empieza a experimentar con esta maravillosa práctica' imageVisibility={true}
          videoVisibility={false} image='../../img/como-nunca-antes-gozado.png' widthImage={'80%'}/>
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
        <ProfesionalesUniversal fabiVisibility={false} ceciliaVisibility={true} barbaraVisibility={true}/>
        <Regalar />
        <ComprarUniversal title_mp='Guía Sexo Anal - WeSex' unit_price_mp= {1600} quantity_mp={1} currency_id_mp='ARS'
          price_ARG='AR$  1600' price_USD='U$D  6' redirection_succesful_mp='https://payhip.com/b/LRZC1' 
          redirection_failed_mp='https://we.sex/barbara'
          link_payhip_usd='https://payhip.com/b/aoQGR' has_promo={false}/>
        <Dudas />
        <AboutWeSex />
        <SeguisDudando />
        <Footer />
        </Layout>
      </main>
    </>
  )
}