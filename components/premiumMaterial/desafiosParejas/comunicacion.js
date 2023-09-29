import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import santaUrl from '../../../public/img/rutina_bomba.png';


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
        font-size: 1.5rem;
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




const Comunicacion = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const appRef = useRef(null); // Create a ref to hold the PIXI application

    const chooseRandomName = () =>{
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
                    <TitleWeSex>WeSex</TitleWeSex>
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>Comunicación</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                        <Text>
                            Les proponemos que puedan ir a un lugar neutral, como a un bar, café, o plaza, y retomar la discusión desde una nueva perspectiva. Para ello es importante previamente que cada uno pueda repensar cuál es la responsabilidad que tuvo en la generación del conflicto y arme un listado escrito.
                            <br />
                            <br />
                            <ul>
                                                <li>
                                                    ❓ ¿Qué hice yo para generar el conflicto?
                                                </li>
                                                <li>
                                                    🤭 ¿Cuáles fueron mis formas o actitudes no verbales que pudieron resultar agresivas?
                                                </li>
                                                <li>
                                                    💡 ¿Qué podría haber hecho de forma diferente?
                                                </li>
                                                <li>
                                                    ⏱️ ¿Cuándo podría haber frenado y no lo hice?
                                                </li>
                                                <li>
                                                    🌟 ¿Qué podría mejorar?
                                                </li>
                                                <li>
                                                    🤐 ¿Qué hubiera evitado decir?
                                                </li>
                                            </ul>
                        <br />
                        De esta manera generamos un intercambio en el que cada uno puede compartir su listado, y en vez de acusar, escuchamos.
                        <br />
                        Luego de compartir su listado de preguntas mutuamente, pueden fluir en la conversación en caso de que crean que haga falta retomar el tema de conversación con mayor tranquilidad y apertura. 
                            
                        </Text>
                        {/* <Text>
                        <span>Para resumir, el desafío de esta semana consta de : </span>
                                <br/>
                                <br/>
                                
                                <ol>
                                    <li>
                                       <span>Cada uno armara el listado escrito de las 6 preguntas del principio. </span>
                                    </li>
                                    <li>
                                        <span>Se juntaran en un espacio tranquilo y que les guste a compartir lo que escribieron.</span>
                                    </li>
                                    <li>
                                        <span>Seguirán los tips para continuar con una comunicación más sana y asertiva. </span>
                                    </li>
                                </ol>
                        </Text> */}
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"0px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Van algunos extra tips para abordar conversaciones incómodas en pareja</TitleQuestion>
                                </div>
                                <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ol>
                                                <li>
                                                    Elijan un espacio seguro donde ambos se sientan a gusto para abrir un canal de comunicación.
                                                </li>
                                                <li>
                                                    Aborden un sólo tema a la vez.
                                                </li>
                                                <li>
                                                    Sean honestos y comiencen el mensaje hablado de forma autorreferencial, por ejemplo:  &quot;Yo siento que…  me gustaría que… &quot;. De esta manera logramos ser claros y directos. Traten de evitar hablar del otro, ya que puede ser un modo de crítica o un modo de justificar lo que nos pasa. 
                                                    <br />
                                                    Cuando logramos esto se genera mayor apertura en la comunicación y baja el nivel de defensa, que muchas veces se activa si nos sentimos atacados o criticados.
                                                </li>
                                                <li>
                                                    Intenten no minimizar o invalidar los sentimientos de la otra persona, pues ambos son igual de valiosos. Permitan expresarse. 
                                                </li>
                                                <li>
                                                    Traten de parafrasear lo que han entendido, así no habrá malentendidos. 
                                                </li>
                                                <li>
                                                    Intenten formular preguntas abiertas, ya que permiten conocer las inquietudes, necesidades y deseos mutuos. Aumentar la curiosidad es la clave: ¿Qué me quiere decir?, ¿desde qué perspectiva lo está pensando?, ¿cómo lo siente?. 
                                                    <br />
                                                    Escuchen y respondan de manera respetuosa.
                                                </li>
                                                <li>
                                                    Intenten llegar a un acuerdo con empatía y comprensión, entendiendo que ambas posturas pueden ser válidas. A veces necesitamos ceder un poco de cada lado para acercarnos y priorizar el vínculo y el amor.
                                                </li>
                                            </ol>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                        Cuando comiences a aplicar estas herramientas vas a comprobar cómo mejoran tus vínculos. 
                        <br />
                        <br />
                        ¿Se quedaron con ganas de saber un poco más?
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Les compartimos algunos tips para aplicar la comunicación asertiva</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Lo más importante es la escucha activa, la atención y el interés genuino por entender lo que le pasa a tu pareja. Escuchar suena fácil pero es una tarea muy complicada, ya que cuando estamos escuchando, la mente empieza a generar argumentos para defendernos, o vienen pensamientos de juicio y emociones incómodas. Entonces, no escuchamos genuinamente y no logramos empatizar con la emoción de la otra persona. Te proponemos que intentes prestar atención a tu forma de escuchar y vuelvas a la conversación cada vez que registres que te fuiste a tu cabeza. 
                                                </li>
                                                <li>
                                                    El lenguaje no verbal también comunica y nos predispone a un tipo de escucha.  Por ejemplo, es importante que el cuerpo esté frente a frente, haciendo contacto visual y sin cruzar las manos. Esto marca una posición corporal de apertura y disponibilidad. 
                                                </li>
                                                <li>
                                                    Ten en cuenta que lo que haces puede afectar al otro y viceversa, entonces intenta cuidar tus acciones y palabras. Por ejemplo, cuando estamos enojados decimos y hacemos cosas que pueden lastimar a los demás. Ten en cuenta y reflexiona si lo que vas a decir, es para mejorar o sólo empeorará la situación y la comunicación.
                                                </li>
                                                <li>
                                                    Al inicio de cualquier conversación incómoda, pregúntate, ¿qué es lo que buscas? ¿buscas comunicación asertiva, llena de respeto y amor o de lo contrario sin respeto y agresiva?. Mantén clara la intención y esta te guiará hacia la resolución de los conflictos. 
                                                </li>
                                                <li>
                                                    Trata de ser consciente de tus pensamientos y de tus emociones, toma una pausa para identificar qué te está pasando. Esto nos ayuda a controlarnos para elegir realmente cómo queremos proceder. 
                                                </li>
                                                <li>
                                                    Salí  de la idea de que la discusión se trata de ganar o perder y reconoce que no atacar es una situación de triunfo en sí misma. Por ejemplo, si vamos con la idea de que queremos tener la razón será muy difícil escuchar, empatizar y crear un espacio seguro, en cambio , si vamos abiertos a que no se trata de tener razón, podremos conectar emocionalmente y comprender el punto de vista de ambos como valioso. 
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>

                        
                        
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                            Para resumir, el desafío de esta semana consta de :
                                <br/>
                                <br/>
                                <ol>
                                    <li>
                                       Cada uno armara el listado escrito de las 6 preguntas del principio.
                                    </li>
                                    <li>
                                        Se juntaran en un espacio tranquilo y que les guste a compartir lo que escribieron.
                                    </li>
                                    <li>
                                        Seguirán los tips para continuar con una comunicación más sana y asertiva.
                                    </li>
                                </ol>
                                <br />
                                <br />
                                <span>Les deseamos lo mejor con este desafío,</span>
                                <br/>
                                <span>El equipo de WeSex.</span>
                            </Text2>
                    </Row>
            </Container>
            </Background>
          )}
        </section>
      );
}
 
export default Comunicacion;