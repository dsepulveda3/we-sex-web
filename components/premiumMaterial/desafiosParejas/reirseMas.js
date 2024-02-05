import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import santaUrl from '../../../public/img/rutina_bomba.png';
import Notificar2 from './universals/notificar2';
import ArrowBack from './universals/arrowBack';
import { useRouter } from 'next/router';
import Feedback from './universals/feedback';

const Header = styled.div`
    display: flex;
    align-items: center; /* Vertically center the items */
    padding: 0 1rem;
    
`;

const Background = styled.div`

    background-color: var(--violet);
    background-image: url("/img/landing/cta-bg.webp");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
       
    }
`;

const TitleWeSex = styled.div`
  font-size: 3.5rem;
  color: white;
  font-family: "Averia Libre", sans-serif;
  opacity: 1;
  margin-left: 4px;
  margin-top: 0px;
  margin-bottom: 0rem;
  text-align: right;

  @media(max-width: 540px){
    color: white;
    font-size: 3.5rem;
    margin-bottom:1.5rem;
  }
  @media(max-width: 540px){
    margin-right: 2rem;
  }
`;

const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 540px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 5.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
   
  
        font-weight: bold;
        
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        margin-right: 2rem;
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 0rem;
        padding-bottom: 1rem;

    }
`;


const Title2 = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
   
  
        font-weight: bold;
        
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        margin-right: 2rem;
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 1.5rem;
        padding-bottom: 1rem;

    }
`;

const SubTitle = styled.h2`
    margin-top: 1.8rem;
    margin-bottom: 0rem;
    font-size: 2.7rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    
    @media(max-width: 540px){
        font-size: 2.2rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
        
    }
`;


const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.4rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        text-align: justify;
        padding: 2rem;
    }
    @media(min-width: 540px){
        
    }
`;

const ContainerText2 = styled.div`
    background-color: var(--green);
    
    @media (max-width: 540px) {
        
  }
`;

const ContentTitle2 = styled.div`
    display: flex;
    flex-direction: row;
    

    @media(max-width: 540px) {
        flex-direction: row;
    }
`;

const Text2 = styled.p`
    margin-top: 2rem;
    font-family: "Averia Libre", sans-serif;
    // font-family: "Karla", sans-serif;
    font-size: 1.9rem;
    text-align: justify;
    color: white;
    padding-bottom: 2rem;
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
    
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        
        color: white; /* Set the text color to white */
    }
    
`;

const AppImage = styled.img`
    
    width: 3%;
    height: 80%;
    @media(max-width: 540px){
        margin-top: 1rem;
        margin-left: 0rem;
        margin-right: 0rem;
        width: 15%;
        height: 80%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const TextBombNormal = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: justify;

    span {
        font-size: 1.7rem;
        font-weight: bold;
        font-style: italic;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.4rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
        
    }
`;


//Questions

const AppImageDudasFrecuentes = styled.img`
    width: 5%;
    margin-left: 20px;
    margin-top: 0px;
    
    @media(max-width: 540px){
        width: 7%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const TitleQuestion = styled.h4`
    font-size: 1.5rem;
    font-family: "Karla", sans-serif;
    text-align: left;
    color: black;
    font-weight: bold;
    margin-top: 10px;
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1rem;
        font-size: 2rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;


const TextOverTitle = styled.h4`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
    text-align: left;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        margin-left: 1rem;
        
    }
`;

const AnswerQuestion = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;

const FullscreenCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;




const ReirseMas = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const toggle4 = () => setIsOpen4(!isOpen4);
    const router = useRouter();
    const [challengeName, setChallengeName] = useState("Reirse Más");

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    const [member1, setMember1] = useState(null);
    const [member2, setMember2] = useState(null);


    useEffect(() => {
        if (router.isReady){
            setMember1(router.query.members.split('-')[0]);
            setMember2(router.query.members.split('-')[1]);
          if (router.query.origin) {
            setIsOriginRoute(true);
            setOrigin(router.query.origin);
          }
        }
      }, [router.isReady, isOriginRoute]);
     
    
    
    
      return (
        <section>
            <FullscreenCanvas style={{ zIndex: showAnimation ? 1 : -1 }}>
        {/* Ship animation and PIXI canvas content here */}
      </FullscreenCanvas>
      {!showAnimation && (
            <Background>
              <Container>
                     <Header>
                        <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`}/>
                        <TitleWeSex>WeSex</TitleWeSex>
                        <Feedback challengeName={"Reír Más"}/>
                    </Header>
                    
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío</Title>
                            <SubTitle><span>Reír Más</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        {/* <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div> */}
                        <Text>Porque reír siempre es hermoso, el plan de hoy es ver una peli de comedia o show de stand up que les encante a ambos.</Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Aquí les dejamos algunas ideas.</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Son como niños.
                                                </li>
                                                <li>
                                                    Luciando mellera infantiloide especial de netflix.
                                                </li>
                                                <li>
                                                    Mi novia polly.
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle1} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Luego de verlas respondan estas 3 preguntas.</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen1}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    ¿Qué es lo que más te enamora del sentido del humor de tu compañero/a?
                                                </li>
                                                <li>
                                                    ¿Cuál es la cosa más divertida he tu compañero/a ha dicho o hecho?
                                                </li>
                                                <li>
                                                    ¿Qué cosas te enamoran de la forma en que se ríe tu compañero/a? Pueden ser cosas espirituales o sensoriales, como el sonido de su risa.
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                            Beneficios de reírse 😁. 
                            <br/>
                            Conectar con lo que nos hace felices es fundamental para cultivar relaciones sólidas y saludables. Aquí van algunas razones para animarles realizar este desafío:
                            <br/>
                            <br/>
                            
                            <ol>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Fortalece el vinculo:</strong></div> Compartir momentos de risa y alegría fortalece el vínculo emocional. Al enfocarse en lo que les hace reír juntos, se crea una conexión especial y se refuerza la complicidad.
                                </li>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Fomenta la comunicación:</strong></div> Reflexionar sobre lo que encuentran divertido en su compañero/a implica una comunicación honesta y profunda. Esto les ayuda a entender mejor sus personalidades y a fortalecer la empatía mutua.
                                </li>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Crea memorias compartidas:</strong></div> Al ver una película y luego discutir sobre lo que les divierte, están creando recuerdos compartidos. Estas experiencias fortalecen el apego emocional y proporcionan anécdotas para recordar en el futuro.
                                </li>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Alimenta la intimidad:</strong></div> Conectar a través del humor y la risa incrementa la intimidad emocional. Sentirse en comodidad compartiendo lo que encuentran gracioso o encantador en el otro puede generar un ambiente de confianza y cercanía.
                                </li>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Equilibra la relación:</strong></div> En ocasiones, la vida diaria puede estar llena de estrés y responsabilidades. Conectarse con lo que les hace felices, como el humor, les permite escapar de esas presiones.
                                </li>
                                <li>
                                    <div style={{textDecoration: "underline", justifyContent: "left"}}><strong>Promueve la positividad:</strong></div> Centrarse en lo positivo y lo que los hace reír puede influir en su estado de ánimo general. La risa y la alegría son contagiosas, y compartir momentos felices puede mejorar su bienestar emocional individual y en pareja.
                                </li>
                            </ol>

                            En resumen, conectar con lo que les hace felices, como su sentido del humor compartido, no solo les brinda momentos agradables, sino que también fortalece su relación de maneras significativas. Este desafío no solo es divertido, sino que les permite profundizar su comprensión mutua y cultivar una relación más sólida y satisfactoria.
                        </Text>
                        
                        
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>¡Disfruten fortaleciendo su conexión!</span>
                                <br/>
                                <br/>
                                <span>El equipo de WeSex</span>
                            </Text2>
                    </Row>
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafío !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}&prefill_Nombre+Desafio=${challengeName}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}&prefill_Nombre+Desafio=${challengeName}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default ReirseMas;