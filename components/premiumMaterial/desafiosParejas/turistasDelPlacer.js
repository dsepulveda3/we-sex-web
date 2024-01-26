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




const TuristasDelPlacer = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const router = useRouter();
    const [challengeName, setChallengeName] = useState("Turistas del placer");

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
                        <Feedback challengeName={"Turistas Del Placer"}/>
                    </Header>
                    
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío</Title>
                            <SubTitle><span>Turistas Del Placer</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div>
                        <Text>
                            ¡Bienvenidxs a la exploración del erotismo! 
                            Este desafío está diseñado para parejas que desean sumergirse en el fascinante mundo de los sex shops/tiendas eróticas, ya sea en persona o a través de experiencias virtuales. 
                            El reto es coquetear y explorar juntxs de una manera cómoda y natural, incorporando juguetes sexuales sin tabúes. Verlos como herramientas es algo clave, son aliados para el goce, sin reemplazar las capacidades eróticas de las personas.
                            Su uso está cada vez más naturalizado porque ayuda a los vínculos a sumar experiencias sensoriales.
                        </Text>
                        <Text>
                        <span>Instrucciones:</span>
                        <ul>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Coqueteo Exploratorio:</strong> Comiencen hablando sobre sus fantasías y deseos sexuales. Jueguen con insinuaciones, mensajes seductores o miradas sugerentes que expresen su interés en explorar juntxs.
                            </li>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Visita al Sex Shop:</strong> Ya sea presencial o virtual, planeen una visita a un sex shop. Si optan por la experiencia virtual, naveguen por una tienda en línea especializada en juguetes sexuales. Recomendamos <a href="https://www.savagesexshop.com.ar/" target="_blank" style={{textDecoration: "underline"}}>https://www.savagesexshop.com.ar/</a> 
                            <br/>
                            <strong style={{textDecoration: "underline"}}>Exploración del Glosario:</strong> Juntxs, exploren el glosario de juguetes sexuales. Hagan del descubrimiento una actividad divertida y cómplice. Conozcan los diferentes dispositivos, desde los más simples hasta los más avanzados.
                            </li>
                        </ul>
                        </Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Les dejamos una ayuda de palabras que quizás no conozcan</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    <strong>PLUG anal:</strong> Dispositivos para dilatación anal progresiva, vienen de diversos tamaños, formas y colores. Siempre estos tienen una traba de seguridad para que no ingresen en el ano; esto es clave porque las contracciones involuntarias del mismo generan que el dispositivo ingrese en ano haciendo difícil su extracción. Estas trabas de seguridad suelen tener formas como de diamante, corazones, cola de zorris etc.
                                                </li>
                                                <li>
                                                    <strong>BDSM:</strong> Prácticas que incluyen el juego de roles, la dominación y sumisión, que siempre vienen acompañados de comunicación, consenso y consentimiento. Acá se usan elementos como vendas, antifaces, látigos, cuerdas, esposas y mucho más.
                                                </li>
                                                <li>
                                                    <strong>Succionadores:</strong> Dispositivos que estimulan cualquier parte del cuerpo (pezones, clítoris, pene, testículos) con unas ondas suaves de presión positiva y ondas de presión negativas más intensas. Los hay con o sin vibración y con o sin penetración.
                                                </li>
                                               <li>
                                                    <strong>Dildos/alegradores antes llamados consoladores:</strong> Dispositivos con forma fálica para penetrar vaginalmente, con o sin vibración.
                                               </li>
                                               <li>
                                                    <strong>Anillos:</strong> Dispositivos para colocar en la base del pene para mejorar erección y tiempos eyaculatorios, pueden ser simples gomitas de diversos colores o pueden ser más sofisticados con motor que genera vibraciones.
                                               </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                    <Text>
                        <span>Llevémoslo a la práctica ¡A los bifes!</span>
                        <br/>
                        <br/>
                        <ol>
                            <li>
                                <strong style={{textDecoration: "underline"}}>Desafío del Juguetito:</strong> Elijan un juguete o dispositivo que les intrigue mutuamente. Puede ser un plug anal, u otro elemento del glosario que les llame la atención.
                            </li>
                            <li>
                                <strong style={{textDecoration: "underline"}}>Diálogo Abierto y Natural:</strong> Hablen sobre sus sensaciones y emociones al considerar incorporar este juguete en su intimidad. Destaquen la normalidad y naturalidad de experimentar con estos elementos para potenciar su placer mutuo.
                            </li>
                            <li>
                                <strong style={{textDecoration: "underline"}}>Experimentación Gradual:</strong> Si están cómodxs, y lo adquirieron experimenten gradualmente con el juguete seleccionado. Respeten los límites y disfruten explorando nuevas sensaciones.
                            </li>
                            <li>
                                <strong style={{textDecoration: "underline"}}>Comunicación Continua:</strong> Mantengan abiertas las líneas de comunicación durante y después de la experiencia: Compartan lo que les gustó, lo que les sorprendió y cómo podría enriquecer su vida sexual en el futuro.
                            </li>
                        </ol>

                    </Text>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Este desafío está diseñado para ser una aventura emocionante que fortalezca la conexión y la confianza en la relación mientras exploran nuevas facetas del placer sexual.</span>
                                <br/>
                                <br/>
                                <span> ¡Que se diviertan descubriendo!</span>
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
 
export default TuristasDelPlacer;