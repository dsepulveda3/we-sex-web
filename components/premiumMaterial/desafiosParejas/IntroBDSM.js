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

const IntroBDSM = () => {
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
                        <SubTitle><span>Intro al BDSM</span></SubTitle>
                    </ContentTitle>
                    {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                    <Col xs="12" lg="12" md="3">
                            <Card style={{margin:"30px 10px 10px 10px"}}>
                                <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                                    <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                                    <TitleQuestion>¿Que es el BDSM?</TitleQuestion>
                                </div>
                                <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                                </CardHeader>
                                <Collapse isOpen={isOpen}>
                                    <CardBody>
                                        <AnswerQuestion>
                                            El BDSM es una sigla que representa un conjunto de prácticas sexuales y eróticas que involucran una amplia gama de actividades y roles. Las letras en BDSM representan las siguientes palabras:
                                            <ol>
                                                <li>
                                                    <strong>Bondage:</strong> Se refiere a la restricción física o inmovilización de una persona a través de ataduras, como cuerdas, esposas, o cualquier otro tipo de restricción.
                                                </li>
                                                <li>
                                                    <strong>Disciplina:</strong> Implica la imposición de reglas, castigos, o recompensas en el contexto de una relación BDSM. Esto puede incluir juegos de rol donde una persona asuma el rol de dominante y la otra el de sumisa.
                                                </li>
                                                <li>
                                                    <strong>Submisión:</strong> Implica que una persona se somete voluntariamente a la autoridad o el control de otra persona en una relación BDSM. La persona sumisa acuerda seguir las órdenes o deseos del dominante.
                                                </li>
                                                <li>
                                                    <strong>Masoquismo:</strong> Se refiere a la obtención de placer o excitación sexual a través de la experimentación con el dolor o la humillación consensuada. Esto puede incluir prácticas como el spanking/azotes o la utilización de ciertos juguetes sexuales.
                                                </li>
                                            </ol>
                                        </AnswerQuestion>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </Col>
                    <Text >
                        Vamos a los bifes ..
                        <br />
                        <br />
                        Hoy queremos llevarlos por una introducción a esta práctica, para que puedan saborear un poquito (o mucho) de este mundo.
                        <br />
                        <br />
                        Todo tiene que ser bajo el consentimiento de ambos. Vayan de a poco y midiendo la intensidad según su comodidad.
                        <br />
                        <br />
                        ¿Qué van a necesitar para este encuentro de BDSM casero?
                        <br />
                        <br />
                        - Esposas: Si no tienen pueden usar una corbata.
                        <br />
                        - Antifaz: si no tienen pueden usar una remera/camiseta.
                        <br />
                        <br />
                        La corbata la van a usar para inmovilizar las manos de su pareja. Si quieren inmovilizarla por completo, pueden usar otra para los pies. 
                        <br />
                        <br/>
                        Si prefieren usar esposas y no tienen, les dejamos este <a style={{textDecoration: "underline" }} href="https://www.savagesexshop.com.ar/productos/esposas-con-peluche-eroski/" target="_blank">link de nuestro sexshop amigo Savagesexshop</a> para adquirlas.
                        <br />
                        <br />
                        El antifaz o la remera la usarán para vendarle los ojos.
                        <br />
                        <br />
                        En esta introducción al BDSM, una persona será dominante, y la otra será sumisa. La persona sumisa se dejará llevar por la persona dominante, quien tendrá la responsabilidad de vendar, atar y cuidar a su pareja.
                        <br />
                        <br />
                        <span>Consentimiento:</span>
                        <br />
                        <br />
                        Antes de comenzar, escriban en un papel las cosas que están dispuestos a realizar y las cosas que no. En este acuerdo pueden agregar lo que deseen realizar, y solo implementarán las cosas con las que ambos estén de acuerdo.
                        <br />
                        <br />
                        Ejemplo: ¿Tirar del pelo, sí o no? - ¿Nalgadas, sí o no? ¿Con qué intensidad?
                        <br />
                        <br />
                        <span>Aftercare:</span>
                        <br />
                        <br />
                        Luego del encuentro, dense un espacio para bajar las revoluciones. Les recomendamos hacerse caricias, quedarse un rato abrazados y charlar sobre cómo se sintieron en la experiencia.


                        
                       
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
        
        <Notificar message='¡ Notificar que finalizamos el desafio !' url={`https://forms.gle/rE3d8UXN5rA6wyM39`}/>

        </Background>
      )}
    </section>
    )
}

export default IntroBDSM;