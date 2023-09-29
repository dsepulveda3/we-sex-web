import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import ArrowBack from './universals/arrowBack';
import Notificar from './universals/notificar';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import { useRouter } from 'next/router';


const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
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

const ContainerNotificarDone = styled.div`
    padding: 2rem;

`;

const BotonNotificarDone = styled.a`
    background-color: var(--green);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;



const Virtual = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const appRef = useRef(null); // Create a ref to hold the PIXI application
    const router = useRouter();

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

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
      
  
      useEffect(() => {
          if (router.isReady){
            if (router.query.origin) {
              setIsOriginRoute(true);
              setOrigin(router.query.origin);
            }
          }
        }, [router.isReady, isOriginRoute]);
      
      console.log("printing origin");
      console.log(origin);
      
    
    
      return (
        <section>
            <FullscreenCanvas style={{ zIndex: showAnimation ? 1 : -1 }}>
        {/* Ship animation and PIXI canvas content here */}
      </FullscreenCanvas>
      {!showAnimation && (
            <Background>
              <Container>
                    {/* <Header>
                        <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`}/>
                        <TitleWeSex>WeSex</TitleWeSex>
                    </Header> */}
                    <TitleWeSex>WeSex</TitleWeSex>
                    <Row className="justify-content-between">
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>Virtual</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                        <Text>
                            ¿Quién dijo que a la distancia baja la calentura?
                            <br />
                            Hoy les vamos a demostrar lo contrario.
                            <br />
                            El desafío de hoy es muy simple, y pueden elegir su propio camino según la disponibilidad que tengan.
                            <br />
                        </Text>
                        <Text>
                        <span>Opción A:</span> Sexo virtual en vivo
                        <br/>
                        <br/>
                            <ol>
                                <li>
                                    Encuentren un espacio en donde sepan que ambos van a estar disponibles y en un lugar privado (como una habitación o un baño).
                                </li>
                                <li>
                                    Comenzarán a enviarse fotos hot para subir la temperatura pero… obviamente que este desafío viene acompañado con tips para profesionalizar el sexteo.
                                </li>
                                <li>
                                    Si se animan, pueden pasar a videollamada.
                                </li>
                            </ol>
                        
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Botón Sexting Tips</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Creetela. Antes que nada la foto es para vos y es fundamental que te sientas bien al momento de hacerla.
                                                </li>
                                                <li>
                                                    Encontrá el momento. Es importante que te retrates en un instante en el que estés internamente conectando con tu erotismo.
                                                </li>
                                                <li>
                                                    Elegí qué mostrar. Fotografiá esa parte de tu cuerpo que más te guste.
                                                </li>
                                                <li>
                                                    Ambientá. No es para que prendas una vela, pero por lo menos que no salga el tender de fondo jeje.
                                                </li>
                                                <li>
                                                    Que la luz te favorezca. Si lo que querés es mostrar más, lo mejor es el sol de la mañana o el atardecer. Si apenas querés sugerir, una lámpara en la que se proyecte tu silueta en sombra puede resultar en una foto muy sensual.
                                                </li>
                                                <li>
                                                    Optá por la cámara frontal y el uso del temporizador, suele tener mejor calidad que la selfie del celular y te da tiempo de acomodarte.
                                                </li>
                                                <li>
                                                    Organizá con qué agarrar el teléfono: si tenés tripode o agarre tipo popsocket genial. Sino simplemente lo apoyás con algo que le de estabilidad.
                                                </li>
                                                <li>
                                                Ángulo: Depende lo que quieras resaltar 😉
                                                    <ul>
                                                        <li>
                                                            Hacia arriba si vas a sacarte foto de los genitales, pero hacia abajo si es de la cara o el torso. 
                                                        </li>
                                                        <li>
                                                            Acostadx en la cama de costado, para los pechos. 
                                                        </li>
                                                        <li>
                                                            Desde el hombro boca abajo para la cola. 
                                                        </li>
                                                    </ul>
                                                    </li>
                                                <li>
                                                    Algo de ropa suma siempre. Podes ir quitándote la ropa foto tras foto y jugando con esa excitación 
                                                </li>
                                                ⚠️ Por Seguridad: no cara, no tatuajes. Usen telegram que no queda nada en el sistema. No compartas las fotos que te mandan, cuídense y sean responsables con el otrx.
                                                    
                                                
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text style={{marginBottom: "0px"}}>
                        <span>Opción B:</span> Foto que va, foto que viene
                        </Text>
                        <Text>
                            Si no tienen tiempo de coincidir para el sexo virtual en vivo, les traemos la siguiente propuesta: 
                            <br />
                            <br />
                            ¿Qué más excitante que recibir una foto hot de tu pareja en el medio del día? A la mañana, a la noche, cuando van al baño, cuando se sientan calientes... siempre hay momento para calentar un poquito las cosas con tu pareja. Los invitamos a mandarse fotos durante el día para generarle un momento de calentura a su pareja y prepararse para la vuelta a la presencialidad 😉.
                        </Text>
                        
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                <span>Con placer,</span>
                                <br/>
                                <span>El equipo de WeSex.</span>
                            </Text2>
                    </Row>
            </Container>
            
            
            <Notificar message='¡ Notificar que finalizamos el desafio !' url={`https://wa.me/5491140678698?
            text=Hola!%20Somos%20${origin}.%20Terminamos%20el%20desafío%20VIRTUAL`}/>
            
            </Background>
          )}
        </section>
      );
}
 
export default Virtual;