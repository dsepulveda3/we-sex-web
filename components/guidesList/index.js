// import React, {useEffect, useState} from 'react';

// import styled from '@emotion/styled';



// function GuidesList () {
//     const [guides, setGuides] = useState([]);




//     return (
//         <h1>PLACEHOLDER</h1>
//     )
// }

// export default GuidesList;

import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { is_subscribed } from '../../requests/premiumService';
import { useAuth } from '../../context/authUserContext';
import { query_guides } from '../../requests/premiumService';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("/img/landing/cta-bg.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    margin-top: .1rem;
    position: relative;
    padding-top: 10rem;
    

    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:10rem;
    }
`;


const GuideSquare = styled.div`
    background-color: white;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    @media(max-width: 540px){
        margin-right: 3rem;
        margin-left: 3rem;
    }
`;

const Title = styled.h1`
    font-size: 5.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 0.85; /* adjust the opacity as needed */
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        text-decoration-thickness: 0.3rem; /* ajusta el grosor */
    }
    @media(max-width: 540px){
        font-size: 4.5rem;
        margin-bottom:1.5rem;
    }
`;


const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(min-width: 540px){
        // margin-left: 2rem;
        // margin-right: 2rem;
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const TextGuide = styled.p`
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        
    }
`;

const ContainerContentGuide = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
`;

const AppImageGuia1 = styled.img`
    width: 60%;
    margin-left: 0px;
    
    @media(max-width: 540px){
        width: 60%;
        margin-top: 1rem;
        // margin-right: 2rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImageGuia2 = styled.img`
    width: 32%;
    margin-left: 40px;
    margin-right: 3rem;
    margin-top: 18px;   
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 2.5rem;
        margin-right: 3rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;


const AppImageGuia3 = styled.img`
    width: 32%;
    margin-left: 40px;
    margin-right: 3rem;
    margin-top: 21px;   
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 2.5rem;
        margin-right: 3rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;
const AppImageGuiaQuestion = styled.img`
    width: 40%;
    margin-left: 40px;
    margin-right: 5px;
    margin-top: 18px;   
    
    @media(max-width: 540px){
        width: 45%;
        margin-top: 2rem;
        margin-right: 0.5rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const Section = styled.section`
  

  .icon-box {
    
  }

  .icon-box img {
    max-width: 100%;
    transition: all 0.4s;
  }

  .icon-box h3 {
    
    
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .icon-box:hover img {
    transform: scale(1.1);
  }

  .icon-box:hover h3 {
    color: var(--green);
    font-weight: bold;
    transform: scale(1.01);
  }
`;

const ColHideOnPhone = styled(Col)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledH3 = styled.h3`
  font-family: "Karla", sans-serif;
  color: var(--violet);
  text-align: left;
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  span {
    color: var(--violet); /* Default color for the <span> elements */
  }

  &:hover {
    color: var(--green); /* Change the color of the whole <h3> on hover */
    span {
      color: var(--green); /* Change the color of the <span> elements on hover */
    }
  }
`;


const PLAN_ID = process.env.NEXT_PUBLIC_PLAN_ID;


const GuidesList = () => {


    const [guides, setGuides] = useState([]);
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

    useEffect(() => {
        query_guides().then((response) => {
            console.log(response);
            setGuides(response.data);
        });
    }, []);

    const isSubscribedUrlPrefix = isSubscribed ? '/premium-material/guides/pdf-viewer' : '/premium-material/crud/guide';
    const fillerSectionsCount = 8 - guides.length;

    // Depending on the isSubscribed state, set the appropriate link
    const guideMTLink = isSubscribed
        ? `/premium-material/guides/pdf-viewer/${'guia-mt'}`// Link for subscribed user
        : '/premium-material/guides/guia-masturbacion-tantrica'; // Link for non-subscribed user

    const guideAnalLink = isSubscribed
        ? `/premium-material/guides/pdf-viewer/${'guia-anal'}`// Link for subscribed user
        : '/premium-material/guides/guia-sexo-anal'; // Link for non-subscribed user

    const guideTantraLink = isSubscribed
        ? `/premium-material/guides/pdf-viewer/${'guia-tantra'}`// Link for subscribed user
        : '/premium-material/guides/guia-tantra'; // Link for non-subscribed user

    const guideZonasLink = isSubscribed
        ? `/premium-material/guides/pdf-viewer/${'guia-zonas-erogenas'}`// Link for subscribed user
        : '/premium-material/guides/guia-zonas-erogenas'; // Link for non-subscribed user

    const guideRutinaLink = isSubscribed
        ? `/premium-material/guides/pdf-viewer/${'guia-salir-rutina'}`// Link for subscribed user
        : '/premium-material/guides/guia-salir-rutina'; // Link for non-subscribed user

    const guideImageSizeParser = (guideAlternativeTitle, image) => {
      if (guideAlternativeTitle === 'guia-mt') {
          return <AppImageGuia2 src={image} className="img-fluid"/>
      } else if (guideAlternativeTitle === 'guia-sexo-anal') {
        return <AppImageGuia1 src={image} className="img-fluid"/>
      } else if (guideAlternativeTitle === 'guia-tantra') {
        return <AppImageGuia2 src={image} className="img-fluid"/>
      } else if (guideAlternativeTitle === 'guia-zonas-erogenas') {
        return <AppImageGuia3 src={image} className="img-fluid"/>
      } else if (guideAlternativeTitle === 'guia-salir-rutina') {
        return <AppImageGuia2 src={image} className="img-fluid"/>
      } 
    }


  return (
    <Section id="guides">
        <Background>
            <Container>
                <Title>Nuestras <span>guías Premium</span></Title>
                <Text>
                    Páginas de sabiduría sexual para volverte un experto en cada tema.
                </Text>
                <Row data-aos="fade-left">
                  {guides.map((guide, index) => (
                      <Col lg="3" md="4" key={index} >
                      <Link href={`${isSubscribedUrlPrefix}/${guide._id}`}>
                          <GuideSquare>
                              <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                  {guideImageSizeParser(guide.alternativeTitle, `https://we-sex-premium.s3.amazonaws.com/${guide.coverImage.key}`)}
                                  {/* <AppImageGuia2 src={`https://we-sex-premium.s3.amazonaws.com/${guide.coverImage.key}`} className="img-fluid"/> */}
                                  <h3>{guide.name}</h3>
                              </ContainerContentGuide>
                          </GuideSquare>
                          </Link>
                      </Col>
                  ))}   
                  {Array.from({ length: fillerSectionsCount }, (_, index) => (
                    <ColHideOnPhone lg="3" md="4" key={`pronto-${index}`}>
                      <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                          <AppImageGuiaQuestion src="/img/premium-material/question-mark-draw.png" className="img-fluid"/>
                          <h3>Pronto</h3>
                        </ContainerContentGuide>
                      </GuideSquare>
                    </ColHideOnPhone>
                  ))}                             
               </Row>
            </Container>
        </Background>
      </Section>
  );
};

export default GuidesList;