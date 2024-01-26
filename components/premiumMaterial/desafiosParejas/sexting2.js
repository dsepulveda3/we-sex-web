import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import ArrowBack from './universals/arrowBack';
import Notificar from './universals/notificar';
import Notificar2 from './universals/notificar2';
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

const Sexting2 = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const appRef = useRef(null); // Create a ref to hold the PIXI application
    const router = useRouter();
    const [challengeName, setChallengeName] = useState("Erotismo virtual");

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
                        <SubTitle><span>Erotismo Virual</span></SubTitle>
                    </ContentTitle>
                    {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                    <Col xs="12" lg="12" md="3">
                        <Card style={{margin:"30px 10px 10px 10px"}}>
                            <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                            <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                <TitleQuestion>¿Por qué en los primeros meses de la relación se mantiene un coqueteo virtual y luego con el correr del tiempo algunas parejas dejan de hacerlo?</TitleQuestion>
                            </div>
                            <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                            </CardHeader>
                            <Collapse isOpen={isOpen}>
                                <CardBody>
                                    <AnswerQuestion>
                                        Hablar y compartir fantasías, es normal. Nutre el deseo y pueden incluir o no al vínculo, por eso son fantasías.😏
                                        <br />
                                        Es clave mantener encendido el vínculo desde el erotismo cotidiano, y si dejaste de hacerlo o nunca lo hiciste, este desafío te da la oportunidad de experimentarlo.
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
                                <TitleQuestion>¿Cómo sostener el erotismo virtual?</TitleQuestion>
                            </div>
                            <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                            </CardHeader>
                            <Collapse isOpen={isOpen2}>
                                <CardBody>
                                    <AnswerQuestion>
                                        Ponerlo en agenda es clave, por eso vamos a ir paso a paso:
                                        <br />
                                        <ol>
                                            <li>
                                                Cada uno tendrá que elegir entre 1 a 3 materiales eróticos, ya sean música, relatos eróticos, una foto, un video de algún acto sexual, o lo que sea que los erotice.
                                            </li>
                                            <li>
                                                Enviale a tu pareja los contenidos eróticos que hayas elegido. ¿Cuándo? Sugerimos agendar un día en la semana para enviar los contenidos. Saber qué día de la semana vas a recibir ese contenido erótico en un momento cotidiano, prepara nuestro deseo y expectativas.
                                            </li>
                                            <li>
                                                <strong>Palabra de seguridad:</strong> Sugerimos que envíen un pre aviso consensuado así el cerebro se acomoda, y si por ahi estoy en el trabajo, o en algún lugar desprevenido, puedo tomarme 5 minutos, buscar algo de intimidad y mirar lo que me mandan. La palabra de seguridad puede ser divertida y no erótica, como por ejemplo AREPA, o una más sexy, como LÁTIGO.
                                            </li>
                                            <li>
                                                Es importante dar una devolución de qué sentiste o qué te pareció el contenido que te compartieron. Ejemplos de feedback que podemos dar a quien nos envió el contenido según lo que sintamos: &quot;Gracias , me re calentaste&quot;  &quot;No veo la hora de verte y hacer esto&quot; Es clave que este coqueteo no sea por medio de emojis solamente y que le pongamos arte y palabras a nuestras sensaciones.
                                            </li>
                                        </ol>
                                    </AnswerQuestion>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </Col>
                    <Text >
                        <span>Pasando a al acción:</span>
                        <br />
                        <br />
                        Llegado el día que hayan quedado para tener su encuentro sexual, les sugerimos cómo incorporar esta calentura acumulada en la semana:
                        <br />
                        <br />
                        Elijan uno de los contenidos que mas les gusto para llevarlo a cabo a su manera en este encuentro. Si lo que enviaron fue una canción, pueden ponerla mientras se desnudan, si fue un video, pueden usarlo de inspiración o realizar esa práctica, si fue un relato erótico pueden leerlo mientras se recorren el cuerpo o actuar como si fuesen los personajes del mismo…
                        <br />
                        <br />
                        También pueden elegir charlar sobre cómo los calentó este ida y vuelta erótico antes de pasar a la conexión física.
                        <br />
                        <br />
                        Incluso si percibieron resistencia o dificultades a la hora de buscar o enviar contenido, pueden aprovechar para hablar de eso y aumentar su intimidad vincular. Simplemente hablarlo con tu pareja es un gran aprendizaje para mejorar la comunicación en la pareja.
                        <br />
                        <br />
                        Para resumir, los pasos son:
                        <br />
                        <br />
                        <ol>
                            <li>
                                Estoy atento en la semana a investigar qué contenido me erotiza.
                            </li>
                            <li>
                                Seteo un día o momento que quiera para enviarselo a mi pareja con la palabra de seguridad.
                            </li>
                            <li>
                                Doy feedback a mi pareja de lo que me pareció el contenido que recibí. Me dejó calentar por lo mismo y me doy el tiempo para disfrutarlo.
                            </li>
                            <li>
                                El día del encuentro sexual, utilizo el contenido de inspiración.
                            </li>
                        </ol>
                    </Text>
                    
                </Row>
                <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                        <Text2>
                            <span>¿Qué pasaría si esta semana, el tiempo que usamos en redes sociales lo ponemos al servicio de nuestro erotismo?</span>
                            <br />
                            <span>Que disfruten,</span>
                            <br/>
                            <span>El equipo de WeSex.</span>
                        </Text2>
                </Row>
        </Container>
        
        <Notificar2 message='¡ Notificar que finalizamos el desafío !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}&prefill_Nombre+Desafio=${challengeName}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}&prefill_Nombre+Desafio=${challengeName}`}/>

        </Background>
      )}
    </section>
    )
}

export default Sexting2;