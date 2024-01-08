import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack14() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/packs/pack14-eight-guides'){
            freshpaint.track("Page View - Eight Guides", {"Path": currentRoute});
        }
        
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Pack Ocho Guías - WeSex</title>
        <meta name="description" content="Pack Ocho Guías - WeSex" /> 
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Por $16,000 llevate ' titleSpan=' 8 guías de WeSex y aprende TODO sobre sexo.' 
          price_before={`AR$ ${globalPrices.OneProductARS*8}  /  U$D ${globalPrices.OneProductUSD*8}`}
          price={`AR$ ${globalPrices.EightProductARS} /  U$D ${globalPrices.EightProductUSD}`}
          description1=''
          description2='Compra el pack a un precio orgásmico.'
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Comunicación es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💞' text1_1='Mejorar la ' text1Span='comunicación con tu pareja.' text1_2=''
          emoji2='🗣' text2_1='' text2Span='Expresar tus deseos ' text2_2='sin sentirte juzgado.' 
          emoji3='🫶' text3_1='' text3Span='Detectar y entender ' text3_2='tus emociones.' 
          emoji4='💖' text4_1 ='' text4Span='Potenciar la conexión emocional ' text4_2 = 'con tus vínculos.'
          emoji5='🙉' text5_1='Ser una persona que sabe ' text5Span='escuchar.' text5_2='' 
          emoji6='💦' text6_1='Fortalecer la ' text6Span='conexión sexual' text6_2=' con tus vínculos.'
          emoji7='💫' text7_1='Fomentar la empatía y ' text7Span='comprensión mutua.' text7_2='' />
        <EsParaVosSiUniversal title1_1='Esta guía de Deseo es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='🧠' text1_1='Entender y ' text1Span='aceptar tu deseo sexual.' text1_2=''
          emoji2='✨' text2_1='' text2Span='Reavivar la pasión' text2_2=' en tu relación.' 
          emoji3='💦' text3_1='' text3Span='Herramientas prácticas ' text3_2='para incrementar tu deseo sexual.' 
          emoji4='💗' text4_1 ='' text4Span='Aprender que cosas estimulan ' text4_2 = 'tu deseo sexual y cuales lo inhiben.'
          emoji5='👀' text5_1='' text5Span='Detectar tus zonas erógenas ' text5_2='preferidas.' 
          emoji6='😋' text6_1='Encontrar la ' text6Span='frecuencia sexual perfecta ' text6_2='para tu relación.'
          emoji7='🤟' text7_1='' text7Span='Cómo mantener encendido' text7_2=' tu deseo.' 
        />
        <EsParaVosSiUniversal title1_1='Esta guía para Salir de la rutina es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='Dejar de hacer siempre lo mismo a la hora de ' text1Span='darse placer.' text1_2=''
          emoji2='💑' text2_1='Juegos prácticos para ' text2Span=' experimentar' text2_2=' con tu pareja.' 
          emoji3='✨' text3_1='' text3Span='Explorar tu sexualidad' text3_2=' más allá de lo convencional.' 
          emoji4='🏓' text4_1 ='Ping pong de ' text4Span='preguntas para hablar' text4_2 = ' en sus encuentros.'
          emoji5='🧸' text5_1='Incorporar' text5Span=' juguetes sexuales' text5_2=' en la pareja.' 
          emoji6='🧚‍♀️' text6_1='Llevar a cabo' text6Span=' tus fantasías.' text6_2=''
          emoji7='👅' text7_1='Reavivar la llama' text7Span=' como si fuera la primera vez.' text7_2='' 
        />
        <EsParaVosSiUniversal title1_1='Esta guía de Orgasmos Profundos es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💗' text1_1='' text1Span='Inducirte al tantra' text1_2=' y aplicarlo en tu vida sexual.' 
          emoji2='✨' text2_1='Tener orgasmos ' text2Span='más profundos y duraderos.' text2_2='' 
          emoji3='🏋️‍♀️' text3_1='Practicar ' text3Span='tantra con tu pareja.' text3_2='' 
          emoji4='🍆' text4_1 ='Incrementar las sensaciones de ' text4Span='placer en tu vida.' text4_2 = ''
          emoji5='🫦' text5_1='Técnicas de' text5Span='liberación emocional.' text5_2='' 
          emoji6='🤟' text6_1='' text6Span='Técnicas  ' text6_2='para llevar tus encuentros al siguiente nivel.'
          emoji7='🧘' text7_1='Una ' text7Span='meditación guiada' text7_2=' vía audio.' 
        />
        <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica 1 es  ' title1Span='para ti' title1_2=' si buscas'
          emoji1='👀' text1_1='Experimentar nuevas ' text1Span='dimensiones de placer.' text1_2=''
          emoji2='✨' text2_1='Transformar el ' text2Span='autoplacer' text2_2=' en una práctica espiritual y de bienestar.'
          emoji3='💗' text3_1='' text3Span='Amigarte con tu cuerpo' text3_2=' y tu placer interior.'
          emoji4='🏓' text4_1 ='Introducirte ' text4Span='a nuevas técnicas' text4_2 = ' de Masturbación.'
          emoji5='🫦' text5_1='Sensibilizar tus tejidos para una' text5Span=' experiencia más profunda.' text5_2=''
          emoji6='🧚‍♀️' text6_1='Descubrir el poder de la' text6Span=' atención plena en tu vida sexual.' text6_2=''
          emoji7='🧘' text7_1='Explorar la ' text7Span='conexión mente-cuerpo.' text7_2=''
        />
         <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica 2 es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='' text1Span='Aprender técnicas' text1_2=' tántricas de masturbación.'
          emoji2='💑' text2_1='' text2Span='Sentir placer de manera más profunda' text2_2=' en tus relaciones sexuales.' 
          emoji3='✨' text3_1='Aprender masajes tántricos' text3Span=' de vulva, clítoris y canal vaginal.' text3_2='' 
          emoji4='🏓' text4_1='Aprender masajes tántricos' text4Span=' de ano, períneo, pene y testículos.' text4_2 = ''
          emoji5='🧸' text5_1='Darte un espacio de' text5Span=' placer personal.' text5_2='' 
          emoji6='🧚‍♀️' text6_1='Tener' text6Span=' orgasmos más profundos' text6_2=' y poder regularlos.'
          emoji7='👅' text7_1='Descubrir el poder de la' text7Span=' atención plena' text7_2=' en tu vida sexual.' 
        />
         <EsParaVosSiUniversal title1_1='Esta guía de Zonas Erógenas es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='La magia de combinar diferentes zonas y ' text1Span='técnicas para alcanzar un placer extremo.' text1_2=''
          emoji2='👀' text2_1='Cómo ' text2Span='romper con el coitocentrismo' text2_2=' y explorar nuevas prácticas sexuales.' 
          emoji3='💦' text3_1='Minimizar conflictos ' text3Span='relacionados con la eyaculación precoz' text3_2=' y la falta de erección.' 
          emoji4='💗' text4_1 ='La importancia de ' text4Span='disfrutar el placer' text4_2 = ' más allá de la penetración vaginal.'
          emoji5='🤟' text5_1='' text5Span='Técnicas de ' text5_2='masajes eróticos.' 
          emoji6='😋' text6_1='' text6Span='Cómo estimular cada parte del cuerpo' text6_2=', de pies a cabeza.'
          emoji7='🫦' text7_1='' text7Span='Variadas técnicas de estimulación' text7_2=' desde suaves mordiscos hasta succiones.' 
        />
         <EsParaVosSiUniversal title1_1='Esta guía de Sexo Anal es ' title1Span='para ti' title1_2=' si buscas' 
            emoji1='🤟' text1_1='Un ' text1Span='paso a paso' text1_2=' sobre cómo tener una experiencia anal placentera.'
            emoji2='👀' text2_1='Reducir ' text2Span='riesgos asociados con el sexo anal' text2_2=' y cómo cuidar tu salud.' 
            emoji3='🧼' text3_1='Tener una ' text3Span='buena higiene' text3_2=' en el sexo anal.' 
            emoji4='🗨️' text4_1 ='Información sobre ' text4Span='cómo comunicarte con tu pareja' text4_2 = ' sobre tus deseos y limites en relación al sexo anal.'
            emoji5='😬' text5_1='' text5Span='Evitar dolor ' text5_2='innecesario.' 
            emoji6='🍆' text6_1='' text6Span='Diferentes juguetes sexuales ' text6_2='y cómo usarlos de forma segura y placentera.'
            emoji7='💦' text7_1='Tipos de ' text7Span='lubricantes disponibles' text7_2='y como usarlos correctamente para evitar el dolor o la incomodidad.' 
        />

        <AfterDiv />
        <AfterDiv />
        
        <ComprarUniversal title_mp='Pack 8 Guías - WeSex' 
          unit_price_mp= {globalPrices.EightProductARS}
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*8}`} price_ARG={`AR$ ${globalPrices.EightProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*8}`} price_USD={`U$D ${globalPrices.EightProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/9jJmK'
          redirection_failed_mp='https://www.we.sex/premium-material/packs/pack14-eight-guides'
          link_payhip_usd='https://payhip.com/b/hlTHa' has_promo={true}
          buy_just='Comprar pack' reminder_buy_just='Estás comprando el pack'
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