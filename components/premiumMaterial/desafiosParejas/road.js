import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import { get_couple } from "../../../requests/premiumService";

const HeaderContainer = styled.div`
  background-color: #ebe4f8;
`;



const Header = styled.div`
    background-image: url("/img/landing/cta-bg.webp");
    height: 10vh;
    width: 100%;
    font-weight: bold;
    border-radius: 20px; /* Apply border-radius to all corners */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Increased spread and blur for more shadow */
`;



const Title = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
    justify-content: center;

    @media (max-width: 540px){
        font-size: 2rem;
    }
`;

const SubTitle = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    justify-content: center;

    @media (max-width: 540px){
        font-size: 1.3rem;
    }
`;

const Background = styled.div`
    background-color: #ebe4f8;
    padding-top: 2rem;
    // background: white;
    text-align: center;
    height: 100vh;

    @media (min-width: 540px){
        padding: 0rem 10rem 20rem 10rem;
        height: 135vh;
    }

    @media (max-width: 540px){
        padding: 0rem 1rem 20rem 1rem;
        height: 100vh;
    }
`;

const ChallengesAndDosisContainer = styled.div`
    // border: 2px solid #ff0000; /* Replace #ff0000 with the color you want */
    display: flex;
    flex-direction: row;
    height: 100%; /* Use full height */
   
    /* Other CSS styles for your container */
    
`;

const ChallengesContainer = styled.div`
    // border: 2px solid black;
    flex: 2;
    height: 100%; /* Use full height */

    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align at the top */
    align-items: center; /* Center horizontally */
    
   

;`

const ImageToDoChallenge = styled.img`
    height: 15%;
    width: 11%;
    padding: 2rem;

    @media (max-width: 540px){
        height: 20%;
        width: 32%;
        padding: 0.9rem;
    }
`;

const ImageStartoDoChallenge = styled.img`
    height: 12%;
    width: 9%;
    padding: 0.5rem;
    border-radius: 50%; /* Ensures the image itself is round */

    /* Apply box-shadow for a rounded shadow */
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), inset 3px 3px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 540px){
        height: 20%;
        width: 32%;
        padding: 0.5rem;
    }
`;

const ImageDoneChallenge = styled.img`
    height: 15%;
    width: 11%;
    padding: 2rem;

    @media (max-width: 540px){
        height: 20%;
        width: 32%;
        padding: 0.9rem;
    }
`;

const ImageDoneChallengeCounter = styled.img`
    height: 12%;
    width: 11%;
    padding: 2rem;

    @media (max-width: 540px){
        height: 37%;
        width: 37%;
        padding: 0.9rem;
    }
`;

const ImageDoneChallengeCounterNumber = styled.div`
  color: black;
  font-size: 1.5rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;

  @media (max-width: 540px){
    font-size: 1.3rem;
  }
`;

const DosisContainer = styled.div`
    // border: 2px solid green;
    flex: 1;
    height: 100%; /* Use full height */

    display: flex;
    flex-direction: column;
    justify-content: center; /* Align at the top */
    align-items: center; /* Center horizontally */
 
`;

const ImageDosis = styled.img`
    height: 8%;
    width: 13%;
    padding: 1rem;
    transform: rotate(0deg);

    @media (max-width: 540px){
        height: 10%;
        width: 38%;
        padding: 0.9rem;
    }
`;

const ImageDosisCounter = styled.img`
    height: 6%;
    width: 6%;
    padding: 1rem;
    transform: rotate(0deg);

    @media (max-width: 540px){
        height: 31%;
        width: 31%;
        padding: 0.9rem;
    }
`;

const ImageDosisCounterNumber = styled.div`
  color: black;
  font-size: 1.5rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;

    @media (max-width: 540px){
      font-size: 1.3rem;
    }
`;

const ImageDosisNext = styled.img`
    height: 8%;
    width: 13%;
    padding: 0.5rem;
    transform: rotate(0deg);

    border-radius: 45%; /* Ensures the image itself is round */
    /* Apply box-shadow for a rounded shadow */
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), inset 3px 3px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 540px){
        height: 10%;
        width: 38%;
        padding: 0.5rem;
    }
`;


const PopupCard = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
`;

const PopupDialog = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px 10px 0 0; /* Apply border-radius only to top corners */
  width: 100%;
  height: 40%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;


  /* Set maximum height and enable scrolling */
  max-height: 80vh;
  overflow-y: auto;

  /* Position the title at the top */

  
  justify-content: flex-start; /* Align title at the top */

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }

  @media (min-width: 768px) {
    padding: 4rem 4rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PopUpTitle = styled.div`
  color: black;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const PopUpSubTitle = styled.div`
  color: black;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 1.6rem;
`;


const PopUpButton = styled.a`
  // background-color: #5bcb06;
  background-color: var(--violet);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;
  margin-top: 20px;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const PopUpDone = styled.div`
  color: white;
  // background-color: #5bcb06;
  background-color: var(--violet);
  font-family: "Karla", sans-serif;
  font-weight: bold;
  padding: 0.4rem;
  font-size: 1.8rem;
`;

const PopUpToDo = styled.div`
  color: black;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  padding: 0.4rem;
  font-size: 1.8rem;
`;

const PopUpDoAnyways = styled.div`
    // color: #5bcb06;
    color: var(--violet);
    font-family: "Karla", sans-serif;
    font-weight: bold;
    padding: 0.4rem;
    font-size: 1.8rem;
    text-decoration: underline; // Add this line to underline the text
    cursor: pointer; // Add this line to change the cursor to a pointer on hover
`;

const PopupContainer2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog2 = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton2 = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InfoText = styled.div`
    color: black;
    font-size: 1.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
`;

const Learning = styled.div`
      font-style: italic;
      color: black;
      font-family: "Karla", sans-serif;
      font-weight: bold;
      text-align: left;
      align-items: left;
      justify-content: left;
      
      span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
        
    }
`;



const Level = styled.div`
  color: black;
  font-size: 1.5rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  padding-left: 3rem;
  @media (max-width: 540px){
    padding-left: 2rem;
    font-size: 1.2rem;
  }

  span {
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.1rem 0.5rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
}
  
`;

const ContainerData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  /* Additional styles for container if needed */
    
`;

const SectionContainer = styled.div`
display: flex;
align-items: center;
flex: 1; /* Allow the container to take available space */
justify-content: center; /* Center its content horizontally */
`;


const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 48px; 
  font-weight: bold;
  font-family: "Averia Libre", sans-serif;
`;

const ClockSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  color: var(--violet); 
`;

const ClockSeparator = styled.span`
    color: var(--violet);
`;

const ClockTimer = ({ timestamp, startTime }) => {
  const targetTime = new Date(new Date(timestamp).getTime() + 60 * 60 * 24 * 1000);
  const currentTime = new Date(startTime)
  const timeDiff = targetTime - currentTime;

  const [displayTime, setDisplayTime] = useState(timeDiff);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayTime(prevTime => prevTime - 1000);

      if (displayTime <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timestamp]);

  const hours = Math.floor((displayTime / (1000 * 60 * 60)));
  const minutes = Math.floor((displayTime / (1000 * 60)) % 60);
  const seconds = Math.floor((displayTime / 1000) % 60);

  return (
    <ClockContainer>
      <ClockSegment>
        <div>{hours < 10 ? `0${hours}` : hours}</div>
      </ClockSegment>
      <ClockSeparator>:</ClockSeparator>
      <ClockSegment>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
      </ClockSegment>
      <ClockSeparator>:</ClockSeparator>
      <ClockSegment>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </ClockSegment>
    </ClockContainer>
  );
};

const ClockOrSubmit = ({ timestamp, startTime, onClick }) => {
  const targetTime = timestamp ?  new Date(new Date(timestamp).getTime() + 60 * 60 * 24 * 1000) : null;
  const currentTime = new Date(startTime)
  const timeDiff = targetTime ? targetTime - currentTime : null;

  const [timeRemaining, setTimeRemaining] = useState(timeDiff);

  useEffect(() => {
    if (targetTime) {
      const timer = setInterval(() => {
        const newTimeDiff = targetTime - new Date(Date.now());
        setTimeRemaining(newTimeDiff);
        if (newTimeDiff <= 0) {
          clearInterval(timer);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timestamp]);

  if (timeRemaining !== null && timeRemaining > 0) { 
    return (
      <ClockTimer timestamp={timestamp} startTime={startTime} />
    );
  }

  return (
    <PopUpButton type="submit" onClick={onClick}>¡ Comenzar 😁 !</PopUpButton>
  );
};

const PopupContent2 = () => {
  return (
    <>
      <br />
      <InfoText>
        Terminos y condiciones: al acceder a &quot;desafios para parejas&quot; aceptas los <a style={{fontSize: "1.5rem"}} href={'/privacy-policy'}><span>términos y condiciones</span>.</a>
      </InfoText>
      
      {/* Add more content as needed */}
    </>
  );
};

const GetMargin = (index) => {
  const sequence = [
    {MR: '0px', ML: '0px'}, 
    {MR: '60px', ML: '0px'}, 
    {MR: '90px', ML: '0px'}, 
    {MR: '0px', ML: '0px'}, 
    {MR: '0px', ML: '50px'}
  ]; 
  const sequenceIndex = index % sequence.length;
  return sequence[sequenceIndex];
};

const Popup = ({ 
    isVisible, 
    onClose, 
    title = '', 
    subtitle = '', 
    link = '', status, 
    type, index, 
    coupleMembers, 
    challenges, 
    pills, 
    timeStamps 
  }) => {
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

    const handleSubmit = () => {
        router.push(`${link}?origin=${origin}&type=${type}&index=${index}&members=${coupleMembers.join('-')}`);
    }

    const handleClose = () => {
      onClose();
    };
  
    return isVisible ? (
      <PopupCard onClick={handleClose}>
        <PopupDialog onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          {status === 'next' && type=== 'challenge' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <ClockOrSubmit timestamp={timeStamps ? timeStamps.challengeLastUpdate : null} startTime={timeStamps ? timeStamps.currentTime : null} onClick={handleSubmit} />
          </>
          : null}
          {status === 'next' && type === 'pill' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <ClockOrSubmit timestamp={timeStamps ? timeStamps.pillLastUpdate : null} startTime={timeStamps ? timeStamps.currentTime : null} onClick={handleSubmit} />
          </>
          : null}
          {status === 'done' && type === 'challenge' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <PopUpDone style={{marginTop: "1rem"}}> YA COMPLETASTE ESTE DESAFÍO :)</PopUpDone>
          <PopUpDoAnyways onClick={handleSubmit}>Quiero verlo de todas formas</PopUpDoAnyways>
          <br/>
          <Learning style={{marginTop: "1rem"}}> <span>Aprendizaje de pareja: </span>
       
          {challenges[0][index].comment}</Learning>
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
          {status === 'done' && type === 'pill' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <PopUpDone style={{marginTop: "1rem"}}> YA COMPLETASTE ESTA DOSIS :)</PopUpDone>
          <PopUpDoAnyways onClick={handleSubmit}>Quiero verlo de todas formas</PopUpDoAnyways>
          <br />
          <Learning style={{marginTop: "1rem"}}><span>Aprendizaje de pareja: </span>{pills[0][index].comment}</Learning>
          
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
          {status === 'to_do' && type === 'challenge' ? 
          <>
          <PopUpToDo> DEBES COMPLETAR TU ÚLTIMO DESAFIO PARA PODER DESBLOQUEAR EL PRÓXIMO</PopUpToDo>
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
          {status === 'to_do' && type === 'pill' ? 
          <>
          <PopUpToDo> DEBES COMPLETAR TU ÚLTIMA DOSIS PARA PODER DESBLOQUEAR LA PRÓXIMO</PopUpToDo>
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
        </PopupDialog>
      </PopupCard>
    ) : null;
  };
  
  
  

const couplesData = {
    "all": {
      subtitle: "All unlocked",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "done", ML: "90px", MR: "0px", title: "ZONAS ERÓGENAS", subtitle: ".", link: "/premium-material/desafios-para-parejas/zonas-erogenas",},
        { status: "done", ML: "0px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "done", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "done", ML: "40px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "done", ML: "8px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "done", ML: "80px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "done", ML: "0px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "done", ML: "0px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "done_dosis", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "done_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "done_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "done_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "done_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "done_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "meli-ariel": {
      subtitle: "Meli y Ariel",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "next", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "to_do", ML: "90px", MR: "0px", title: "ZONAS ERÓGENAS", subtitle: ".", link: "/premium-material/desafios-para-parejas/zonas-erogenas",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "to_do", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "40px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "8px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "80px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "0px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "next", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "pablo-victoria": {
      subtitle: "Pablo y Victoria",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "next", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "to_do", ML: "90px", MR: "0px", title: "ZONAS ERÓGENAS", subtitle: ".", link: "/premium-material/desafios-para-parejas/zonas-erogenas",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "to_do", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "40px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "80px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "80px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "0px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "next", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "silvia-sergio": {
      subtitle: "Silvia y Sergio",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "done", ML: "90px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "done", ML: "90px", MR: "0px", title: "COMUNICACIÓN", subtitle: "Repensar cuál es la responsabilidad que tuvo en la generación del conflicto.", link: "/premium-material/desafios-para-parejas/comunicacion",},
        { status: "done", ML: "0px", MR: "0px", title: "MAPA DE AMOR", subtitle: "Un trabajo de construcción que sostiene el vínculo.", link: "/premium-material/desafios-para-parejas/mapa-amor",},
        { status: "next", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "0px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "40px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "80px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "0px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "done_dosis", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "next", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "gise-luis": {
      subtitle: "Gise y Luis",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "MAPA DE AMOR", subtitle: "Un trabajo de construcción que sostiene el vínculo.", link: "/premium-material/desafios-para-parejas/mapa-amor",},
        { status: "next", ML: "90px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "to_do", ML: "0px", MR: "0px", title: "ZONAS ERÓGENAS", subtitle: ".", link: "/premium-material/desafios-para-parejas/zonas-erogenas",},
        { status: "to_do", ML: "0px", MR: "50px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "to_do", ML: "0px", MR: "0px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "4px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "80px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "0px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "60px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "done_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "next", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "mauro-ari": {
      subtitle: "Mauro y Ari",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "done", ML: "90px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "done", ML: "0px", MR: "0px", title: "SEXO VIRTUAL", subtitle: "¿Quién dijo que a la distancia baja la calentura?", link: "/premium-material/desafios-para-parejas/virtual",},
        { status: "next", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "0px", MR: "0px", title: "ZONAS ERÓGENAS", subtitle: ".", link: "/premium-material/desafios-para-parejas/zonas-erogenas",},
        { status: "to_do", ML: "4px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "80px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "0px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "0px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "60px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "next", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "caro-alvaro": {
      subtitle: "Caro y Alvaro",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "done", ML: "90px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "done", ML: "0px", MR: "0px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "done", ML: "0px", MR: "50px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "next", ML: "0px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "next", ML: "4px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "to_do", ML: "80px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "to_do", ML: "0px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "done_dosis", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "next", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "julia-lucho": {
      subtitle: "Julia y Lucho",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión, el deseo y el contacto físico.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        { status: "done", ML: "90px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "/premium-material/desafios-para-parejas/quiero-lh-nlh",},
        { status: "done", ML: "0px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "done", ML: "0px", MR: "50px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "done", ML: "0px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "done", ML: "4px", MR: "0px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "done", ML: "80px", MR: "0px", title: "MÚSICA", subtitle: "Hoy los queremos llevar en un viaje por sus sentidos.", link: "/premium-material/desafios-para-parejas/musica",},
        { status: "next", ML: "80px", MR: "0px", title: "TANTRA 1", subtitle: "Basado en una meditación en duplas", link: "/premium-material/desafios-para-parejas/tantra1",},
      ],
      dosis: [
        { status: "done_dosis", title: "Agradecimientos Diarios", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "done_dosis", title: "Respiración Sincronizada", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis5" },
        { status: "next", title: "Contacto Ocular", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        { status: "to_do_dosis", title: "Primera vez", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Dosis de calentura", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis4" },
        { status: "to_do_dosis", title: "Lectura Erótica", subtitle: " ", link: "/premium-material/desafios-para-parejas/dosis/dosis6" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    "flujo_2": {
      subtitle: "Flujo 2",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "HABLEMOS DE SEXO", subtitle: "Una de las claves para una relación sana, tanto sexual como vincular, es la comunicación.", link: "/premium-material/desafios-para-parejas/hablemos-de-sexo",},
        { status: "done", ML: "0px", MR: "0px", title: "MAPA DE AMOR", subtitle: "Es un trabajo de construcción que sostiene el vínculo.", link: "/premium-material/desafios-para-parejas/mapa-amor",},
        { status: "next", ML: "0px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Pasar un momento divertido juntos, fortaleciendo la conexión y compartiendo risas.", link: "/premium-material/desafios-para-parejas/cena-masajes",},
        
        { status: "to_do", ML: "0px", MR: "0px", title: "MASTURBACIÓN", subtitle: "Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia hermosa.", link: "/premium-material/desafios-para-parejas/masturbacion",},
        { status: "to_do", ML: "40px", MR: "0px", title: "SEXO ORAL", subtitle: "El plan se llama PPPC: Pizza, Peli, Pete y Clete.", link: "/premium-material/desafios-para-parejas/sexo-oral",},
        { status: "to_do", ML: "0px", MR: "0px", title: "PENETRACIÓN", subtitle: "Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes", link: "/premium-material/desafios-para-parejas/penetracion",},
        { status: "to_do", ML: "0px", MR: "50px", title: "EDGING", subtitle: "El orgasmo será mucho más intenso que si hubiesen orgasmeado al principio del ejercicio.", link: "/premium-material/desafios-para-parejas/edging",},

        { status: "to_do", ML: "80px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Vamos a ayudarlos a experimentar y llevar a cabo fantasías y actos sexuales.", link: "//premium-material/desafios-para-parejasquiero-lh-nlh",},
        { status: "done", ML: "60px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "¿Te gustaría que se disfrazarte de abogado, profesor, médico?", link: "/premium-material/desafios-para-parejas/juego-roles",},
      ],
      dosis: [
        { status: "done_dosis", title: "Dosis 1", subtitle: "Descripción de la dosis 1", link: "/premium-material/desafios-para-parejas/dosis/dosis1" },
        { status: "next", title: "Dosis 2", subtitle: "Descripción de la dosis 2", link: "/premium-material/desafios-para-parejas/dosis/dosis2" },
        { status: "to_do_dosis", title: "Dosis 3", subtitle: "Descripción de la dosis 3", link: "/premium-material/desafios-para-parejas/dosis/dosis3" },
        // Add more dosis data...
      ],
      termsAndConditionsAccepted: false,
      // Add more data for this couple
    },
    // Add data for other couples
  };

  const ChallengeImage = ({ data, index, onClick }) => {
    const { status, challenge  } = data;
    const { title, subtitle, link } = challenge;
    const { ML, MR } = GetMargin(index);
  
    // Map the challenge status to the corresponding image component
    const imageComponents = {
      done: (
        <ImageDoneChallenge
          src="/img/challenges/done_wesex.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status, index })}
        />
      ),
      next: (
        <ImageStartoDoChallenge
          src="/img/challenges/next.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status, index })}
        />
      ),
      to_do: (
        <ImageToDoChallenge
          src="/img/challenges/to_do_wesex.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status, index })}
        />
      ),
    };
  
    // Render the appropriate image component based on the status
    return imageComponents[status] || null;
  };

  const DosisImage = ({ data, index, onClick }) => {
    const { status, pill } = data;
    const { title, link } = pill;
  
    const imageComponents = {
      done: (
        <ImageDosis
          src="/img/challenges/WeSex_PastiColor.png"
          onClick={() => onClick({ title, link, status, index })}
        />
      ),
      next: (
        <ImageDosis
          src="/img/challenges/WeSex_PastiColor.png"
          onClick={() => onClick({ title, link, status, index })}
        />
      ),
      to_do: (
        <ImageDosis
          src="/img/challenges/WeSex_PastiNoColor.png"
          onClick={() => onClick({ title, link, status, index })}
        />
      ),
    };
  
    return imageComponents[status] || null;
  };
  
  const Road = () => {
    const router = useRouter();
    const [coupleName, setCoupleName] = useState("");
  
    const [coupleData, setCoupleData] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false); // State for controlling the popup
    const [popupContent, setPopupContent] = useState(null); 
    const [showPopup, setShowPopup] = useState(false);
    const [challengesDone, setChallengesDone] = useState(0);
    const [totalChallenges, setTotalChallenges] = useState(0);
    const [dosisDone, setDosisDone] = useState(0);
    const [totalDosis, setTotalDosis] = useState(0);

    useEffect(() => {
      if (router.isReady){
        if (router.query.origin) {
          setCoupleName(router.query.origin);
        }
      }
    }, [router.isReady]);

    const handleStartChallengeClick = ({ title, subtitle, link, status, index }) => {
        if (title && subtitle && link) {
          setPopupContent({ title, subtitle, link, status, type: 'challenge', index: index }); // Store the challenge data in state
          setPopupVisible(true); // Open the popup
        }
      };

    const handleStartDosisClick = ({ title, link, status, index }) => {
      if (title && link) {
        setPopupContent({ title, link, status, type: 'pill', index: index }); // Store the dosis data in state
        setPopupVisible(true); // Open the popup
      }
    };
    
    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleWarningSymbolClick = () => {
      setShowPopup(true); // Show the warning popup when the warning symbol is clicked
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await get_couple(coupleName);
        setCoupleData(response.data);
    
        // Calculate number of challenges in 'done' status and total available
        const responseChallengesDone = response.data.challenges.filter(
          (challenge) => challenge.status === 'done'
        ).length;
        setChallengesDone(responseChallengesDone);
        const responseTotalChallenges = response.data.challenges.length;
        setTotalChallenges(responseTotalChallenges);
    
        // Calculate number of dosis in 'done' status and total available
        const responseDosisDone = response.data.pills.filter(
          (pill) => pill.status === 'done'
        ).length;
        setDosisDone(responseDosisDone);
        const responseTotalDosis = response.data.pills.length;
        setTotalDosis(responseTotalDosis);
    
        console.log('Challenges Done:', challengesDone);
        console.log('Total Challenges:', totalChallenges);
        console.log('Dosis Done:', dosisDone);
        console.log('Total Dosis:', totalDosis);
      };
    
      fetchData();
    }, [coupleName]);
    
    
    return (
        <>
          <HeaderContainer>
            <ContainerData>
              <Level><span>NIVEL: CALENTAMIEMTO</span></Level>

              <SectionContainer>
                <ImageDoneChallengeCounter src="/img/challenges/done_wesex.png" />
                <ImageDoneChallengeCounterNumber>{`${challengesDone}/${totalChallenges}`}</ImageDoneChallengeCounterNumber>
              </SectionContainer>

              <SectionContainer>
              <ImageDosisCounter src="/img/challenges/WeSex_PastiColor.png" />
              <ImageDosisCounterNumber>{`${dosisDone}/${totalDosis}`}</ImageDosisCounterNumber>
              </SectionContainer>
            </ContainerData>

            <Header>
              
              {coupleData ? (
                <Title>Desafíos {`${coupleData.coupleName}`}</Title>
              ) : (
                <Title>Loading...</Title> // Or any loading indicator
              )}
              {coupleData ? (
                <SubTitle>{coupleData.coupleMemberOne} y {coupleData.coupleMemberTwo}</SubTitle>
              ) : (
                <SubTitle>Loading...</SubTitle> // Or any loading indicator
              )}
            </Header>
          </HeaderContainer>
          <Background>
          <div onClick={handleWarningSymbolClick} style={{textAlign: "right", padding: "0.5rem"}}>ℹ️</div>
            <ChallengesAndDosisContainer>
              <ChallengesContainer>
                {coupleData ? (
                coupleData.challenges.map((challenge, index) => (
                    <ChallengeImage 
                    key={index} 
                    data={challenge} // Provide the entire challenge object as a prop
                    index={index}
                    onClick={handleStartChallengeClick} 
                    />
                ))
                ) : (
                <div>No Challenges Available</div>
                )}
              </ChallengesContainer>
              <DosisContainer>
                {coupleData ? (
                  coupleData.pills.map((dosis, index) => (
                    <DosisImage
                      key={index}
                      data={dosis} // Provide the entire dosis object as a prop
                      index={index}
                      onClick={handleStartDosisClick}
                    />
                  ))
                ) : (
                  <div>No Dosis Available</div>
                )}
              </DosisContainer>
            </ChallengesAndDosisContainer>
          </Background>
        
          <Popup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            status = {popupContent ? popupContent.status : ''}
            title={popupContent ? popupContent.title : ''}
            subtitle={popupContent ? popupContent.subtitle : ''}
            link={popupContent ? popupContent.link : ''}
            type={popupContent ? popupContent.type : ''}
            index={popupContent ? popupContent.index : -1}
            coupleMembers={coupleData ? [coupleData.coupleMemberOne, coupleData.coupleMemberTwo] : []}
            // learnings={coupleData ? [coupleData.challenges[popupContent.index].comment] : []}
            challenges={coupleData ? [coupleData.challenges] : []}
            pills={coupleData ? [coupleData.pills] : []}
            timeStamps={coupleData? coupleData.timeStamps : null}
        />
        {/* Add the WarningPopup component here */}
       
        {showPopup && (
                <PopupContainer2>
                    <PopupDialog2>
                        <CloseButton2 onClick={() => setShowPopup(false)}>✕</CloseButton2>
                        <PopupContent2 />
                    </PopupDialog2>
                </PopupContainer2>
            )}
        </>
      );
    };
  
export default Road;