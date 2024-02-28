import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import santaUrl from '../../../public/img/rutina_bomba.png';
import Notificar2 from './universals/notificar2';
import ArrowBack from './universals/arrowBack';
import { useRouter } from 'next/router';
import Feedback from './universals/feedback';
import { Boton } from '../../codeInputModal/components/codeInputModalStyles';


const Header = styled.div`
    display: flex;
    align-items: center; /* Vertically center the items */
    padding: 0 1rem;
    
`;

const Video = styled.div`
    position: relative; 
    padding-top: 5rem;
    padding-left: 2rem;
    height: 0;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    @media(max-width: 540px){
        padding-top: 6rem;
        padding-left: 0rem;
    }
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


const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 13px;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
    justify-content: center;
    text-align: center;
`;



const NuestroReflejo = () => {
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
    const [challengeName, setChallengeName] = useState("Ping Pong Acuerdos");

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    const [member1, setMember1] = useState(null);
    const [member2, setMember2] = useState(null);


    // useEffect(() => {
    //     if (router.isReady){
    //         setMember1(router.query.members.split('-')[0]);
    //         setMember2(router.query.members.split('-')[1]);
    //       if (router.query.origin) {
    //         setIsOriginRoute(true);
    //         setOrigin(router.query.origin);
    //       }
    //     }
    //   }, [router.isReady, isOriginRoute]);
     
    
    
    
      return (
        <section>
            <FullscreenCanvas style={{ zIndex: showAnimation ? 1 : -1 }}>
        {/* Ship animation and PIXI canvas content here */}
      </FullscreenCanvas>
      {!showAnimation && (
            <Background>
              <Container>
                     <Header>
                        {/* <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`}/> */}
                        <TitleWeSex>WeSex</TitleWeSex>
                        <Feedback challengeName={"NuestroReflejoUniversal"}/>
                    </Header>
                    
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío</Title>
                            <SubTitle><span>Neuronas Espejo</span></SubTitle>
                            {/* <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div> */}
                        </ContentTitle>
                        <Video>
                            <iframe src="https://jumpshare.com/embed/0J0cjOWhnbxGbhP8dHqR" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                        </Video>
                     
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        {/* <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div> */}
                        <Text>
                            ¿Sabían que la mayoría de las parejas no dedican más de 5 minutos a acariciar el cuerpo antes de tocar la genitalidad en sus encuentros sexuales?
                        </Text>
                        <Text>
                            Para lograr orgasmos más intensos, en este desafío van a tener un momento erótico frente al espejo. Vamos por pasos, recuerden que lo esencial es la conexión visual:
                            <br/>
                            <br/>
                            Materiales:
                            <ul>
                                <li>
                                    El espejo, idealmente de cuerpo entero, funciona también con espejos más pequeños, como los del baño.
                                </li>
                                <li>
                                    Velas (opcional).
                                </li>
                                <li>
                                    Música chill.
                                </li>

                            </ul>
                        </Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle1} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Paso 1</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen1}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            Se van a ir acariciando mientras se miran en el espejo, sin juzgar sus corporalidades, sólo conectando con el erotismo. Idealmente, tómense 5 minutos, hagan todo en cámara lenta. Díganse qué cosas les excitan del otro, desde su vestimenta, hasta formas de moverse, partes del cuerpo, gestos y más.
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Paso 2</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            Dediquen tiempo a desvestir completamente a su pareja. Aquí les sugerimos que lo hagan de forma delicada, nada de volar prendas. Miren las mismas, toquen las telas suavemente, miren todo el tiempo que puedan esas secuencias en el espejo. Verán como en un momento sentirán que hay más de 2 en esa habitación. El cerebro se enciende porque está acostumbrado a pasar esta parte casi en automático.
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>  
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle3} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Paso 3</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen3}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            Luego la parte más divertida, acariciar toda la piel desnuda. Por 10 minutos más recorran todo el cuerpo. Les invitamos a que cada milímetro sea acariciado, desde los pies hasta el cuero cabelludo. Aquí lo más importante es conectar las miradas en el espejo y luego en el plano cara a cara.
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Este desafío es para estimular todas las zonas del cerebro y todas las áreas de tu cuerpo. Jugaremos con el sentido de la vista y las neuronas espejo.</span>
                                <br/>
                                <br/>
                                <span>El equipo de WeSex</span>
                            </Text2>
                    </Row>
            </Container>
            <BotonNotificarDone> ¡Notificar que terminamos el desafío! </BotonNotificarDone>
            {/* <Notificar2 message='¡ Notificar que finalizamos el desafío !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}&prefill_Nombre+Desafio=${challengeName}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}&prefill_Nombre+Desafio=${challengeName}`}/> */}
            </Background>
          )}
        </section>
      );
}
 
export default NuestroReflejo;