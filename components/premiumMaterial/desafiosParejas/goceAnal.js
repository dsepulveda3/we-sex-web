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

const GoceAnal = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const names = ["Quien presiono este botón", "Quien NO presionó este botón"]; // Add the names you want to choose from
    const [chosenName, setChosenName] = useState("");
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const appRef = useRef(null); // Create a ref to hold the PIXI application
    const router = useRouter();
    const [challengeName, setChallengeName] = useState("Goce Anal");

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
                    <Feedback challengeName={"Goce Anal"}/>
                </Header>
                <Row className="justify-content-between">
                    <ContentTitle>
                        <Title>Desafío:</Title>
                        <SubTitle><span>Goce Anal</span></SubTitle>
                    </ContentTitle>
                    {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                    <Text >
                    Muchas personas se plantean si explorar su ano o no. La tendencia es a tener miedo al dolor y a las lesiones, algo parecido a lo que sucede en las primeras experiencias vaginales.
                    Hoy les vamos a dejar este paso a paso de la mejor forma de explorarlo:
                        <br />
                        <br />
                       
                        <ol>
                            <li>
                                <span>Charla previa:</span> Es clave que pregunten y expresen todo antes.
                            </li>
                            <li>
                                <span>Palabras de seguridad:</span> Funciona bien el semáforo. Detallen qué significa cada color. Por ejemplo, rojo significa parar el movimiento - no sacar para no lastimar. Amarillo indica ir más lento y verde significa que todo está bien.
                            </li>
                            <li>
                                <span>Calentura máxima:</span> Habrán notado que mientras más placer tengan en el cuerpo, el ano más se relaja, aún más después del orgasmo. Entonces, las primeras exploraciones deben tener esto en cuenta. No comiencen con el ano frío. Pueden empezar estimulando otras áreas del cuerpo y buscar relajarse. Empezar con masajes suele gustar mucho. 
                            </li>
                            <li>
                                <span>Lubricación:</span> No intenten meter nada sin lubricante extra. ¡Llenen de lubri todo lo que vayan a introducir así patina! 
                            </li>
                            <li>
                                <span>Penetración progresiva:</span> Vamos paso a paso. Significa ir introduciendo tamaños de menor a mayor.
                                <ol>
                                    <li>
                                        Primero: recomendamos que empiecen con masajes externos en la zona. Pueden hacerlo con toda la mano y también de a poco incorporar la lengua.
                                    </li>
                                    <li>
                                        Segundo: ir penetrando de a poco, solo un dedo con mucho lubricante. Si la persona refiere que se siente bien, pueden sumar el plug anal. 
                                    </li>
                                    <li>
                                        Tercero: pene/dildo. Acá es clave ir de menos a más. La persona penetrada tiene que ser quien maneje el ritmo. 
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <span>Por último SLOW SEX:</span> ¡Muy lento! No se crean todo lo que ven en la porno. Es como cuando van al gimnasio; si hacen todo demasiado rápido, se pueden lesionar el músculo. El esfínter anal es un músculo, así que suavecito es la clave. 
                            </li>
                        </ol>
                        
                        <br/>
                        <br/>
                        
                        <span>Tip extra final: Avancen la penetración en la exhalación. Así, cuando sueltan el aire, los músculos se relajan y es pura magia. Si coordinan ese avance lento mientras sueltan el aire, todo será más relajado, seguro y placentero.</span>
                       
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
            url_m1={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member1}&prefill_Nombre+Desafio=${challengeName}`}
            url_m2={`https://airtable.com/appVSREVOyy0SOY9u/pagXuvS4lqdA03OGz/form?prefill_Nombre+de+la+pareja=${origin}&prefill_Nombre+Miembro=${member2}&prefill_Nombre+Desafio=${challengeName}`}/>

        </Background>
      )}
    </section>
    )
}

export default GoceAnal;