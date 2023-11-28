import Head from 'next/head'
import { query_guide } from '../../../../requests/premiumService'
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
import Layout from '../../../../components/general/Layout'


export default function GuideView({ guideData }) {

  console.log(guideData);
  // useEffect(() => {
  //   // Check if window is defined (client-side)
  //   if (typeof window !== 'undefined') {
  //     // This code will only run on the client side
  //       const currentRoute = window.location.pathname + window.location.search;

  //       // Send the complete route to Freshpaint as a custom event
  //       if(currentRoute === '/premium-material/guides/guia-monopausia'){
  //           freshpaint.track("Page View - Guía menopausia", {"Path": currentRoute});
  //       }
        
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>{guideData.name} - WeSex</title>
        <meta name="description" content={guideData.description} />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
      </Head>

      <main>
        <Layout>
          <FirstBannerUniversal
            titleText={guideData.name.split(/\s*de\s*/)[0] + ' de'}
            titleSpan={guideData.name.split(/\s*de\s*/)[1]}
            price={`AR$ ${guideData.priceARS}  /  U$D ${guideData.priceUSD}`}
            description1=""
            description2={guideData.description}
            imageVisibility={true}
            videoVisibility={false}
            image={`https://we-sex-premium.s3.amazonaws.com/${guideData.coverImage.key}`}
            widthImage={'45%'}
          />

          <EsParaVosSiUniversal
            title1_1={`Esta ${guideData.name} es `}
            title1Span="para ti"
            title1_2=" si buscas"
            emoji1={guideData.descriptionTexts[0].emoji}
            text1_1={guideData.descriptionTexts[0].text_1}
            text1Span={guideData.descriptionTexts[0].span}
            text1_2={guideData.descriptionTexts[0].text_2}
            emoji2={guideData.descriptionTexts[1].emoji}
            text2_1={guideData.descriptionTexts[1].text_1}
            text2Span={guideData.descriptionTexts[1].span}
            text2_2={guideData.descriptionTexts[1].text_2}
            emoji3={guideData.descriptionTexts[2].emoji}
            text3_1={guideData.descriptionTexts[2].text_1}
            text3Span={guideData.descriptionTexts[2].span}
            text3_2={guideData.descriptionTexts[2].text_2}
            emoji4={guideData.descriptionTexts[3].emoji}
            text4_1={guideData.descriptionTexts[3].text_1}
            text4Span={guideData.descriptionTexts[3].span}
            text4_2={guideData.descriptionTexts[3].text_2}
            emoji5={guideData.descriptionTexts[4].emoji}
            text5_1={guideData.descriptionTexts[4].text_1}
            text5Span={guideData.descriptionTexts[4].span}
            text5_2={guideData.descriptionTexts[4].text_2}
            emoji6={guideData.descriptionTexts[5].emoji}
            text6_1={guideData.descriptionTexts[5].text_1}
            text6Span={guideData.descriptionTexts[5].span}
            text6_2={guideData.descriptionTexts[5].text_2}
            emoji7={guideData.descriptionTexts[6].emoji}
            text7_1={guideData.descriptionTexts[6].text_1}
            text7Span={guideData.descriptionTexts[6].span}
            text7_2={guideData.descriptionTexts[6].text_2}
          />

          <AfterDiv />
          <AfterDiv />

          <ProfesionalesUniversal
            fabiVisibility={guideData.proffesionals.includes('fabi')}
            ceciliaVisibility={guideData.proffesionals.includes('cecilia')}
            barbaraVisibility={guideData.proffesionals.includes('barbara')}
          />

          <PackUniversal
            title1_1={guideData.pack.text_1}
            title1_2={guideData.pack.text_2}
            title1_3={guideData.pack.text_3}
            link_promo={guideData.pack.link}
          />

          <Regalar />

          <ComprarUniversal
            title_mp={guideData.globalBuyData.title_mp}
            unit_price_mp={guideData.globalBuyData.unit_price_mp}
            quantity_mp={guideData.globalBuyData.quantity_mp}
            currency_id_mp={guideData.globalBuyData.currency_id_mp}
            price_ARG={`AR$ ${guideData.priceARS}`}
            price_USD={`U$D ${guideData.priceUSD}`}
            redirection_succesful_mp={guideData.globalBuyData.redirection_succesful_mp}
            redirection_failed_mp={guideData.globalBuyData.redirection_failed_mp}
            link_payhip_usd={guideData.globalBuyData.link_payhip_usd}
            has_promo={guideData.globalBuyData.has_promo}
            buy_just={guideData.globalBuyData.buy_just}
            reminder_buy_just={guideData.globalBuyData.reminder_buy_just}
            link_promo2={guideData.globalBuyData.link_promo}
            text_promo2_1={guideData.globalBuyData.text_promo}
            text_promo2Span={guideData.globalBuyData.text_promo_span}
            text_promo2_2={guideData.globalBuyData.text_promo_2}
            link_promo='' text_promo1_1=''
            text_promo1Span='' text_promo1_2=''
          />

          <Dudas />
          <AboutWeSex />
          <Footer />
        </Layout>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await query_guide(id);

  return {
    props: { guideData: response.data },
  }
}
