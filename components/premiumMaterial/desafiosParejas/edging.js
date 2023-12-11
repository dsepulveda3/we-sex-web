import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import ArrowBack from './universals/arrowBack';
import Notificar2 from './universals/notificar2';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
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



const Edging = () => {
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
      
      //console.log("printing origin");
      //console.log(origin);
      
    
    
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
                        <Feedback challengeName={"Edging"}/>
                    </Header>
                    {/* <TitleWeSex>WeSex</TitleWeSex> */}
                    <Row className="justify-content-between">
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>Edging</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                        <Text>
                            El edging es cuando vos y/o tu pareja se acercan al orgasmo, pero retroceden justo antes de llegar al punto culminante para volver a retomar la estimulación. Se trata de jugar con esa excitación en aumento, pero retirarse antes del punto culminante. Seguir estimulando otras zonas para que la excitación no baje del todo, sino que retroceda; lo que generamos con esto es intensificar el orgasmo una vez que sucede.
                            <br />
                            <br />
                            En este desafío, lo van a poner en práctica, y les vamos a dar un paso a paso de cómo hacerlo.
                        </Text>
                        <Text>
                        <span>Parte 1:</span> Entrando en calor
                        <br/>
                        <br/>
                            Para comenzar, les proponemos una pequeña actividad llamada visualización creativa.
                        <br/>
                            El objetivo es despertar el deseo y explorar límites de forma controlada, mediante la creación de imágenes mentales excitantes.
                        <br/>
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Aquí les dejamos instrucciones para la primera parte</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Siéntense cómodamente, cierren los ojos y respiren profundamente para relajarse.
                                                </li>
                                                <li>
                                                    Concéntrate en tu respiración durante unos minutos, permitiendo que cualquier pensamiento externo se desvanezca.
                                                </li>
                                                <li>
                                                    Imagina un lugar o situación que encuentres particularmente excitante. Puede ser real o fantástico. Visualiza los detalles: los sonidos, los olores, las sensaciones en la piel.
                                                </li>
                                                <li>
                                                    Imagina las caricias, los besos, la conexión con tu pareja en esa situación. Siente cómo se intensifica tu deseo y cómo tu cuerpo responde a estas sensaciones.
                                                </li>
                                                <li>
                                                    En el momento en que sientas que la excitación está creciendo, visualiza cómo pones un &quot;freno&quot;, controlando y reduciendo la intensidad de las sensaciones. Imagina un color, una luz o un elemento que represente este control. 
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                            Luego de la visualización pueden comenzar de a poco con caricias y besos a entrar en la exploración física con su pareja.
                        </Text>
                        <Text style={{marginBottom: "0px"}}>
                        <span>Parte 2:</span> EDGING
                        <Text style={{marginBottom: "0px"}}>
                            Presiona el botón antes de leer las instrucciones.
                            <br />
                            <br />
                            <BotonRandom onClick={chooseRandomName}>¿Quién comienza?</BotonRandom>
                            <br/>
                            <br/>
                            {chosenName && <div>Comienza: {chosenName}</div>}
                        </Text>
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"0px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Aquí les dejamos las intrucciones para esta segunda parte</TitleQuestion>
                                </div>
                                <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Una persona va a empezar a estimular a la otra. La idea es que esta estimulación sea progresiva, de menos a más.
                                                </li>
                                                <li>
                                                    La otra persona se entregará a recibir placer e irá comunicándo de qué forma le gusta más.
                                                </li>
                                                <li>
                                                    Lo importante va a ser que la persona estimulada pueda detectar estas sensaciones de placer y saber cuándo está por llegar al orgasmo.
                                                </li>
                                                <li>
                                                    Mientras la intensidad de la estimulación vaya aumentando, es importante mantener contacto visual y estar atento a las sensaciones de la persona estimulada.
                                                </li>
                                                <li>
                                                    Persona estimulada: ANTES de llegar al orgasmo, vas a avisarle a tu pareja que frene. Cuando sientas la mínima posibilidad de que se está acercando ese momento, PARAS.
                                                </li>
                                                <li>
                                                    Utiliza la respiración profunda para calmarte y bajar el nivel de excitación.
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>

                        <Text>
                            Luego de frenar esa primera vez, van a <span>invertir los roles.</span> La persona que estaba estimulando va a pasar a ser estimulada y viceversa.
                            <br/>
                            <br/>
                            Seguirán entregándose al placer, y repetirán el proceso con los roles invertidos: 
                            <br/>
                            <br/>
                            Estimulación progresiva → Detectar sensaciones → Frenar antes de llegar al orgasmo → Respiración profunda.
                            <br/>
                            <br/>
                            Luego de  ese momento, volverán a invertir los roles. En algún momento también pueden decidir ir a penetración, o pasar a un 69 para estimularse mutuamente. Aquí es importante que si alguno de los dos está por llegar al orgasmo pueda retirarse previamente. Este desafío requiere mucha comunicación tanto verbal como corporal, y confianza en que valdrá la pena aguantarse las ganas 🔥.
                            <br/>
                            <br/>
                            Cuando sientan que ya no pueden más, que su deseo sexual y el clímax están al máximo, se entregarán al orgasmo. 
                            <br/>
                            <br/>
                            El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.
                            <br/>
                            <br/>
                            <span>WeSexer Tip:</span> Muchas veces pasa que una persona termina más rápido que la otra y después le baja el deseo a la hora de dar placer a su pareja que todavía quiere seguir siendo estimulada. Para evitar esto, (si a la hora de entregarse al orgasmo, una persona será quien reciba y la otra quien estimule), les recomendamos que la persona en recibir sea quien suele tardar más en llegar al orgasmo, para que si luego quieren cambiar los roles, le toque recibir a la persona que menos tarda en llegar.
                            <br/>
                            <br/>
                        </Text>
                        
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                Cuando decidan terminar, dense el tiempo para apreciar y sentir las sensaciones en su cuerpo. La relajación, la excitación, sus latidos, la piel de su pareja y el momento presente …
                                <br/>
                                <br/>
                                <span>Con placer,</span>
                                <br/>
                                <span>El equipo de WeSex.</span>
                            </Text2>
                    </Row>
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafio !'
              url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pag9PXiMvFrNXO4GV/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}`}
              url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pag9PXiMvFrNXO4GV/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}`}/>

            </Background>
          )}
        </section>
      );
}
 
export default Edging;