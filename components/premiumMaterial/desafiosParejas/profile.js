
import React, { useEffect, useState, useRef } from 'react';
import styled from "@emotion/styled";
import { Card, CardHeader, Collapse, CardBody } from "reactstrap";
import Notificar2 from "./universals/notificar2";
import ArrowBack from './universals/arrowBack';
import { useRouter } from 'next/router';
import Feedback from './universals/feedback';
import { get_couple } from '../../../requests/premiumService';

//

const Header = styled.div`
    display: flex;
    align-items: center; /* Vertically center the items */
    padding: 0 1rem;
    
`;

const Background = styled.div`
    background-color: var(--green);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 0rem 25rem 0rem 25rem;
    z-index: 1;
    @media (max-width: 540px) {
        height: 100%;
        padding: 0rem;
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

// const WeSexText = styled.div`
//   position: absolute; /* Position the text absolutely within the container */
//   color: var(--green); /* Text color */
//   font-size: 24px; /* Font size */
//   font-weight: bold; /* Font weight */
//   pointer-events: none; /* Ensure the text doesn't block interaction with elements below */
//   font-family: "Averia Libre", sans-serif;
//   padding: 8rem;
//   z-index: 0;


//   /* Generate random positions */
//   top: ${Math.random() * 100}%; /* Random percentage for top position */
//   left: ${Math.random() * 100}%; /* Random percentage for left position */

//   /* You can add more styling here as needed */
// `;

const Border = styled.div`
    background-color: var(--green);
    border: 3px solid white; /* Add a white border */
    margin: 2rem 10rem 2rem 10rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    padding: 1rem;
    @media (max-width: 540px) {
        border: 0px solid white; /* Add a white border */
        padding: 0rem;
        margin: 0rem;
        border-radius: 0px;
    
    }
`;

const Logo = styled.img`
    height: 150px;
    
    padding: 1rem;
    filter: invert(100%);
`;


const Title = styled.div`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
`;

const SubTitle= styled.div`
    // width: 100%;
    // font-family: "Karla", sans-serif;
    // font-size: 1.7rem;
    // font-weight: bold;
    // text-align: center;
    // background-color: var(--violet);
    // padding: 1rem;

    background-image: url("/img/landing/cta-bg.webp");
    // background-color: var(--violet);
    height: 9vh;
    font-size: 1.5rem;
    width: 100%;
    font-weight: bold;
    border-radius: 20px; /* Apply border-radius to all corners */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Increased spread and blur for more shadow */

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    
`;

const Text = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: justify;
    padding-left: 2rem;
    padding-right: 2rem;

    span {
        background-color: var(--violet);
    }
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
`;

const SelectorButton = styled.select`
    border-radius: 0rem;
    padding: 1rem 1rem 1rem 1rem;
    
`;

const ContainerInstructions = styled.div`
    text-align: justify
    // justify-content: center;
    font-family: "Karla", sans-serif;
    padding: 2rem;
    font-size: 1.5rem;
    color: black;
    border-radius: 2rem;
    background-color: white;
    width: 80%;
    @media (max-width: 540px) {
        width: 90%;
        text-align: justify
    }
`;

const ContainerImage = styled.div`
    
    border-radius: 2rem;
    background-color: var(--green);
    height: 20%;
    width: 40%;
    margin: 2rem;
    @media (max-width: 540px) {
        height: 20%;
        width: 90%;
    }
    
`;

const PositionImg = styled.img`
    border-radius: 2rem;
`;

const Button = styled.a`
    
    color: var(--green);
    background-color: white;
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.5rem;
    border-radius: 30px;

    &:hover {
        color: var(--violet); /* Change the color on hover */
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

const obtenerAccionAleatoria = () => {
    const acciones = [
      " y el que presionó este botón se venda los ojos.",
      "y el que no presionó se venda los ojos.",
      "y sincronicen su respiración.",
      "con mucho contacto visual.",
      "con susurros atrevidos de por medio o “dirty talk”."
    ];
  
    // Genera un índice aleatorio dentro del rango de opciones
    const indiceAleatorio = Math.floor(Math.random() * acciones.length);
  
    // Retorna la acción aleatoria
    return acciones[indiceAleatorio];
  };



const Profile = () => {

    const [coupleName, setCoupleName] = useState("");
    const [coupleData, setCoupleData] = useState(null);
    

    const router = useRouter();

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);
    const [urlDiagnostic, setUrlDiagnostic] = useState(null);
    const [lastDateDiagnostic, setLastDateDiagnostic] = useState(null);

    const [member1, setMember1] = useState(null);
    const [member2, setMember2] = useState(null);


    useEffect(() => {
        if (router.isReady){
            
          if (router.query.origin) {
            setCoupleName(router.query.origin);
            setIsOriginRoute(true);
            setOrigin(router.query.origin);
          }
        }
      }, [router.isReady, isOriginRoute]);

      useEffect(() => {
        const fetchData = async () => {
          const response = await get_couple(coupleName);
          if (response.data.inactive){
            toast.error('Tu subscripción no esta activa. Contactate con nosotros si deseas re-activarla y seguir donde dejaste tu viaje por los desafios!!');
            router.push('/premium-material/desafios-para-parejas');
          } else {
            setCoupleData(response.data);
            if (response.data.graphImage && response.data.graphImage.key){
                setUrlDiagnostic(response.data.graphImage.key);
                setLastDateDiagnostic(response.data.graphUpdatedAt);
            }
            
          }
        };
        fetchData();
      }, [coupleName]);

      console.log("Data commming");
      console.log(coupleData);

    const handleClick = () => {
        freshpaint.track("BUTTON - SOLICITAR NUEVO DIAGNÓSTICO");
        router.push(`https://wa.me/5491140678698?text=Hola!%20Queremos%20solicitar%20un%20nuevo%20diagnóstico`);
    };
    
    return(
        <Background>
            <Border>
            <Header>
                <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`} color="violet"/>
                <TitleWeSex>WeSex</TitleWeSex>
                <Feedback challengeName={"Penetración"}/>
            </Header>
            {/* <Logo src='/img/challenges/ProfileCouple.png' />
            
            <Title>{origin}</Title> */}
            <SubTitle>DIAGNÓSTICO DE PAREJA</SubTitle>
            <ContainerImage>
                {urlDiagnostic !== null ? (
                    <PositionImg src={`https://we-sex-premium.s3.us-east-2.amazonaws.com/${urlDiagnostic}`} />
                ) : (
                    // <PositionImg src="/img/challenges/noDiagnostic2.jpeg" />
                    <>
                        <div style={{fontFamily: "Karla", fontWeight: "bold"}}>Aún no tienen diagnóstico.</div>
                        <div style={{fontFamily: "Karla", fontWeight: "bold", fontSize: "1.4rem"}}>Soliciten uno con el botón de &quot;Solicitar nuevo diagnóstico&quot;.</div>
                    </>
                )}
            </ContainerImage>
            {lastDateDiagnostic !== null ? (
                    <Text>{`Último diagnóstico realizado el ${lastDateDiagnostic}`}</Text>
                ) : (
                    <Text></Text>
                )}
   
            
            <SelectorButtonContainer>
                    <Button onClick={handleClick}>Solicitar nuevo diagnóstico</Button>
            </SelectorButtonContainer>
            <ContainerInstructions>
                ¿Qué significa cada área?
                <br/>
                <br/>
                <ul>
                    <li>
                        <strong>Área comunicación:</strong> Esta área se centra en la interacción verbal y no verbal entre la pareja. Implica la capacidad de expresar pensamientos, sentimientos, preocupaciones y necesidades de manera abierta y efectiva, así como escuchar activamente al otro con empatía y comprensión. Valora las reacciones en discusiones y la concreción de promesas.
                    </li>
                    <li>
                        <strong>Área de control:</strong> Refiere a la gestión de las decisiones, acciones y límites en la relación. Implica establecer acuerdos, respetar la autonomía del otro, evitar comportamientos controladores y mantener un equilibrio saludable en la toma de decisiones conjuntas.
                    </li>
                    <li>
                        <strong>Área sexual:</strong> Engloba la intimidad física y emocional entre la pareja. Incluye la comunicación abierta sobre preferencias, la satisfacción sexual mutua, la conexión emocional durante la intimidad y la disposición para explorar y mantener una vida sexual saludable y satisfactoria.
                    </li>
                    <li>
                        <strong>Área de afecto:</strong> Se enfoca en la expresión y recepción de amor, afecto y cuidado en la relación. Comprende la demostración de aprecio, cariño, ternura y apoyo emocional hacia la pareja, promoviendo un ambiente de seguridad emocional y conexión afectiva.
                    </li>
                    <li>
                        <strong>Área de influencia:</strong> Hace referencia a la capacidad de cada miembro de la pareja para influir y ser influenciado por el otro en aspectos individuales y compartidos. Implica respetar las opiniones, valores y metas del otro, así como buscar un equilibrio en la toma de decisiones y la influencia mutua.
                    </li>
                    <li>
                        <strong>Área de satisfacción:</strong> Se relaciona con la percepción individual y compartida de la felicidad y la satisfacción en la relación. Incluye la evaluación de la calidad de la relación, la presencia de satisfacción emocional, la conexión y la presencia de objetivos compartidos y logros en común.
                    </li>
                </ul>
                </ContainerInstructions>
            <br/>
            <br/>
            </Border>
        </Background>
    )
};

export default Profile;