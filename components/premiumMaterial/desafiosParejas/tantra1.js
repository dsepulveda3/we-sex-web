import React, { useEffect, useState, useRef } from 'react';
import {Row, Col, Container, Card, CardHeader, CardBody, Collapse, Button} from 'reactstrap';
import styled from '@emotion/styled';
import * as PIXI from 'pixi.js';
import santaUrl from '../../../public/img/rutina_bomba.png';
import ReactPlayer from 'react-player';
import Notificar from './universals/notificar';
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

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const AppVideoContainer = styled.div`
    border-radius: 2rem;
    overflow: hidden;
`;

const VideoWrapper = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  width: 100%;
  @media (min-width: 540px) {
    width: 20%; 
  }
`;

const AnswerQuestionWrapper = styled.div`
  width: 100%;
  @media (min-width: 540px) {
    width: 70%; 
  }
`;




const Tantra1 = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const appRef = useRef(null); // Create a ref to hold the PIXI application

    const router = useRouter();
    const [challengeName, setChallengeName] = useState("Tantra 1");

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    const video = "https://we-sex-premium.s3.us-east-2.amazonaws.com/couple_assets/IMG_5175.MOV";

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
                        <Feedback challengeName={"Tantra 1"}/>
                    </Header>
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>Tantra 1</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <Text>
                        <br />
                        ¡Bienvenidos al <span>primer desafío tántrico</span> del programa!
                        <br/>
                        </Text>
                        <Col xs="12" lg="12" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>¿Que es el tantra?</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <VideoContainer>
                                            <AnswerQuestionWrapper>
                                                <AnswerQuestion>
                                                    El tantra es un camino de autoconocimiento que integra nuestro ser espiritual con nuestra experiencia humana y todas sus manifestaciones. 
                                                    No se limita a la sexualidad, pero a diferencia de otros caminos espirituales, la incluye. 
                                                    El Tantra puede ser un camino de transformación a través del contacto con tu energía sexual. 
                                                    Cuando hablamos de sexualidad, no sólo nos referimos al encuentro sexual, sino a la capacidad de hacer expansivo el placer corporal, y esto sucede en varios ámbitos de la vida. 
                                                    Desde el Tantra, entonces, nos abrimos a la posibilidad de que la experiencia orgásmica no suceda solamente en el encuentro sexual o la masturbación, sino en cada experiencia que nos brinde placer corporal. 
                                                    Para esto es necesario un cuerpo y una psique disponibles, que pueden entrenarse para ello.
                                                </AnswerQuestion>
                                            </AnswerQuestionWrapper>
                                            <VideoWrapper>
                                                <ReactPlayer url={video} controls={true} width="100%" height="100%"/>
                                            </VideoWrapper>
                                        </VideoContainer>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                        Para empezar a adentrarlos en el mundo tántrico, el desafío de hoy estará basado en una meditación en duplas. Luego de la misma, ustedes podrán elegir si seguir brindándose placer o si están satisfechos con las sensaciones sentidas hasta el momento. Lo que hará la meditación será prepararlos para vivir el encuentro de hoy con otro enfoque al placer.
                        <br/>
                        <br/>
                        </Text>
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                            <Text2>
                            <span>Meditación de Duplas:</span>
                                <br />
                                <br/>
                                Esta práctica consiste en hacer un contacto meditativo en duplas, primero uno tendrá un rol activo y el otro más receptivo. Luego se intercambiarán los roles. Pueden poner música para ambientar. 
                                <br/>
                                Aquí les recomendamos una <a style={{textDecoration:"underline", color:"var(--violet)"}} href="https://open.spotify.com/playlist/6Y9nkFeVN8OYIc5DRWUncp?si=887d0aca0a884ffc">playlist tántrica.</a>
                            </Text2>
                            <Card style={{margin:"0px 0px 0px 0px"}}>
                                <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>Instrucciones</TitleQuestion>
                                </div>
                                <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen2}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            <ol>
                                                <li>
                                                    Quien recibe primero puede acostarse boca arriba sin ropa. 
                                                </li>
                                                <li>
                                                    Quien da puede tomarse un tiempo para observar el cuerpo de la otra persona y el movimiento de su respiración, conectando con el rol de dar. 
                                                </li>
                                                <li>
                                                    Puede frotar sus manos entre sí para generar un calorcito y cuando se sienta listo apoyar lenta y suavemente las manos en la cabeza de quien recibe. Estar ahí sin hacer ningún movimiento, un par de respiraciones. 
                                                </li>
                                                <li>
                                                    Luego con la yema de los dedos empezar a acariciar desde el rostro e ir pasando por cada parte del cuerpo para finalizar en los pies. 
                                                </li>
                                                <li>
                                                    Es un contacto que busca conectar con el placer de ser tocado, pero puede que inicialmente la persona no conecte con el placer y vengan otras emociones, es importante darles lugar y acompañar esa emoción con mucha presencia mientras se continúa con las caricias, no tienes que hacer nada más que estar ahí. No es un contacto que busca excitar o sanar nada, sino simplemente permitir que el otro pueda sentirse a través de tu contacto. 
                                                </li>
                                                <li>
                                                    Mientras vas acariciando puedes repetir el sutra: ”mientras seas acariciado, conviértete en la caricia”. 
                                                 </li>
                                                 <li>
                                                    Acaricia todo el cuerpo: brazos, manos, piernas, la pelvis y los genitales durante 20 min. Dale tiempo y presencia a cada parte del cuerpo, e intenta dejar los genitales para el final. 8. Una vez que hayas terminado, vuelve a hacer un contacto sostenido con ambas manos en la cabeza y luego retira el contacto y quédate cerca en silencio hasta que la otra persona decida volver.
                                                </li>
                                            </ol>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Text2>
                                    Esta meditación está escrita por Fabiana Villalba, profesora y divulgadora de tantra, encargada de los contenidos tántricos en WeSex. Es importante que puedan tomar los pasos como una guía en la meditación pero que sepan que pueden dejarse fluir y adaptarla a su manera, a lo que vayan sintiendo en el momento. 
                                    <br />
                                    <br/>
                                    <span>Qué se disfruten,</span>
                                    <br/>
                                    <span>El equipo de WeSex 💜</span>
                            </Text2>
                    </Row>
            </Container>
            <Notificar2 message='¡ Notificar que finalizamos el desafío !' 
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}&prefill_Nombre+Desafio=${challengeName}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}&prefill_Nombre+Desafio=${challengeName}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default Tantra1;