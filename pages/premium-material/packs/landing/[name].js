import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices';
import { query_pack } from '../../../../requests/premiumService';

export default function Pack({ packData }) {
    useEffect(() => {
      // Check if window is defined (client-side)
      if (typeof window !== 'undefined') {
        // This code will only run on the client side
          const currentRoute = window.location.pathname + window.location.search;

          // Send the complete route to Freshpaint as a custom event
          if(currentRoute === '/premium-material/packs/pack11-Meno-R'){
              freshpaint.track("Page View - Pack Meno + Rutina", {"Path": currentRoute});
          }
          
      }
    }, []);

    const { pack, guides } = packData;

    const inputString = pack.title;
    const spanMatches = inputString.match(/<span>(.*?)<\/span>/);
    const textInsideSpan = spanMatches ? spanMatches[1] : '';
    const textOutsideSpan = inputString.replace(/<span>(.*?)<\/span>/, '');


    return (
      <>
        <Head>
          <title>{textOutsideSpan + ' ' + textInsideSpan}</title>
          <meta name="description" content={pack.description} /> 
          <meta name="keywords" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/img/favicon/site.webmanifest"/>
        </Head>
        
        <main>
        <Layout >
          <FirstBannerUniversal titleText={textOutsideSpan} titleSpan={textInsideSpan} 
            price_before={`AR$ ${globalPrices.OneProductARS*2}  /  U$D ${globalPrices.OneProductUSD*2}`}
            price={`AR$ ${globalPrices.TwoProductARS}  /  U$D ${globalPrices.TwoProductUSD}`}
            description1='' 
            description2={pack.description} 
            videoVisibility={false} imageVisibility={false}/>
          <AfterDiv />
          {guides.map((guide) => (
            <EsParaVosSiUniversal
              key={guide.id} 
              title1_1={`Esta ${guide.name} es `}
              title1Span="para ti"
              title1_2=" si buscas"
              emoji1={guide.descriptionTexts[0].emoji} 
              text1_1={guide.descriptionTexts[0].text_1} 
              text1Span={guide.descriptionTexts[0].span} 
              text1_2={guide.descriptionTexts[0].text_2}
              emoji2={guide.descriptionTexts[1].emoji} 
              text2_1={guide.descriptionTexts[1].text_1} 
              text2Span={guide.descriptionTexts[1].span} 
              text2_2={guide.descriptionTexts[1].text_2}
              emoji3={guide.descriptionTexts[2].emoji} 
              text3_1={guide.descriptionTexts[2].text_1} 
              text3Span={guide.descriptionTexts[2].span} 
              text3_2={guide.descriptionTexts[2].text_2}
              emoji4={guide.descriptionTexts[3].emoji} 
              text4_1={guide.descriptionTexts[3].text_1} 
              text4Span={guide.descriptionTexts[3].span} 
              text4_2={guide.descriptionTexts[3].text_2}
              emoji5={guide.descriptionTexts[4].emoji} 
              text5_1={guide.descriptionTexts[4].text_1} 
              text5Span={guide.descriptionTexts[4].span} 
              text5_2={guide.descriptionTexts[4].text_2}
              emoji6={guide.descriptionTexts[5].emoji} 
              text6_1={guide.descriptionTexts[5].text_1} 
              text6Span={guide.descriptionTexts[5].span} 
              text6_2={guide.descriptionTexts[5].text_2}
              emoji7={guide.descriptionTexts[6].emoji} 
              text7_1={guide.descriptionTexts[6].text_1} 
              text7Span={guide.descriptionTexts[6].span} 
              text7_2={guide.descriptionTexts[6].text_2}
            />
          ))}
          <AfterDiv />
          <AfterDiv />
          
          <ComprarUniversal 
            title_mp={pack.title_mp} 
            unit_price_mp={pack.unit_price_mp} 
            quantity_mp={pack.quantity_mp} 
            currency_id_mp={pack.currency_id_mp}
            price_before_ARG={`AR$ ${globalPrices.OneProductARS*2}`} 
            price_ARG={`AR$ ${globalPrices.TwoProductARS}`}
            price_before_USD={`U$D ${globalPrices.OneProductUSD*2}`} 
            price_USD={`U$D ${globalPrices.TwoProductUSD}`}
            redirection_succesful_mp={pack.redirection_succesful_mp} 
            redirection_failed_mp={pack.redirection_failed_mp}
            link_payhip_usd={pack.link_payhip_usd} 
            has_promo={pack.has_promo}
            buy_just={pack.buy_just} 
            reminder_buy_just={pack.reminder_buy_just}
            link_promo='' 
            text_promo1_1=''
            text_promo1Span='' 
            text_promo1_2=''
            link_promo2='' 
            text_promo2_1=''
            text_promo2Span='' 
            text_promo2_2=''
          />
          <Footer />
          </Layout>
        </main>
      </>
    )
}


export async function getServerSideProps(context) {
    const { name } = context.query;
    const response = await query_pack(name);

    return {
      props: { packData: response.data },
    }
}
