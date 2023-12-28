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




const ConfianzaPareja = () => {
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
                            <SubTitle><span>Confianza en la pareja</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Duración 1 hr.</div>
                        <Text>¿Cómo profundizarla? Poder decir lo que nos pasa sin sentirnos en el banco de acusadxs en un juicio, es de vital importancia.</Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Tip para una correcta comunicación a la hora de expresarte con tu pareja </TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Cuando surgen momentos en los que sientan inseguridad o incomodidad, prefieran abordarlos juntos para fortalecer su confianza.
                                                </li>
                                                <li>
                                                    La idea es expresar sus sentimientos y necesidades en un tono amable y constructivo, proponiendo soluciones que podrían generar confianza y seguridad en la relación.
                                                </li>
                                                <li>
                                                    Ejemplo generalizado de una buena manera de comunicar: “En situaciones similares a X, me sentiría mucho más cómodo/a si pudiéramos hacer que sucediera Y.”
                                                </li>
                                                <li>
                                                    Ejemplo detallado de una buena manera de comunicar: “Cuando desapareces por un par de días, me sería de gran ayuda recibir algún mensaje tuyo para saber cómo estás o simplemente para decirme que estás ocupado/a con el trabajo. Respeto tu espacio, pero saber que estás bien sería reconfortante para mí y fortalecería nuestra conexión.”
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                            Ahora, al desafío 😁. 
                            <br/>
                            Recuerden usar los tips a la hora de expresar propuestas de mejora.
                            <br/>
                            <br/>
                            <span>Preguntas guiadas para profundizar, comunicar y mejorar la confianza.</span>
                            <br/>
                            <br/>
                            <div style={{fontStyle: "italic", textAlign: "left"}}>Instrucciones</div>
                            <ol>
                                <li>
                                    Espacio: Encuentren un espacio cómodo, libre de distracciones, donde puedan conversar con tranquilidad y sin interrupciones. Si es posible, estar sentados en el suelo les ayudará a relajarse y estar a la misma altura.
                                </li>
                                <li>
                                    Materiales: Un temporizador o cronómetro.
                                </li>
                                <li>
                                Reglas:
                                    <ul>
                                        <li>
                                            La duración total será de 40 minutos.
                                        </li>
                                        <li>
                                            Habrá 4 secciones de preguntas, cada una durará 10 minutos.
                                        </li>
                                        <li>
                                            Por cada sección cada uno preguntará 5 minutos, y el otro responderá.
                                        </li>
                                        <li>
                                            Se debe responder con honestidad y empatía.
                                        </li>
                                    </ul>
                                </li>
                            </ol>

                            Recuerden que generar acuerdos es clave. ¡Ahora enciendan su temporizador y vamos por ellos!
                        </Text>
                        <Text>
                        <div style={{fontStyle: "italic", textAlign: "left"}}>Preguntas</div>
                        </Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle1} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Ronda 1 - Preguntas de Conocimiento</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen1}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    ¿Qué fue lo que más te atrajo de mí cuando nos conocimos?
                                                </li>
                                                <li>
                                                    ¿Cuál es tu recuerdo favorito de nuestra relación?
                                                </li>
                                                <li>
                                                    ¿Hay algo en mi comportamiento que te haya desconcertado o te gustaría entender mejor?
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Ronda 2 - Preguntas de Emociones</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    ¿Cuándo te sientes más cercano/a a mí?
                                                </li>
                                                <li>
                                                    ¿Hay algo que te preocupe o te genere ansiedad en nuestra relación? Qué cosas podríamos hacer para modificar esas sensaciones?
                                                </li>
                                                <li>
                                                    ¿Qué puedo hacer para apoyarte mejor en momentos difíciles?
                                                </li>
                                            </ul>
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Ronda 3 - Preguntas de Sueños y Metas</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen3}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    ¿Qué objetivos personales te gustaría alcanzar en los próximos años?
                                                </li>
                                                <li>
                                                    ¿Cómo ves nuestra relación en el futuro?
                                                </li>
                                                <li>
                                                    ¿Hay algo que siempre hayas querido hacer juntos y aún no hayamos intentado?
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle4} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Ronda 4 - Preguntas de Apreciación y Mejora</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen4}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    ¿Qué es lo que más valoras de nuestra comunicación?
                                                </li>
                                                <li>
                                                    ¿Hay algo que sientas que necesitamos mejorar en nuestra relación?
                                                </li>
                                                <li>
                                                    ¿Cómo podemos fortalecer nuestra confianza y conexión?
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>  
                    </Row>
                    <Text>
                    Ejercicio complementario
                    <ul>
                        <li>
                            Pueden hacer un listado en el papel de las prácticas/actividades o actitudes que les den desconfianza de su pareja. O que hacen que no se sientan cómodxs previo a hacer el ejercicio para ir con el análisis a fondo.
                        </li>
                        <li>
                            Recuerden poner al lado de la situación cuál sería la forma de actuar ideal o que pudiera mejorar la otra persona para trabajar la desconfianza en esa situación.
                        </li>
                        <li>
                            Atención: Sin limitar las actividades de la pareja, sino moldeando o sumando cosas que el otro puede hacer para que vos te sientes más cómodo/a/e.
                        </li>
                    </ul>

                    </Text>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Recuerden que el objetivo es crear un espacio seguro y de apertura. Escuchar con empatía y sin juzgar es crucial. Si alguna pregunta genera incomodidad, tienen la libertad de cambiarla por otra que fomente la confianza y el entendimiento mutuo. </span>
                                <br/>
                                <br/>
                                <span>¡Disfruten fortaleciendo su conexión!</span>
                                <br/>
                                <br/>
                                <span>El equipo de WeSex</span>
                            </Text2>
                    </Row>
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafio !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagtcxqE0vYIvyNfX/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagtcxqE0vYIvyNfX/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default ConfianzaPareja;