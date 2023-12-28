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

const BotonRandom = styled.a`
    background-color: var(--violet);
    color: white;
    border: none;
    border-radius: 10px; /* Make it rounded */
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
`;




const StreapDance = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const appRef = useRef(null); // Create a ref to hold the PIXI application

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
                        <Feedback challengeName={"Streap Dance"}/>
                    </Header>
                    <Row className="justify-content-between">   
                        <ContentTitle>
                            <Title>Desafío:</Title>
                            <SubTitle><span>Streap Dance</span></SubTitle>
                        </ContentTitle>
                        {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}

                        <Text>
                        ¡Así es! ¡Llegó el turno del streap dance!
                        <br/>
                        <br/>
                        No importa si eres de los que mueren de la vergüenza o de los más experimentados en la práctica de desvestirse, te vamos a contar cómo agregarle valor y personalidad a tu streaptease.
                        <br/>
                        <br/>
                        En el desafio de hoy, vamos a sortear quién se encargará de dar el streap dance, y quién de recibirlo ;)
                        </Text>
                        <Text style={{marginBottom: "0px"}}>
                            Presiona el botón antes de leer las instrucciones.
                            <br />
                            <br />
                            <BotonRandom onClick={chooseRandomName}>Botón sorteo</BotonRandom>
                            <br/>
                            <br/>
                            {chosenName && <div>Le toca a: {chosenName}</div>}
                        </Text>
                        <Text>
                            Tranqui, tenemos un paso a paso con varios tips para que la rompas toda. Léelos en secreto para sorprender a tu pareja 🤫🤭
                        </Text>
                        <Col xs="12" lg="12" md="3">
                            <Card style={{margin:"10px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    
                                    <TitleQuestion style={{marginLeft: '2rem'}}>Tips para streap dance 🔥</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                        <TextBombNormal style={{fontWeight: 'bold'}}>Primero que nada: créetela.</TextBombNormal>
                                        Tienes que sentirte la persona más sexy del planeta en ese preciso instante. Si dudas, la situación pierde erotismo y credibilidad. Eres hermosx, sobre todo para tu pareja 😊.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Planificar y prepararse suma: Ambienta el espacio con luz baja y/o velas.</TextBombNormal>
                                        Puedes imaginarte la situación, definir qué lugar ocupará cada uno en el espacio y ensayar algunos pasos frente al espejo.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Está bueno usar prendas con cierres y/o botones para que todo sea más lento.</TextBombNormal>
                                        Ir bajando el cierre o desabrochando cada botón lentamente le agrega erotismo.
                                        <br/>
                                        <br/>

                                        {/* <TextBombNormal style={{fontWeight: 'bold'}}>Si tienen lencería erótica, usenla.</TextBombNormal>
                                        Sino, les dejamos un link para adquirirla con descuento wesexer.
                                        <br/>
                                        <br/> */}

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Todo suma.</TextBombNormal>
                                        También suman los accesorios como la pluma o sogas para estimular la interacción, ampliar el espectro de la sensorialidad y elevar el nivel del juego.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Sugiere antes de mostrar.</TextBombNormal>
                                        Tómate el tiempo necesario para divertirte y divertir a tu pareja.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Te recomendamos empezar de espaldas.</TextBombNormal>
                                        Puedes bailar y hacer de cuenta que te vas a sacar una prenda para deternerte y hacerte desear.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Una vez que estés en ropa interior acércate.</TextBombNormal>
                                        Puedes corrertela antes de quitártela y permitir que el otrx espie.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Ve de a poco.</TextBombNormal>
                                        Ir estableciendo un leve contacto físico con tu pareja en el proceso de desvestirte también puede agregar excitación al acto.
                                        <br/>
                                        <br/>

                                        <TextBombNormal style={{fontWeight: 'bold'}}>Para lxs más tímidxs lo mejor es que la situación suceda de la manera más natural posible.</TextBombNormal>
                                        Los dos tips claves son  sacarte la ropa más lento que lo habitual y mantener contacto visual, hasta sentirte más cómodx con la práctica e ir soltandote. Déjate fluir y divertite.
                                        <br/>
                                        <br/>


                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                        <Text>
                        Pueden armarse una playlist con esos temas que los encienden o recurrir a la playlist wesexer😉. Recomendación especial de temas para streap tease: De la canción 6 a la 12  de nuestra playlist.
                        <br/>
                        <a href="https://open.spotify.com/playlist/6ilE8ByVM6EmT3TCOHu1uy">Ir a playlist WeSex</a>
                        </Text>
                    </Row>
                    <Row className="justify-content-between" style={{backgroundColor: "var(--green)", marginTop: "2rem", marginBottom: "2rem", padding: "1rem"}}>  
                        <Text2>
                            <span>Que disfruten,</span>
                            <br/>
                            <span>El equipo de WeSex.</span>
                        </Text2>
                </Row>
            </Container>
            
            <Notificar2 message='¡ Notificar que finalizamos el desafío !'
             url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pag6peUS2RF0hQT3S/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}`}
             url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pag6peUS2RF0hQT3S/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}`}/>
            </Background>
          )}
        </section>
      );
}
 
export default StreapDance;