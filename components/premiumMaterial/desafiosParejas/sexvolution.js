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




const Sexvolution = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const router = useRouter();

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
                        <Feedback challengeName={"Hablemos de Sexo"}/>
                    </Header>
                    
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío</Title>
                            <SubTitle><span>Sexvolution</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div>
                        <Text>
                        Materiales:
                        <br/>
                        <ul>
                            <li>
                            Papel grande o cartulina.
                            </li>
                            <li>
                            Lápices de colores.
                            </li>
                            <li>
                            Reloj o temporizador.
                            </li>
                        </ul>
                        <br/>
                        Les invitamos a explorar la evolución de su relación a lo largo del tiempo.
                        <br/>
                        <br/>
                        Las relaciones son dinámicas, cambiantes *y* democráticas.
                        <br/>
                        <br/>
                        Para pasar del amor romántico y pasional (cóctel de hormonas cerebral que dura entre 6 meses a 3 años) al amor maduro sin caducidad, es importante darse espacio para analizar sus objetivos vinculares y reflexionar sobre ellos de manera constante.
                        <br/>
                        <br/>
                        Ser amadxs, cuidadxs, sexuadxs es lo que las personas buscamos, por eso hoy investigaremos cómo comenzamos, y dónde estamos hoy.
                        </Text>
                        <Text>
                        <span>Instrucciones:</span>
                        <ul>
                            <li>
                                Hoy van a analizar su relación desde el principio hasta ahora, dividiendo todo su recorrido en tres etapas: PRINCIPIO, MITAD Y ACTUALIDAD.
                            </li>
                            <li>
                                En cada etapa, van a pensar y escribir que porcentaje de atención han dedicado a cada area: Amor - Cuidados - Sexo.
                            </li>
                            <li>
                                Les iremos guiando con preguntas en cada etapa. Comencemos:
                            </li>
                        </ul>
                        </Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Principio</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Dediquen un tiempo a recordar cómo era su relación al principio. Les dejamos algunas preguntas de guía:
                                                    <ul>
                                                        <li>
                                                            ¿Cómo se conocieron?
                                                        </li>
                                                        <li>
                                                            ¿Qué era importante para ambxs en ese momento en términos de amor, cuidados y sexo?
                                                        </li>
                                                        <li>
                                                            Anoten en una sección del papel qué porcentaje aproximado le asignarían a cada aspecto en esa etapa. Pueden armar un gráfico de torta como en este ejemplo:
                                                            <img src='/img/premium-material/graphic.png' />
                                                        </li>
                                                    </ul>
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Mitad: Evolución y cambios</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen1}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Luego, pasen a la etapa media y a la actual de la relación. ¿Cómo han cambiado las prioridades en términos de amor, cuidados y sexo?
                                                </li>
                                                <li>
                                                    Dibujen un segundo y tercer gráfico de torta que represente el porcentaje que asignarían a cada aspecto de la relación en la mitad de su vínculo y en la actualidad.
                                                </li>
                                            </ul>
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Actualidad: Puesta en común</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Una vez que hayan completado sus gráficos, compartan sus dibujos y analizen las diferencias entre ambos momentos.
                                                </li>
                                                <li>
                                                    Reflexionen sobre cómo han evolucionado en equipo, qué ha cambiado y por qué creen que esos cambios han ocurrido.
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>  
                    </Row>
                    <Text>
                    Consejos:
                    <ul>
                        <li>
                            Pueden anotar al lado de cada gráfico recuerdos o momentos claves que sostengan esos porcentajes.
                        </li>
                        <li>
                            Es importante durante todo el proceso animarse a la sinceridad y a la reflexión.
                        </li>
                        <li>
                            No se trata de juzgar, sino de comprender cómo han cambiado las prioridades y la dinámica en su relación.
                        </li>
                    </ul>

                    </Text>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Al final, es una oportunidad para celebrar el crecimiento y comprender mejor el viaje que han tenido juntxs.</span>
                                <br/>
                                <br/>
                                <span>¡Que se disfruten!</span>
                                <br/>
                                <br/>
                                <span>El equipo de WeSex</span>
                            </Text2>
                    </Row>
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafio !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagWSlKzdrClST31G/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagWSlKzdrClST31G/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default Sexvolution;