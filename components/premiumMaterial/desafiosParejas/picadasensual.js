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




const PicadaSensual = () => {
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
                        <Text>Objetivo: Fomentar la exploración sensual y la intimidad entre la pareja fuera de la cama.</Text>
                        <Text>
                        Materiales:
                        <br/>
                        <ul>
                            <li>
                            Vendaje para los ojos o pañuelo.
                            </li>
                            <li>
                            Alimentos simples:  Quesos, frutas, frutos secos, dulce de leche, chocolate, crema chantilly (con tener tres de estos elementos esta bien).
                            </li>
                        </ul>
                        </Text>
                        <Text>
                        <span>Instrucciones:</span>
                        El desafío de hoy va a constar de una serie de juegos para divertirse con la gastronomía e ir incrementando la temperatura, sumado a sugerencias de como explorar sexualmente la cocina 😉.
                        <br/>
                        La comida no es lo más importante, sino coquetearse en el proceso, que se miren, que se eroticen y calienten con la propuesta. Aunque esta combinación de placeres puede salir muy bien 👅.
                        <br/>
                        <br/>
                        Preparativos:
                        <ul>
                            <li>
                            Antes de comenzar el juego, deben preparar la cocina juntxs: encender velas, seleccionar música suave y preparar los ingredientes que vayan a utilizar
                            </li>
                            <li>
                            Elección de Roles: Cada miembro de la pareja deberá elegir un personaje para interpretar durante la noche. Por ejemplo, pueden ser un cocinerx y su asistente, un crítico gastronómico y un chef famoso, entre otros.
                            <br/>
                            Es importante que mantengan el personaje. Como si no se conocieran o como si fueran compañerxs de trabajo reales. Esto es clave para encender el fuego, ser otras personas por un rato para permitirse jugar.
                            </li>
                        </ul>
                        <br />
                        <br/>
                        Ahora si, ¡vamos a jugar!
                        </Text>
                        <Col xs="12" lg="12" md="12">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Preparación Ciega</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            Una persona (con los ojos vendados) deberá preparar una receta simple mientras la otra le da instrucciones habladas. Esta receta simple puede ser la preparación de una picada, de un postre, o lo que deseen.
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Cata a Ciegas</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen1}>
                                    <CardBody>
                                        <AnswerQuestion>
                                        Ahora, preparen pequeñas porciones de alimentos que deban ser identificados por el sabor mientras alguien usa un vendaje para los ojos. Pueden combinar diferentes ingredientes y alimentos para incrementar la dificultad. La persona que este a ciegas deberá adivinar que ingredientes contiene lo que está probando.
                                        <br/>
                                        <br/>
                                        <strong>Recompensas:</strong>
                                        <br/>
                                        Cada vez que la pareja acierte exitosamente puede otorgar recompensas. Por ejemplo: masajes, caricias o cualquier cosa que la pareja considere íntima y placentera. Es vital que después de cada desafío se premien con erotismo. Así su cerebro activa el círculo virtuoso del placer.
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
                                    <TitleQuestion style={{fontSize: "1.4rem"}}>Explorando la cocina</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                        Luego de calentarse en los juegos previos, llego el momento del postre. Los invitamos a calentar más aun la situación en la cocina. Para eso, les dejamos algunas ideas de cómo aprovechar el espacio 😉.
                                            <ul>
                                                <li>
                                                    <strong>Postre time:</strong> Una persona se sube a la mesada y disfruta del placer oral que le estará dando su pareja
                                                </li>
                                                <li>
                                                    <strong>Aprovechando los alimentos:</strong> Pueden untar dulce de leche o crema chantilly en los genitales de su pareja y luego disfrutar del postre (emoji de fuego)
                                                </li>
                                                <li>
                                                    <strong>Penetración contra la heladera:</strong> Parados contra la heladera y ambos mirando hacia ella. Es que van a estar tan calientes que con algo los tenemos que enfriar.
                                                </li>
                                                <li>
                                                    <strong>En el piso:</strong> Variar de vez en cuando es divertido, y ya que vamos a dejar la cama de lado…¿Porque no #acabar este desafío en el piso?
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>  
                    </Row>
                    <Text>
                    Notas Importantes:
                    <ul>
                        <li>
                        <strong>Comunicación:</strong> Es crucial establecer límites y mantener la comunicación abierta en todo momento. Si algo no se siente cómodo, detengan el juego de inmediato.
                        </li>
                        <li>
                        <strong>Seguridad:</strong> Tengan cuidado con superficies calientes, objetos afilados o cualquier elemento peligroso en la cocina.
                        </li>
                    </ul>

                    </Text>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Este juego no solo fomentará la conexión emocional y física, sino que también puede agregar una dosis de diversión y espontaneidad a la relación. ¡Recuerden que el objetivo principal es disfrutar y fortalecer su complicidad!</span>
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
 
export default PicadaSensual;