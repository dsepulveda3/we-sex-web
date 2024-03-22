import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";
import { get_couple } from "../../../requests/premiumService";
import OtherChallenge from "./roadComponents/otherChallenge";
import { toast } from "react-toastify";
import Diagnostic from "./roadComponents/Diagnostic";
import InConstructionPopup from "./InConstructionPopup";
import ConfirmationPopup from "./ConfirmationPopup";
import Areas from "./roadComponents/areas";
import { accept_task } from "../../../requests/premiumService";

const HeaderContainer = styled.div`
  background-color: #ebe4f8;
  position: fixed;
  z-index: 999;
  width: 100%; /* Ensure the container spans the full width */

  justify-content: space-between; /* Align items with space between */
  padding: 0 10px;

  @media (max-width: 540px){
    padding: 0 5px;
    height: 14vh;
  }

`;

const StickyComponent = styled.div`
    height: 17vh;

    @media (max-width: 540px){
      height: 14vh;
  }
`;


const LevelBox = styled.div`
    background-color: var(--green);
    height: 5vh;
    font-size: 1.2rem;
    width: 100%;
    font-weight: bold;
    border-radius: 12px; /* Apply border-radius to all corners */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Increased spread and blur for more shadow */
`;

const LevelBoxContainer = styled.div`
  background-color: #ebe4f8;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;



const Header = styled.div`
    background-image: url("/img/landing/cta-bg.webp");
    height: 9vh;
    width: 100%;
    font-weight: bold;
    border-radius: 20px; /* Apply border-radius to all corners */
    display: flex;
    justify-content: space-between; /* Evenly distribute space between children */
    align-items: center; /* Vertically center content */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Increased spread and blur for more shadow */
`;

const Part1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto; /* Center horizontally */
`;

const ImageInfo = styled.img`
    height: 30%;
    filter: invert(100%);
    margin-right: 1rem;
`;


const Title = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 2.2rem;
    color: white;
    justify-content: center;

    @media (max-width: 540px){
        font-size: 1.8rem;
    }
`;

const SubTitle = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    color: black;
    font-weight: bold;
    font-size: 1.4rem;
    color: white;
    justify-content: center;

    @media (max-width: 540px){
        font-size: 1.2rem;
    }
`;

const Background = styled.div`
    background-color: #ebe4f8;
    padding-top: 2rem;
    // background: white;
    text-align: center;
    min-height: 100%;

    @media (min-width: 540px){
        padding: 0rem 10rem 20rem 10rem;
        min-height: 100vh;
    }

    @media (max-width: 540px){
        padding: 0rem 1rem 20rem 1rem;
        min-height: 100vh;
    }
`;

const ChallengesAndDosisContainer = styled.div`
    // border: 2px solid #ff0000; /* Replace #ff0000 with the color you want */
    display: flex;
    flex-direction: row;
    height: 100%; /* Use full height */
    justify-content: space-between;
   
    /* Other CSS styles for your container */
    
`;

const ChallengesContainer = styled.div`
    // border: 2px solid black;
    flex: 2;
    height: 100%; /* Use full height */
    margin-top: 2rem;

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

const ImageDoneChallengeDefinition = styled.img`
    height: 8%;
    width: 7%;
    padding: 0rem;

    @media (max-width: 540px){
        height: 20%;
        width: 20%;
        padding: 0.9rem;
    }
`;


const DosisContainer = styled.div`
    // border: 2px solid green;
    margin-top: 5rem;
    flex: 1;
    height: 100%; /* Use full height */


    display: flex;
    flex-direction: column;
    // justify-content: center; /* Align at the top */
    // align-items: center; /* Center horizontally */

    @media (max-width: 540px){
      margin-top: 0rem;
    }
    

    
 
`;

const ImageDosis = styled.img`
    height: 6%;
    width: 10%;
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

const ImageDosisCounterDefinition = styled.img`
    height: 6%;
    width: 6%;
    padding: 0.3rem;
    transform: rotate(0deg);

    @media (max-width: 540px){
        height: 15%;
        width: 15%;
        margin-left: 0.5rem;
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

  span {
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.5rem 1rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
  }
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
      margin-bottom: 7rem;
      
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

const DoneChallengesMessage = styled.div`
  color: black;
  font-size: 2rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  padding-left: 3rem;
  margin-top: 1rem;
  @media (max-width: 540px){
    padding-left: 2rem;
    font-size: 1.5rem;
  }

  span {
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.1rem 0.5rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
}
  
`;

const Icon = styled.img`
  width: 55px;
  margin-top: 2rem;
`;

const ImageWithText = styled.div`
  position: relative;
  display: inline-block;
`;

const ImageWithTextDosis = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
`;

const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    background-color: var(--green);
    border-radius: 10px;
    padding: 3px;
`;

const TextOverlayDosis = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    background-color: var(--green);
    border-radius: 10px;
    padding: 3px;
    @media (max-width: 540px) {
      top: 50%;
      left: 18%;
    }
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

const ClockOrSubmit = ({ timestamp, startTime, typeBuyer, onClick, selected=false }) => {
  const targetTime = timestamp ?  new Date(new Date(timestamp).getTime() + 60 * 60 * 24 * 1000) : null;
  const currentTime = new Date(startTime)
  const timeDiff = targetTime ? targetTime - currentTime : null;
  const [timeRemaining, setTimeRemaining] = useState(timeDiff);

  console.log("time");
  console.log(timestamp);

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
      <>
      <ClockTimer timestamp={timestamp} startTime={startTime} />
      <div style={{color: "black", fontStyle: "italic", fontSize: "1.3rem"}}>Recibirás una notificación al correo una vez se desbloquee.</div>
      </>
    );
  }

  
  if (selected){
    return (
      <PopUpButton type="submit" onClick={onClick}>¡ Continuar 😁 !</PopUpButton>
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

const PopupContent3 = () => {

  return (
    <>
      <br />
      
      <InfoText>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <ImageDoneChallengeDefinition src="/img/challenges/done_wesex.png" />
        <div style={{fontWeight:"bold", marginLeft: "1rem" }}><span>Desafios:</span>Los desafios, ubicados al lado izquierdo de la pantalla, tienen una duración de entre 40 y 1hr de realización.</div>
      </div>
      <br/>
      <br/>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <ImageDosisCounterDefinition src="/img/challenges/WeSex_PastiColor.png" />
        <div style={{fontWeight:"bold", marginLeft: "1rem" }}><span>Pildoras:</span>Las pildoras, ubicadas al lado derecho de la pantalla, tienen una duración de entre 5 y 10 minutos de realización.</div>
      </div>
      <br/>
      <br/>
      <div>
      Terminos y condiciones: al acceder a &quot;desafios para parejas&quot; aceptas los <a style={{fontSize: "1.5rem", textDecoration: "underline"}} href={'/privacy-policy'}>términos y condiciones.</a>
      </div>

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
    timeStamps,
    typeBuyer,
    selected_road,
    openNext,
    selectedChallenge,
    selectedPill,
    selected_challenge_on,
    selected_pill_on
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
      if (type === "challenge" && selectedChallenge === index){
        router.push(`${link}?origin=${origin}&type=${type}&index=${index}&members=${coupleMembers.join('-')}&road=${selected_road}`);
      } else if (type === "pill" && selectedPill === index){
        router.push(`${link}?origin=${origin}&type=${type}&index=${index}&members=${coupleMembers.join('-')}&road=${selected_road}`);
      } else {
        openNext(true);
      }
    }

    const handleReSee = () => {
      router.push(`${link}?origin=${origin}&type=${type}&index=${index}&members=${coupleMembers.join('-')}&road=${selected_road}`);
    };


    const handleClose = () => {
      onClose();
    };
  
    return isVisible ? (
      <PopupCard onClick={handleClose}>
        <PopupDialog onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          {status === 'next' && type === 'challenge' ?
          <>
            {selectedChallenge === null || selectedChallenge === -1 || (selectedChallenge === index && selected_challenge_on === selected_road) ? 
            <>
              <PopUpTitle>{title}</PopUpTitle>
              <PopUpSubTitle>{subtitle}</PopUpSubTitle>
              {typeBuyer === "box" ? <ClockOrSubmit timestamp={null} startTime={null}  onClick={handleSubmit} /> :   
              <ClockOrSubmit timestamp={timeStamps ? timeStamps.challengeLastUpdate : null} startTime={timeStamps ? timeStamps.currentTime : null} typeBuyer={typeBuyer ? typeBuyer : null} onClick={handleSubmit} selected={index === selectedChallenge} /> }
            
              <OtherChallenge name={title} type="challenge"/>
            </>
            : 
            <>
              <PopUpTitle>{title}</PopUpTitle>
              <PopUpSubTitle><span>Debes terminar el desafio ya elegido para comenzar uno nuevo</span></PopUpSubTitle>
              <Icon src="/img/challenges/danger.svg" alt="Not available" />
            </>
            }
          </>
          : null}
          {status === 'next' && type === 'pill' ? 
          <>
            {selectedPill === null || selectedPill === -1 || (selectedPill === index && selected_pill_on === selected_road) ?
              <>
              <PopUpTitle>{title}</PopUpTitle>
              <PopUpSubTitle>{subtitle}</PopUpSubTitle>
              {typeBuyer === "box" ? <ClockOrSubmit timestamp={null} startTime={null}  onClick={handleSubmit}/> : 
              <ClockOrSubmit timestamp={timeStamps ? timeStamps.pillLastUpdate : null} startTime={timeStamps ? timeStamps.currentTime : null} onClick={handleSubmit} selected={index === selectedPill} /> }
              <OtherChallenge name={title} type="pill"/>
              </>
            : 
            <>
              <PopUpTitle>{title}</PopUpTitle>
              <PopUpSubTitle><span>Debes terminar la dosis ya elegida para comenzar una nueva</span></PopUpSubTitle>
              <Icon src="/img/challenges/danger.svg" alt="Not available" />
            </>
            }
          </>
          : null}
          {status === 'done' && type === 'challenge' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <PopUpDone style={{marginTop: "1rem"}}> YA COMPLETASTE ESTE DESAFÍO :)</PopUpDone>
          <PopUpDoAnyways onClick={handleReSee}>Quiero verlo de todas formas</PopUpDoAnyways>
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
          <PopUpDoAnyways onClick={handleReSee}>Quiero verlo de todas formas</PopUpDoAnyways>
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
  

  const ChallengeImage = ({ data, index, onClick, selected, selected_road, choosen_road }) => {
    const { status, challenge  } = data;
    const { title, subtitle, link } = challenge;
    const { ML, MR } = GetMargin(index);

    const smallScreenStyle = {
      height: "20%",
      width: "35%",
    };
    
    const normalScreenStyle = {
      height: "18%",
      width: "18%",
    };
  
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
      selected: (
        <>
          <ImageWithText onClick={() => onClick({ title, subtitle, link, status, index })} style={{ marginLeft: ML, marginRight: MR }}>
            <ImageStartoDoChallenge
              src="/img/challenges/next.png"
              style={
                window.innerWidth <= 548
                  ? smallScreenStyle
                  : normalScreenStyle
              }
            />
            <TextOverlay>En Curso</TextOverlay>
          </ImageWithText>
        </>
      ),
    };

    if (selected && selected_road === choosen_road){
      return imageComponents["selected"];
    }
  
    // Render the appropriate image component based on the status
    return imageComponents[status] || null;
  };

  const DosisImage = ({ data, index, onClick, selected, selected_road, choosen_road }) => {
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
          src="/img/challenges/WeSex_PastiNoColor.png"
          onClick={() => onClick({ title, link, status, index })}
        />
      ),
      to_do: (
        <ImageDosis
          src="/img/challenges/WeSex_PastiNoColor.png"
          onClick={() => onClick({ title, link, status, index })}
        />
      ),
      selected: (
        <>
          <ImageWithTextDosis onClick={() => onClick({ title, link, status, index })}>
            <ImageDosis
              src="/img/challenges/WeSex_PastiColor.png"
            />
            <TextOverlayDosis>En Curso</TextOverlayDosis>
          </ImageWithTextDosis>
        </>
      ),
    };

    if (selected && selected_road === choosen_road){
      return imageComponents["selected"];
    }
  
    return imageComponents[status] || null;
  };

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };
  
  const Road = () => {
    const router = useRouter();
    const [coupleName, setCoupleName] = useState("");
    
  
    const [coupleData, setCoupleData] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false); // State for controlling the popup
    const [popupContent, setPopupContent] = useState(null); 
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [challengesDone, setChallengesDone] = useState(0);
    const [totalChallenges, setTotalChallenges] = useState(0);
    const [dosisDone, setDosisDone] = useState(0);
    const [totalDosis, setTotalDosis] = useState(0);
    const [showDiagnostico, setShowDiagnostico] = useState(false);
    const [selected, setSelected] = useState("REC");
    const [isReleasedArea, setIsReleasedArea] = useState(true);
    const [youSure, setYouSure] = useState(false);
    

    const [levelText, setLevelText] = useState("Nivel 1");
    const [nameLevelText, setNameLevelText] = useState("NIVEL: CALENTAMIENTO");

    const names_hashmap = {
      "COM": "Comunicación",
      "CON": "Control",
      "SEX": "Sexual",
      "AFE": "Afecto",
      "INF": "Influencia",
      "SAT": "Satisfacción",
      "REC": "Recomendada"
    };

    useEffect(() => {
      const challenges = document.querySelectorAll(".challenge-container");
  
      challenges.forEach((challenge) => {
        if (challenge.dataset.status === "next") {
          challenge.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }, []);
  

    useEffect(() => {
      if (router.isReady){
        if (router.query.origin) {
          setCoupleName(router.query.origin);
        }
        
      }
    }, [router.isReady]);

    const handleStartChallengeClick = ({ title, subtitle, link, status, index, selected_road }) => {
        if (title && subtitle && link) {
          setPopupContent({ title, subtitle, link, status, type: 'challenge', index: index, selected_road: selected_road }); // Store the challenge data in state
          setPopupVisible(true); // Open the popup
        }
      };

    const handleStartDosisClick = ({ title, link, status, index, selected_road }) => {
      if (title && link) {
        setPopupContent({ title, link, status, type: 'pill', index: index, selected_road: selected_road}); // Store the dosis data in state
        setPopupVisible(true); // Open the popup
      }
    };
    
    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleWarningSymbolClick = () => {
      setShowPopup(true); // Show the warning popup when the warning symbol is clicked
    };

    const handleWarningSymbolClick2 = () => {
      setShowPopup2(true); // Show the warning popup when the warning symbol is clicked
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await get_couple(coupleName, selected);
        if (response.data.inactive){
          toast.error('Tu subscripción no esta activa. Contactate con nosotros si deseas re-activarla y seguir donde dejaste tu viaje por los desafios!!');
          router.push('/premium-material/desafios-para-parejas');
        } else {
          setCoupleData(response.data);
        }

       
        
        
        if (coupleName === "Complices"){
          setLevelText("Nivel 2");
          setNameLevelText("NIVEL: EXPLORACIÓN");
        } else if(coupleName === "julia-lucho"){
          setLevelText("Nivel 2");
          setNameLevelText("NIVEL: EXPLORACIÓN");
        }

        if (coupleName === "all"){
          setShowDiagnostico(true);
        }
    
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
    }, [coupleName, selected]);

    const onSubmitYouSure = () => {
      accept_task(coupleName, popupContent.type, popupContent.index, selected).then(() => {
        router.push(`${popupContent.link}?origin=${router.query.origin}&type=${popupContent.type}&index=${popupContent.index}&members=${[coupleData.coupleMemberOne, coupleData.coupleMemberTwo].join('-')}&road=${selected}`);
      });
    };

    const onCloseYouSure = () => {
      setShowPopup(false);
      setYouSure(false);
    };


    const challengesGroups = coupleData
    ? chunkArray(coupleData.challenges, 4)
    : [];
    const dosisGroups = coupleData
    ? chunkArray(coupleData.pills, 5)
    : [];


  console.log(coupleData);
  
    
    return (
        <>
          <HeaderContainer>
            
            <ContainerData>
              <Level><span>{nameLevelText}</span></Level>
              <SectionContainer>
                <ImageDoneChallengeCounter src="/img/challenges/done_wesex.png" />
                <ImageDoneChallengeCounterNumber>{`${challengesDone}/${totalChallenges}`}</ImageDoneChallengeCounterNumber>
              </SectionContainer>

              <SectionContainer>
              <ImageDosisCounter src="/img/challenges/WeSex_PastiColor.png" />
              <ImageDosisCounterNumber>{`${dosisDone}/${totalDosis}`}</ImageDosisCounterNumber>
              </SectionContainer>
              {/* <div onClick={handleWarningSymbolClick} style={{textAlign: "right", padding: "0.5rem"}}>ℹ️</div> */}
            </ContainerData>

            <Header>
            <Part1Container>
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
        {/* <Diagnostic /> */}
    </Part1Container>
    <ImageInfo onClick={handleWarningSymbolClick2} src="/img/icons/acerca-de.png"/>
            </Header>
          </HeaderContainer>
          <Background>
          <StickyComponent />
          {coupleData && coupleData.type !== "box" && (
            <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
              <Areas setSelected={setSelected} selected={selected} setReleased={setIsReleasedArea} />
              <Diagnostic origin={coupleName} />
            </div>
            <DoneChallengesMessage>
              <span>Mejorando Área: 🔥🔥 {names_hashmap[selected]} 🔥🔥</span>
            </DoneChallengesMessage>
            </>
          )}
          {/* {showDiagnostico && <Diagnostic origin={coupleName} />} */}
            {/* {renderLevelBoxes()} */}
            <div style={{ paddingTop: '1rem', backgroundColor: '#ebe4f8' }}></div>
            {challengesGroups.map((group, index) => (
            <React.Fragment key={`challenge-group-${index}`}>
              <LevelBoxContainer
              >  
                <LevelBox>{`Nivel ${index + 1}`}</LevelBox>
              </LevelBoxContainer>
              <ChallengesAndDosisContainer>
                <ChallengesContainer>
                  {group.map((challenge, i) => (
                    <ChallengeImage
                      key={`challenge-${index}-${i}`}
                      data={challenge}
                      index={i + index * 4}
                      onClick={handleStartChallengeClick}
                      selected={coupleData.selected_challenge === index * 4 + i}
                      selected_road={coupleData.selected_challenge_area}
                      choosen_road={selected}
                    />
                  ))}
                </ChallengesContainer>
                <DosisContainer>
                  {dosisGroups[index] &&
                    dosisGroups[index].map((dosis, i) => (
                      <DosisImage
                        key={`dosis-${index}-${i}`}
                        data={dosis}
                        index={i + index * 5}
                        onClick={handleStartDosisClick}
                        selected={coupleData.selected_pill === index * 5 + i}
                        selected_road={coupleData.selected_pill_area}
                        choosen_road={selected}
                      />
                    ))}
                </DosisContainer>
              </ChallengesAndDosisContainer>
            </React.Fragment>
          ))}
            {/* ... existing code ... */}
            {challengesDone === totalChallenges && totalChallenges !== 0 && (
              <DoneChallengesMessage>
                <span>ESTAMOS TRABAJANDO EN SUS PRÓXIMOS DESAFÍOS 😊.<br/> 🔥🔥 AGUANTEN LA CALENTURA 🔥🔥</span>
              </DoneChallengesMessage>
            )}
            {!isReleasedArea && (<InConstructionPopup />)}
            {youSure && (<ConfirmationPopup onCancel={onCloseYouSure} onConfirm={onSubmitYouSure}/>)}
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
            typeBuyer={coupleData? coupleData.type : null}
            selected_road={selected}
            openNext={setYouSure}
            selectedChallenge={coupleData ? coupleData.selected_challenge : null}
            selectedPill={coupleData ? coupleData.selected_pill : null}
            selected_challenge_on={coupleData ? coupleData.selected_challenge_area : null}
            selected_pill_on={coupleData ? coupleData.selected_pill_area : null}
        />
        {/* Add the WarningPopup component here */}
       
        {showPopup && (
                <PopupContainer2 onClick={() => setShowPopup(false)}>
                    <PopupDialog2 onClick={(e) => e.stopPropagation()}>
                        <CloseButton2 onClick={() => setShowPopup(false)}>✕</CloseButton2>
                        <PopupContent2 />
                    </PopupDialog2>
                </PopupContainer2>
            )}
        {showPopup2 && (
              <PopupContainer2 onClick={() => setShowPopup2(false)}>
                  <PopupDialog2 onClick={(e) => e.stopPropagation()}>
                      <CloseButton2 onClick={() => setShowPopup2(false)}>✕</CloseButton2>
                      <PopupContent3 />
                  </PopupDialog2>
              </PopupContainer2>
          )}
        
        </>
        
      );
    };
  
export default Road;


{/* <div style={{paddingTop: "1rem", backgroundColor: "#ebe4f8"}}></div>
            <LevelBoxContainer>
              <LevelBox>
                Nivel 1
              </LevelBox>
            </LevelBoxContainer> */}