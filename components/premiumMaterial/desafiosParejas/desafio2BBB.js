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
        width: 18%;
        height: 70%;
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




const Desafio1 = () => {
    const [showAnimation, setShowAnimation] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const appRef = useRef(null); // Create a ref to hold the PIXI application

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
                            <SubTitle><span>Cocina y masajes</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <Text>
                        <span>Objetivo:</span> Pasar un momento divertido juntos, fortaleciendo la conexión y compartiendo risas.
                        <br/>
                        <br/>
                        <span>Cena y cocina juntos:</span>
                        <br/>
                        <br/>
                        <span>1:</span> Piensen en un plato que los identifique. Algún plato que les guste a ambos, que los remonte a un recuerdo, a una cita, a un viaje que hayan hecho.
                        <br/>
                        <br/>
                        <span>2:</span> Armen el listado de compras y vayan juntos a conseguir los ingredientes.
                        <br/>
                        <br/>
                        <span>3:</span> Llegada la noche, el plan será cocinar, tomar algo y disfrutar de la cena.
                        <br/>
                        <br/>
                        <span>4:</span> Asegúrense de poder tener esa noche solos.
                        <br/>
                        <br/>
                        </Text>
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <ContentTitle2>
                                <Title2 style={{textAlign: 'left'}}>LUEGO DE LA CENA</Title2>
                                <AppImage src="../../img/bomb.png" alt="Bomba" />
                            </ContentTitle2>
                        
                            <Text2>
                                <span>Mauro, hoy te toca realizar un masaje relajante y/o erótico a tu pareja. Sin expectativas de que lleve a algo más, simplemente para que ella se sienta bien y relajada.</span>
                                <br/>
                                <br/>
                                Puedes preguntarle a tu pareja cómo le gustaría que sea el masaje, pero igualmente…
                                <br/>
                            </Text2>
                            <Col xs="12" lg="12" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    
                                    <TitleQuestion style={{marginLeft: '2rem'}}>Te dejamos aquí una guía para realizar el mejor masaje erótico 😉</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                        <TextBombNormal style={{fontWeight: 'bold'}}>Paso 1: Preparación</TextBombNormal>
                                        
                                        <ul>
                                            <li>
                                                Crea un ambiente adecuado: Prepara el lugar donde realizarás el masaje. Asegúrate de que sea cómodo, tranquilo y libre de distracciones. Puedes ambientar con velas aromáticas, música suave y luces tenues para crear un ambiente íntimo y relajante.
                                            </li>
                                            <li>
                                                Asegúrate de tener todo lo necesario: Reúne los elementos que necesitarás, como aceites de masaje, toallas suaves, accesorios (plumas, cremas comestibles, vibradores) y cualquier otra cosa que desees incorporar.
                                            </li>
                                        <br/>
                                        </ul>
                                        <TextBombNormal style={{fontWeight: 'bold'}}>Paso 2: Comenzar el masaje</TextBombNormal>
                                        <ul>
                                            <li>
                                                Invita a la persona a acostarse cómodamente: Esta puede recostarse boca abajo o boca arriba, según prefiera. Asegúrate de que esté relajada y cómoda antes de comenzar.
                                            </li>
                                            <li>
                                                Aplica aceite de masaje: Calienta el aceite en tus manos antes de aplicarlo sobre el cuerpo de tu pareja. Comienza con movimientos suaves y largos, distribuyendo el aceite de manera uniforme.
                                            </li>
                                            <li>
                                                Explora diferentes partes del cuerpo: Empieza por las zonas menos sensibles, como la espalda, los hombros y los brazos. Utiliza movimientos suaves, largos y fluidos para acariciar y masajear estas áreas. A medida que avances, presta atención a las reacciones de tu pareja y ve explorando otras partes del cuerpo, como las piernas, los pies, el cuello y el cuero cabelludo.
                                            </li>
                                        </ul>
                                        <br/>
                                        <TextBombNormal style={{fontWeight: 'bold'}}>Paso 3: Variedad en las técnicas de masaje</TextBombNormal>
                                        <ul>

                                            <li>
                                                Utiliza diferentes partes del cuerpo: No te limites a usar solo tus manos. Experimenta con otras partes de tu cuerpo, como los antebrazos, los codos, el pecho o incluso tu propio cuerpo en contacto con el de la otra persona. Estos cambios en las técnicas de masaje pueden generar sensaciones diferentes y aumentar la excitación.
                                            </li>
                                            <ul>
                                                <li>
                                                
                                                    <li>
                                                        Juega con las intensidades: Alterna entre movimientos suaves y firmes, adaptándote a las preferencias de tu pareja.
                                                    </li>
                                                    <li>
                                                        Puedes usar las yemas de tus dedos para acariciar suavemente.
                                                    </li>
                                                    <li>
                                                        Las palmas de tus manos para aplicar una presión más profunda.
                                                    </li>
                                                    <li>
                                                        Las uñas para generar leves rasguños estimulantes.
                                                    </li>
                                                </li>
                                            </ul>
                                            <li>
                                            Experimenta con diferentes ritmos y velocidades: Varía el ritmo y la velocidad de tus movimientos para mantener la excitación.
                                            </li>
                                            <ul>
                                                <li>
                                                
                                                    <li>
                                                        Puedes realizar movimientos lentos y sensuales, alternándolos con movimientos más rápidos y enérgicos para aumentar la intensidad.
                                                    </li>
                                                </li>
                                            </ul>
                                        </ul>
                                        <br/>
                                        <TextBombNormal style={{fontWeight: 'bold'}}>Paso 4: Enfócate en las zonas erógenas</TextBombNormal>
                                        <ul>
                                            <li>
                                                Descubre las zonas sensibles: Presta atención a las reacciones de tu pareja y busca las zonas que le generen mayor placer. Estas pueden incluir los labios, el cuello, los pezones, los muslos internos, el abdomen, las nalgas, los genitales y otras áreas erógenas que mencionamos en la guía.
                                            </li>
                                            <li>
                                                Estimula las zonas erógenas de forma creativa: Utiliza técnicas específicas para estimular estas zonas, como suaves mordiscos, besos, lamidos o movimientos circulares con la lengua.
                                            </li>
                                        </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">   
                        <Text>
                            <span>NOTA FINAL:</span>  Recuerden que el objetivo es divertirse y tener un espacio para ustedes. No hay expectativas de que el desafío conduzca a un acto sexual, dejense llevar por el momento y el disfrute. 
                        </Text>
                    </Row>
            </Container>
            </Background>
          )}
        </section>
      );
}
 
export default Desafio1;


// useEffect(() => {
    //     let app = null;
    
    //     if (showAnimation) {
    //       app = new PIXI.Application({ background: '#5f32a2', resizeTo: window });
    //       document.body.appendChild(app.view);
    //       appRef.current = app; // Save the PIXI application to the ref
    
    //       // Set the canvas width and height to match the screen dimensions
    //       app.view.style.width = `${window.innerWidth}px`;
    //       app.view.style.height = `${window.innerHeight}px`;
    
    //       // Create a PIXI.Text element
    //       const style = new PIXI.TextStyle({
    //         fontFamily: 'Arial',
    //         fontSize: 30,
    //         fontStyle: 'italic',
    //         fontWeight: 'bold',
    //         fill: ['white', 'white'], // gradient
            
    //       });
    
    //       const richText = new PIXI.Text('Cargando Desafio 1 ...', style);
    //       richText.x = 50;
    //       richText.y = 220;
    //       richText.anchor.set(0.5);
    //       richText.x = app.screen.width / 2;
    //       richText.y = app.screen.height / 2 - 180;
    //       app.stage.addChild(richText);
    
    //       // Load the spritesheet
    //       PIXI.Assets.load(santaUrl).then(() => {
    //         // Create an AnimatedSprite
    //         const frames = [];
    //         for (let i = 0; i < 30; i++) {
    //           const val = i < 10 ? `0${i}` : i;
    //           frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));
    //         }
    //         const anim = new PIXI.AnimatedSprite(frames);
    //         anim.x = app.screen.width / 2;
    //         anim.y = app.screen.height / 2;
    //         anim.anchor.set(0.5);
    //         anim.animationSpeed = 0.5;
    //         anim.play();
    //         app.stage.addChild(anim);
    
    //         // Animate the rotation
    //         app.ticker.add(() => {
    //           anim.rotation += 0.01;
    //         });
    
    //         // Set a timeout to hide the animation after 3 seconds
    //         setTimeout(() => {
    //           // Stop the animation and remove PIXI elements from the stage
    //           anim.stop();
    //           app.stage.removeChild(richText);
    //           app.stage.removeChild(anim);
    //           setShowAnimation(false);
    //         }, 3500);
    //       });
    //     } else if (appRef.current) {
    //       appRef.current.view.style.display = 'none'; // If showAnimation is false, hide the PIXI canvas
    //     }
    
    //     return () => {
    //       if (app) {
    //         document.body.removeChild(app.view); // Remove PIXI canvas from the DOM
    //       }
    //     };
    //   }, [showAnimation]);