import React from 'react';
import Header from '@/components/header';
import HeaderLanding from '@/components/headerLanding';
import NavBarWS from '@/components/navbar'
import Hola from '@/components/hola';
import EsParaVosSi from '@/components/old/esParaVosSi';
import EsParaVosSi2 from '@/components/old/esParaVosSi2';
import EsParaVosSi3 from '@/components/old/esParaVosSi3';
import EsParaVosSi4 from '@/components/old/esParaVosSi4';
import EsParaVosSi5 from '@/components/old/esParaVosSi5';
import Temas2 from '@/components/temas2';
import Community from '@/components/community';
import Ceciliace from '@/components/ceciliace';
import Testimonials from '@/components/testimonials';
import Stadistics from '@/components/stadistics';
import Stadistics2 from '@/components/stadistics2';
import Questions from '@/components/questions';
import Contactus from '@/components/contactus';
import Articles from '@/components/Articles/articlesWithTabs'
import Debates from '@/components/Debates/discussionsWithTabs'



const Home = () => {
  return (
    <div>
      <HeaderLanding />
      <Hola />
      <Stadistics2 />
      <Articles/>
      <Debates/>
      <Temas2 />
      <Community />
      <Ceciliace />
      {/* <Testimonials /> */}
      <Questions/>
      <Contactus/>
    </div>
  );
};

export default Home;
