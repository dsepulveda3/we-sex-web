import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import Layout from '../components/general/Layout'
import Suscribe from '../components/general/Suscribe';
import { is_subscribed } from '../requests/premiumService';
import { useAuth } from '../context/authUserContext';

import SurveysHorizontal from '../components/surveys/surveysHorizontal'
import DebatesHorizontal from '../components/debates/DebatesHorizontal'
import ArticlesHorizontal from '../components/articles/ArticlesHorizontal'


const PLAN_ID = process.env.NEXT_PUBLIC_PLAN_ID;

export default function Home() {

  const { authUser, loading } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const checkSubscriptionStatus = async () =>{
    const response = await is_subscribed(
      PLAN_ID, 
    );
    console.log("reading request")
    console.log(response);
    if (response.status === 200){
      setIsSubscribed(true);
    }

  }
  useEffect(() => {
    if (!loading && authUser){
    //  setLoggedIn(true)
     checkSubscriptionStatus();
    }
  }, [authUser, loading]);



  return (
    <>
      <Head>
        <title>
          {'Inicio | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content='Página de inicio de WeSex' />
        <meta name='keywords' content='wesex,www.we.sex,we.sex' />
      </Head>
      <main>
      <Layout type={'nothidden'}>
        <div style={{paddingBottom: '5rem'}}>
        {/* here */}
        {/* <Suscribe/> */}
        
        <SurveysHorizontal />
        <ArticlesHorizontal />
        <DebatesHorizontal />
        </div>
      </Layout>
      </main>
    </>
  );
}