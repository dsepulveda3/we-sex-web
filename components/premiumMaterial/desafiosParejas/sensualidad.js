import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import ArrowBack from './universals/arrowBack';
import Notificar from './universals/notificar';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import { useRouter } from 'next/router';
import Feedback from './universals/feedback';

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
    font-size: 2.0rem;
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

const Sensualidad = () => {
    const [showAnimation, setShowAnimation] = useState(false);
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
    return(
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
                <Header>
                    <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`}/>
                    <TitleWeSex>WeSex</TitleWeSex>
                    <Feedback challengeName={"Musica"}/>
                </Header>
                <Row className="justify-content-between">
                    <ContentTitle>
                        <Title>Desafío:</Title>
                        <SubTitle><span>Sensualidad</span></SubTitle>
                    </ContentTitle>
                    {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                    <Text >

                        <span>Objetivo:</span> Transformar la colocación y utilización del preservativo en un momento sensual y excitante para la pareja, reforzando la conexión a través de la mirada y el tacto.
                        <br />
                        <br />
                        Materiales necesarios: Preservativos, lubricante (opcional), ambiente relajado. Tiempo recomendado: entre 30 a 60 minutos.
                        <br/>
                        <br/>
                        Este juego propone convertir un momento común en algo más sensual y conectado, reforzando la intimidad y el deseo entre la pareja. Si con tu pareja no utilizan preservativo, este desafío también será parte de salir de la rutina.
                    </Text>
                    <Text >

                        <span>Pasos del juego:</span> 
                        <br />
                        <br />
                        <ol>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Preparación del ambiente:</strong> Crear un entorno íntimo y relajado. Pueden encender velas, poner música suave o cualquier detalle que genere una atmósfera sensual.
                            </li>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Conexión visual:</strong> Pueden sentarse frente a frente, manteniendo contacto visual constante. La mirada es clave para intensificar la conexión emocional y el deseo. 
                            </li>
                            La idea es que se miren por dos minutos sin hablar. Es habitual que los primeros segundos aparezcan risas y cierta incomodidad, luego de eso la liberación de oxitocina por mirarnos aumenta la empatía y el deseo sexual. Es útil intentar conectar ambas respiraciones para que el tiempo fluya.
                            <li>
                            <strong style={{textDecoration: "underline"}}>Exploración táctil:</strong> Comiencen a acariciarse suavemente mientras mantienen la mirada.
                                <ul>
                                    <li>
                                    Pueden comenzar el roce por ejemplo desde la boca, luego las mejillas, la frente, cabeza y cabello.
                                    </li>
                                    <li>
                                    Después suavemente ir bajando por el cuello, los hombros y las manos. Luego lo mismo en el otro brazo.
                                    </li>
                                    <li>
                                    Podemos seguir por el centro del pecho hasta el ombligo. Sugerimos de ahí pasar a los pies, con un suave masaje subir por piernas hasta la genitalidad y recorrer la misma suavemente hasta la erección.
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Integración del preservativo:</strong> Uno de ustedes toma el preservativo y, sin dejar de mirarse, comienza a abrirlo lentamente. El contacto visual es fundamental durante todo el proceso. Lo ideal es que la persona que lo coloque no sea la persona que va a recibir el preservativo.
                            </li>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Colocación sensual:</strong> El objetivo es colocar el preservativo de manera erótica. Pueden utilizar lubricante si lo desean para hacerlo más placentero. Permitan que los gestos sean suaves, sensuales y conectados. Podemos presentarlo en la punta del pene con la boca y luego bajarlo con las manos.
                            </li>
                            <li>
                            <strong style={{textDecoration: "underline"}}>Continuar la conexión:</strong>  Después de haber colocado el preservativo, continúen manteniendo contacto visual y acariciándose mutuamente. Este momento puede convertirse en una transición íntima hacia juegos previos.
                            </li>
                        </ol>
                    </Text>
                    <Text>
                        <span>Ahora elijan su propia aventura</span>
                        <br/>
                        <br/>
                        Luego de poner el preservativo sensualmente, seguir con:
                        <br/>
                        <ul>
                            <li>
                            Masturbación: Prueben con mucho lubricante y con ambas manos. Pregúntale a tu pareja si prefiere la masturbación desde la base hasta la punta, o solo en la punta y anda ajustando según donde sienta mas placer.
                            </li>
                            <li>
                            Sexo oral: Para evitar el gusto del preservativo recomendamos añadir lubricante con sabor y/o que sea un preservativo con sabor.
                            </li>
                            <li>
                            Apoyar el pene con el preservativo puesto sobre la vulva de tu pareja, pero sin penetrar. Solo friccionando contra su vulva y clítoris. También recomendamos añadir lubricante aquí.
                            </li>
                        </ul>
                        Finalmente como frutilla del postre, gocen de la penetración.
                    </Text>
                </Row>
                <Row className="justify-content-between">
                <Col xs="12" lg="12" md="3">
                        <Card style={{margin:"30px 10px 10px 10px"}}>
                            <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                            <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                <TitleQuestion>Material de apoyo: Cómo colocar un preservativo correctamente</TitleQuestion>
                            </div>
                            <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                            </CardHeader>
                            <Collapse isOpen={isOpen}>
                                <CardBody>
                                    <AnswerQuestion>
                                        <ol>
                                            <li>
                                            Chequear fecha de vencimiento.
                                            </li>
                                            <li>
                                            Abrirlo con la punta de los dedos, no con los dientes ni las uñas ni tijeras.
                                            </li>
                                            <li>
                                            Al momento de ponerlo ten en cuenta que el preservativo solo puede desenrollarse en una dirección, por lo que tienes que asegurarte de que esté en la posición correcta. La punta tiene que mirar hacia arriba, y los bordes del preservativo deben estar enrollados hacia afuera.
                                            </li>
                                            <li>
                                            Con el pene erecto, colocarlo sobre la punta del glande.
                                            </li>
                                            <li>
                                            Con cuidado, agarra la punta del preservativo entre tu dedo índice y tu pulgar usando las yemas de los dedos y asegurándote de dejar un espacio entre tu pene y la punta del condón para el esperma. Con la otra mano desenrolla el preservativo hasta la base del pene.
                                            </li>
                                            <li>
                                            Si el preservativo no se desenrolla con facilidad es porque probablemente está al revés, en ese caso tienes que usar uno nuevo. Es importante no voltear el preservativo y usarlo, porque puede haber líquido pre-seminal lo que los expondría a ambos a una situación poco segura.
                                            </li>
                                        </ol>
                                    </AnswerQuestion>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col xs="12" lg="12" md="3">
                        <Card style={{margin:"30px 10px 10px 10px"}}>
                            <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                            <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                <TitleQuestion><strong>Feedback:</strong> Les dejamos 3 preguntas para hacerse y anotar en su diario sexual de pareja</TitleQuestion>
                            </div>
                            <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                            </CardHeader>
                            <Collapse isOpen={isOpen2}>
                                <CardBody>
                                    <AnswerQuestion>
                                        <ul>
                                            <li>
                                            ¿Cómo se sintieron con la experiencia?
                                            </li>
                                            <li>
                                            Pudieron ponerse en modo sexy o les salió en modo automático.
                                            </li>
                                            <li>
                                            Del 1 al 10, qué tan sexy sintieron la colocación del preservativo de esa manera.
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
                            <span>Que disfruten,</span>
                            <br/>
                            <span>El equipo de WeSex.</span>
                        </Text2>
                </Row>
        </Container>
        
        <Notificar message='¡ Notificar que finalizamos el desafio !' url={`https://forms.gle/MBYhao3pxfaxQCpS8`}/>

        </Background>
      )}
    </section>
    )
}

export default Sensualidad;