import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import santaUrl from '../../../public/img/rutina_bomba.png';
import Notificar from './universals/notificar';
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
    background-image: url("/img/landing/cta-bg.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // min-height: 72vh;
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
        font-size: 3rem;
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

const BotonRandom = styled.a`
    background-color: var(--green);
    color: white;
    border: none;
    border-radius: 10px; /* Make it rounded */
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
`;





const JuegoRoles = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const appRef = useRef(null); // Create a ref to hold the PIXI application

    const router = useRouter();

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    useEffect(() => {
        if (router.isReady){
          if (router.query.origin) {
            setIsOriginRoute(true);
            setOrigin(router.query.origin);
          }
        }
      }, [router.isReady, isOriginRoute]);

    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const chooseRandomName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setChosenName(names[randomIndex]);
      };

    useEffect(() => {
        let app = null;
      
        if (showAnimation) {
          app = new PIXI.Application({ background: '#5f32a2', resizeTo: window });
          document.body.appendChild(app.view);
          appRef.current = app; // Save the PIXI application to the ref

          
          const style = new PIXI.TextStyle({
            fontFamily: 'Arial Black',
            fontSize: 30,
            "fill": "#ffffff",
            "wordWrap": false,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            color: 'white'
            
          });
    
          const richText = new PIXI.Text('Cargando Desafio ...', style);
          richText.x = 50;
          richText.y = 220;
          richText.anchor.set(0.5);
          richText.x = app.screen.width / 2;
          richText.y = app.screen.height / 2 - 180;
          app.stage.addChild(richText);
      
          const container = new PIXI.Container();
          app.stage.addChild(container);
      
          // Create a new texture
          const texture = PIXI.Texture.from("../../img/frutilla.png");
      
          // Create a 5x5 grid of bunnies
          for (let i = 0; i < 1; i++) {
            const bunny = new PIXI.Sprite(texture);
            bunny.scale.x = 0.25;
            bunny.scale.y = 0.25;
      
            bunny.anchor.set(0.3);
            bunny.x = (i % 5) * 40;
            bunny.y = Math.floor(i / 5) * 40;
            container.addChild(bunny);
          }

      
          // Move container to the center
          container.x = app.screen.width / 2;
          container.y = app.screen.height / 2;
      
          // Center bunny sprite in local container coordinates
          container.pivot.x = container.width / 2;
          container.pivot.y = container.height / 2;
      
          // Listen for animate update
          app.ticker.add((delta) => {
            // rotate the container!
            // use delta to create frame-independent transform
            container.rotation -= 0.025 * delta;
          });
      
          setTimeout(() => {
            // Stop the animation and remove PIXI elements from the stage
            container.removeChildren();
            setShowAnimation(false);
          }, 4000);
        } else if (appRef.current) {
          appRef.current.view.style.display = 'none'; // If showAnimation is false, hide the PIXI canvas
        }
      
        return () => {
          if (appRef.current) {
            appRef.current.destroy({ children: true, texture: true, baseTexture: true });
            appRef.current = null;
          }
        };
      }, [showAnimation]);
      
      
    
    
    
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
                        <Feedback challengeName={"Juego de Roles"}/>
                    </Header>
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío</Title>
                            <SubTitle><span>Juego de Roles</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <Text>
                        Para el desafío de este fin de semana, los vamos a invitar a jugar y divertirse ;)
                        <br/>
                        <br/>
                        Queremos que saquen a la luz su actor interior y se animen a un juego de roles.
                        <br/>
                        <br/>
                        Abajo les dejaremos un guion para que puedan utilizar como base en el juego de roles.

                        <Text style={{marginBottom: "0px"}}>
                            Presiona el botón antes de leer las instrucciones.
                            <br />
                            <br />
                            <BotonRandom onClick={chooseRandomName}>¿Quién comienza?</BotonRandom>
                            <br/>
                            <br/>
                            {chosenName && <div>Comienza: {chosenName}</div>}
                        </Text>

                        <span>En este desafío, quien elegirá la fantasía será {chosenName}.</span> Es tu turno de decidir cuál te gustaría 
                        llevar a cabo. ¿Serás vos el que se disfrace, los dos o será tu pareja? ¿Te gustaría que se disfrace de abogado, 
                        profesor, médico? Hoy, elegís y propones vos. Tu pareja podrá evaluar si se siente cómodo con esa fantasía y, 
                        en caso de que no la acepte, podrás pensar en otra, hasta que lleguen a una con la que ambos se sientan cómodos. 
                        Siempre mantenemos el consentimiento y la comunicación como base para todos los desafíos.
                        <br/>
                        <br/>
                        ¡Que se disfruten!
                        </Text>
                        {/* <Col xs="12" lg="6" md="3">
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
                        </Col> */}

                        
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <ContentTitle2>
                                <Title2>GUIÓN BASE PARA JUEGO DE ROLES</Title2>
                                <AppImage src="../../img/bomb.png" alt="Bomba" />
                            </ContentTitle2>
                        
                            <Text2>
                                <span>1. Escenario:</span> En un lugar de _______ (puede ser una oficina, un bar, una biblioteca, un consultorio, etc.)
                                <br/>
                                <br/>
                                <span>2. Entrada:</span> _______ (nombre/personaje, por ejemplo: Juan/el jefe, María/la secretaria, etc.) entra por la puerta y observa detenidamente a su alrededor. Se percata de la presencia de _______ (otro nombre/personaje).
                                <br/>
                                <br/>
                                <span>3. Interacción:</span>
                                <br/>
                                _______ (primer nombre/personaje) se acerca y dice: &quot;_______ (frase inicial, como &quot;Hace tiempo que no nos veíamos&quot;, &quot;Escuché que necesitas mi ayuda&quot;, &quot;Me dijeron que estarías aquí&quot;, etc.)&quot;.
                                <br/>
                                _______ (segundo nombre/personaje) levanta la vista y responde: &quot;_______ (respuesta inicial, como &quot;No esperaba verte aquí&quot;, &quot;Si, tengo un problema y tú eres la única persona que puede ayudarme&quot;, &quot;¿Y qué te trae por aquí?&quot;, etc.)&quot;.
                                <br/>
                                <br/>
                                <span>4. Desarrollo:</span>
                                <br/>
                                _______ (primer nombre/personaje) sonríe/parece sorprendido/se muestra curioso y pregunta: &quot;_______ (pregunta o comentario que puede dar pie a una conversación más amplia o a la acción siguiente, como &quot;¿Qué ha cambiado desde la última vez?&quot;, &quot;Siempre supe que este día llegaría&quot;, &quot;¿Por qué crees que yo soy la solución?&quot;, etc.)&quot;.
                                <br/>
                                _______ (segundo nombre/personaje) toma un respiro/se muestra nervioso/sonríe coquetamente y comenta: &quot;_______ (respuesta o comentario que genera tensión o interés, como &quot;Hay cosas que deberías saber&quot;, &quot;No es tan simple como parece&quot;, &quot;Había esperado este momento durante mucho tiempo&quot;, etc.)&quot;.
                                <br/>
                                <br/>
                                <span>5. Transición:</span> A partir de este punto, la conversación o las acciones pueden seguir de forma libre, permitiendo que la imaginación y la dinámica de la pareja decidan el rumbo de la historia. Que se diviertan ;) 
                                {/* <TextBombNormal>Este juego consiste en poner un temporizador, una cuenta regresiva, en la cual no podrán realizar penetración hasta que 
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
                                ¡Que se disfruten! */}
                            </Text2>
                    </Row>
            </Container>
            <Notificar message='¡ Notificar que finalizamos el desafio !' url={`https://forms.gle/7m8XF5djWVhLvsy57`}/>
            </Background>
          )}
        </section>
      );
}
 
export default JuegoRoles;