import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/general/Layout';
import IntroDiscount from '../../../components/premiumMaterial/desafiosParejas/introDiscount';
import Explicacion2 from '../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../components/premiumMaterial/dudas'
import Plans from '../../../components/premiumMaterial/desafiosParejas/plans';
import Opinions from '../../../components/premiumMaterial/desafiosParejas/opinions';

export default function TestingA() {
  const router = useRouter();
  

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/desafios-para-parejas'){
            freshpaint.track("Page View Desafíos Root ", {"Path": currentRoute});
        }
        
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Desafio para parejas - WeSex</title>
        <meta name="description" content="Reavivar la llama con tu pareja - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>

      <main>
        <Layout>
        <IntroDiscount subtitle1_1='' subtitle1_2='Desafios sexuales' subtitle1_3='para hacer en pareja'/>
        {/* <div style={{color: "black", textAlign: "center", fontSize: "3rem", fontWeight: "bold"}}>TESTING A</div> */}
        <Explicacion2 />
        <ComoFunciona />
        <Dudas />
        <Opinions />
        <Plans/>
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}




// import { useEffect, useState } from 'react';
// import TestingA from '@/components/desafios/testingA';
// import TestingB from '@/components/desafios/testingB';

// const getRandomNumber = () => {
//   // Generate a random number between 0 and 1
//   return Math.random() < 0.5 ? 0 : 1;
// };

// const ABTestPage = () => {
//   const [userSegment, setUserSegment] = useState(null);

//   useEffect(() => {
//     // Generate the random number and set the user segment
//     setUserSegment(getRandomNumber());
//   }, []);

//   //console.log('User Segment coming:', userSegment);

//   if (userSegment === null) {
//     return null; // Return null during the first render
//   }

//   return (
//     <div>
//       {userSegment === 0 ? <TestingA /> : <TestingB />}
//     </div>
//   );
// };

// export default ABTestPage;


