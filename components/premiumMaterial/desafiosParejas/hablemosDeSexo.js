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




const HablemosDeSexo = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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
                            <SubTitle><span>Hablemos de sexo</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <div style={{color: "white", paddingTop: "1rem", fontFamily: "Karla"}}>Este desafío fue creado por la <a style={{textDecoration: "underline"}}href="https://www.instagram.com/docbarbaragarcia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">Dra y Sexóloga Bárbara García.</a></div>

                        <Text>
                        Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación. Por eso para este sábado los vamos a invitar a salir de cita y a charlar de sexo. Porque darse espacios para salir de cita en pareja es fundamental. 
                        <br/>
                        <br/>
                        Nuestra única duda es si van a aguantar la calentura de hablar de sexo en el bar toda la noche.
                        <br/>
                        <br/>
                        <span>Paso 1: Vístanse para una cita y salgan. ¿A dónde? A donde quieran. Les proponemos algún bar de la zona que les guste y tenga onda. Tal vez alguno que les traiga buenos recuerdos, que les divierta. También puede ser un café, una plaza o el lugar que deseen.</span>
                        <br/>
                        <br/>
                        <span>Paso 2: Una vez lleguen al lugar elegido para la cita, el siguiente paso es jugar a un ping-pong de preguntas que les dejamos aquí abajo, creado por la Sexologa y Dra. Barbara García.</span>
                        <br/>
                        <br/>
                        Tips PingPong sex: Dense tiempo para charlar. Dejen que la conversación fluya a donde tenga que ir, y siempre tendrán el listado de preguntas para volver a la siguiente.
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Presiona aquí para ver las preguntas</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            1. ¿Luz prendida o apagada?
                                            <br/>
                                            2. ¿Besos en los testículos o en la cabeza del pene?
                                            <br/>
                                            3. ¿Depilación al 100%, bigotito o salvaje?
                                            <br/>
                                            4. Si no es adentro, ¿dónde te gusta más la eyaculación? Diga tres opciones.
                                            <br/>
                                            5. ¿Qué parte de TU cuerpo te gusta más?
                                            <br/>
                                            6. Lugares en casa (que no sea la cama) para hacerlo que te exciten. Diga tres.
                                            <br/>
                                            7. ¿Algún tema o banda en especial que te estimule más en las relaciones sexuales? Diga dos.
                                            <br/>
                                            8. ¿Qué material te excita más? Algodón, seda, cuero, encaje u otros.
                                            <br/>
                                            9. Menciona al menos dos frases al oído que te exciten.
                                            <br/>
                                            10. ¿Fantaseando... trío o swinger?
                                            <br/>
                                            11. ¿Mañanero, siestero o nochero?
                                            <br/>
                                            12. ¿Cuántas veces te autoestimulas a la semana?
                                            <br/>
                                            13. ¿Estimulantes/lubricantes: qué prefieres, efecto frío o calor?
                                            <br/>
                                            14. Del 1 al 10, ¿cuál es la importancia de las relaciones sexuales en tu vínculo?
                                            <br/>
                                            15. ¿Qué zona te gusta más estimular a tu pareja? Diga tres.
                                            <br/>
                                            16. ¿Qué zona te gusta más que te estimulen? Diga tres.
                                            <br/>
                                            17. ¿Prefieres sexo oral o que te masturben?
                                            <br/>
                                            18. ¿Qué posiciones te excitan más?
                                            <br/>
                                            19. ¿Qué parte del cuerpo de tu pareja te pone más 🔥?
                                            <br/>
                                            20. ¿De qué te disfrazarías o personificarías para excitar a tu pareja? Diga dos.
                                            <br/>
                                            21. ¿Cuál sería tu frecuencia sexual semanal óptima?
                                            <br/>
                                            22. ¿Qué te gustaría más hacerle a tu pareja, vendarle los ojos o atarle las manos?
                                            <br/>
                                            23. ¿Qué te gustaría más que te hagan de la pregunta anterior?
                                            <br/>
                                            24. ¿En silencio o a gritos?
                                            <br/>
                                            25. Elige de la vitrina de un sex shop un juguete para ambos... ¿Cuál sería?
                                            <br/>
                                            26. ¿Una fantasía sexual recurrente?
                                            <br/>
                                            27. ¿Si pudieses hacer cualquier cosa, qué te gustaría hacer con tu pareja ahora mismo?
                                            <br/>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>

                        
                    </Row>
                    {/* <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <ContentTitle2>
                                <Title2>BONUS</Title2>
                                <AppImage src="../../img/bomb.png" alt="Bomba" />
                            </ContentTitle2>
                        
                            <Text2>
                                Por si la manija de este primer día los deja con ganas de más, les dejamos una propuesta para cuando se vayan del bar 😉 (O para cuando quieran):
                                <br/>
                                <br/>
                                <span>La bomba del tiempo</span>
                                <br/>
                                <TextBombNormal>Este juego consiste en poner un temporizador, una cuenta regresiva, en la cual no podrán realizar penetración hasta que 
                                la cuenta regresiva llegue a 0. Esto les ayudará a explorar otras prácticas y salir de la penetración. 
                                Podrán explorar zonas erógenas, descubrir áreas de placer inesperadas y, además, aumentar la tensión y la excitación al jugar con el tiempo hasta llegar a 0.
                                </TextBombNormal>
                                <TextBombNormal style={{marginTop: "2rem", marginBottom:"2rem"}}><span>Claro, para eso les enviamos la guía de zonas erógenas. Ahí explicamos qué es el coitocentrismo y les enseñamos a 
                                estimular cada zona del cuerpo. Así que no les van a faltar herramientas para disfrutar de este juego</span>
                                </TextBombNormal>
                                
                                ¿Y AHORA? 
                                <br/>
                                
                                Cuando estén listos para empezar, pongan un temporizador de 30 minutos. Pueden jugar también a sostener la tensión, 
                                sin llegar al orgasmo durante esos 30 minutos. Eso va a requerir mucha comunicación (ya sea verbal o corporal) para ir regulando cuándo seguir y cuándo frenar. 
                                ¿Aguantarán la tensión sexual hasta que el cronómetro llegue a 0...?
                                <br/>
                                <br/>
                                ¡Que se disfruten!
                            </Text2>
                    </Row> */}
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafio !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagUFVhlMDky8SsbH/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagUFVhlMDky8SsbH/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default HablemosDeSexo;