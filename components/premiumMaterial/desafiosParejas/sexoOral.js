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




const SexoOral = () => {
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

    useEffect(() => {
        if (router.isReady){
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
                        <Feedback challengeName={"Sexo Oral"}/>
                    </Header>
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>PPP y PPC</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <Text>
                        {/* <span>Parte 1:</span> Imaginando el Placer */}
                        <br/>
                        Hoy vamos a pasar al sexo oral. Sí, ya aprendieron a explorar las zonas erógenas, a darse y recibir masajes, y masturbar a la otra persona como lo desean. Llegó el momento de sumar la lengua, boca y saliva a los desafíos wesexer. 
                        <br/>
                        <br/>
                        Pero lo vamos a hacer en un formato distinto y divertido.
                        <br/>
                        <br/>
                        <span>El plan se llama PPPC: Pizza, Peli, Pete y Clete.</span>
                        <br/>
                        <br/>
                        La idea es que se pidan la pizza que más les guste y elijan una peli para mirar un rato y que después quede de fondo. 😜
                        </Text>
                        <Col xs="12" lg="6" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Aquí les dejamos un listado de pelis para ver (o no ver).</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ul>
                                                <li>
                                                    Amigos con derechos
                                                </li>
                                                <li>
                                                    Legalmente rubia.
                                                </li>
                                                <li>
                                                    Comer, rezar, amar.
                                                </li>
                                                <li>
                                                    Rápidos y furiosos 5.
                                                </li>
                                                <li>
                                                    Mi novia Polly.
                                                </li>
                                            </ul>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                        {/* <span>Parte 2:</span> Poniéndolo en Práctica */}
                        Ya con la peli encendida, cuando se sientan listos, una persona empezará a estimular a la otra. El rol de la otra persona será simplemente recibir placer. Puede liberar su cabeza, no tiene que preocuparse por nada más, ni por lo que tiene que hacer luego, ni por no llegar o llegar al orgasmo. Solo recibir.
                        <br/>
                        <br/>
                        La persona que esté estimulando, también tendrá una sola cosa en la que concentrarse. Dar placer. Entregar placer, hacer gozar a tu pareja, excitarse de ver a tu pareja excitada. También te alentamos a que le preguntes a tu pareja, ¿te gusta así? O simplemente decir: &quot;guíame&quot;.
                        <br/>
                        <br/>
                        {/* <BotonRandom onClick={chooseRandomName}>¿Quién comienza?</BotonRandom>
                        <br/>
                        <br/>
                        {chosenName && <div>Comienza: {chosenName}</div>} */}
                        <span>A tener en cuenta:</span> No es necesario que el encuentro sea recíproco. No siempre es &quot;yo te doy y vos me das&quot;. Puede también terminar luego de que uno solo reciba sexo oral y el otro solo se encargue de dar ese día. La próxima cambiarán roles si lo desean.
                        <br/>
                        <br/>
                        Obviamente, si luego quieren cambiar de roles esa misma noche, ¡adelante!
                        <br/>
                        <br/>
                        <span>WeSexer TIP:</span> Los usuarios de nuestra app recomiendan que la primera persona en recibir sexo oral sea la que tiende a tardar más en llegar al orgasmo.
                        </Text>
                        {/* <Text>
                        <span>Parte 3:</span> La Comunicación es Clave
                        <br/>
                        <br/>
                            Tras la experiencia, tómense un momento para conversar sobre cómo se sintieron.
                        <br/>
                        </Text> */}
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                                Para cuando llegue el momento de sexo oral, les dejamos algunas recomendaciones wesexers:
                                <br/>
                                <br/>
                                <span>Para dar sexo oral a la persona con vulva, les recomendamos probar esta posición:</span>
                                <div>
                                    <img src='/img/premium-material/men-to-woman-SO.jpeg'/>
                                </div>
                                Esta posición permite a la mujer moverse para encontrar su estimulación adecuada. Para adelante, para atrás, más cerca o más lejos del clítoris. Como gustes.
                                <br/>
                                <br/>
                                <span>Para dar sexo oral a personas con pene, recomendamos esta posición:</span>
                                <br/>
                                <div>
                                    <img src='/img/premium-material/woman-to-man-SO.jpeg'/>
                                </div>
                                La posición no tiene nada de distinto, pero sí los tips que te vamos a mandar por privado para que sorprendas a tu pareja con algunos truquitos nuevos 😉
                            </Text2>
                    </Row>
            </Container>
            <Notificar message='¡ Notificar que finalizamos el desafio !' url={`https://forms.gle/b7gVwkzECEcJttyNA`}/>
            </Background>
          )}
        </section>
      );
}
 
export default SexoOral;


