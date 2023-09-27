import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRouter } from 'next/router';
import styled from "@emotion/styled";


const Header = styled.div`
    // background-color: #72e436;
    background-color: #5bcb06;
    height: 10vh;
    width: 100%;
    font-weight: bold;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center
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
    margin-top: 2rem;
    background: white;
    text-align: center;
    height: 100vh;

    @media (min-width: 540px){
        padding: 0rem 10rem 20rem 10rem;
    }

    @media (max-width: 540px){
        padding: 0rem 1rem 20rem 1rem;
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
    height: 16%;
    width: 12%;
    padding: 2rem;

    @media (max-width: 540px){
        height: 20%;
        width: 32%;
        padding: 0.9rem;
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
    height: 12%;
    width: 13%;
    padding: 1rem;
    transform: rotate(0deg);

    @media (max-width: 540px){
        height: 10%;
        width: 38%;
        padding: 0.9rem;
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
  height: 30%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
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
  background-color: #5bcb06;
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
  background-color: #5bcb06;
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
    color: #5bcb06;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    padding: 0.4rem;
    font-size: 1.8rem;
    text-decoration: underline; // Add this line to underline the text
    cursor: pointer; // Add this line to change the cursor to a pointer on hover
`;


const Popup = ({ isVisible, onClose, title = '', subtitle = '', link = '', status }) => {
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
        router.push(`${link}?origin=${origin}`);
    }

    const handleClose = () => {
      onClose();
    };
  
    return isVisible ? (
      <PopupCard onClick={handleClose}>
        <PopupDialog onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          {status === 'next' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton>
          </>
          : null}
          {status === 'done' ? 
          <>
          <PopUpTitle>{title}</PopUpTitle>
          <PopUpSubTitle>{subtitle}</PopUpSubTitle>
          <PopUpDone style={{marginTop: "1rem"}}> YA COMPLETASTE ESTE DESAFIO :)</PopUpDone>
          <PopUpDoAnyways onClick={handleSubmit}>Quiero verlo de todas formas</PopUpDoAnyways>
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
          {status === 'to_do' ? 
          <>
          <PopUpToDo> DEBES COMPLETAR TU ÚLTIMO DESAFIO PARA PODER DESBLOQUEAR EL PRÓXIMO</PopUpToDo>
          {/* <PopUpButton type="submit" onClick={handleSubmit}>¡ Comenzar 😁 !</PopUpButton> */}
          </>
          : null}
        </PopupDialog>
      </PopupCard>
    ) : null;
  };
  
  

const couplesData = {
    "mati-vicky": {
      subtitle: "Mati y Vicky SON LOS 1",
      challenges: [
        { status: "done", ML: "0px", MR: "0px", title: "QUIERO - LO HARÍA - NO LO HARÍA", subtitle: "Descripción del challenge Descripción del challenge Descripción del challenge", link: "/challenge1",},
        { status: "done", ML: "60px", MR: "0px", title: "CENA Y MASAJES", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/premium-material/desafios-para-parejas/cocina",},
        { status: "done", ML: "90px", MR: "0px", title: "JUEGO DE ROLES", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/challenge1",},
        { status: "next", ML: "0px", MR: "0px", title: "EDGING", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/premium-material/desafios-para-parejas/edging",},
        { status: "to_do", ML: "0px", MR: "50px", title: "PPP Y PPC", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/challenge1",},
        { status: "to_do", ML: "40px", MR: "0px", title: "EDGING", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/challenge1",},
        { status: "to_do", ML: "80px", MR: "0px", title: "PENETRACIÓN V/S ESTÍMULO", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/challenge1",},
        { status: "to_do", ML: "0px", MR: "0px", title: "CHALLE", subtitle: "Descripción del challlenge Descripción del challlenge Descripción del challlenge", link: "/challenge1",},
      ],
      // Add more data for this couple
    },
    // Add data for other couples
  };

  const ChallengeImage = ({ challenge, onClick }) => {
    const { status, ML, MR, title, subtitle, link } = challenge;
  
    // Map the challenge status to the corresponding image component
    const imageComponents = {
      done: (
        <ImageDoneChallenge
          src="/img/challenges/done.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status })}
        />
      ),
      next: (
        <ImageStartoDoChallenge
          src="/img/challenges/next.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status })}
        />
      ),
      to_do: (
        <ImageToDoChallenge
          src="/img/challenges/to_do.png"
          style={{ marginLeft: ML, marginRight: MR }}
          onClick={() => onClick({ title, subtitle, link, status })}
        />
      ),
    };
  
    // Render the appropriate image component based on the status
    return imageComponents[status] || null;
  };
  
  const Road = () => {
    const router = useRouter();
    const coupleName = router.query.origin;
  
    const [coupleData, setCoupleData] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false); // State for controlling the popup
    const [popupContent, setPopupContent] = useState(null); 

    

    const handleStartChallengeClick = ({ title, subtitle, link, status }) => {
        if (title && subtitle && link) {
          setPopupContent({ title, subtitle, link, status }); // Store the challenge data in state
          setPopupVisible(true); // Open the popup
        }
      };
    
    const handleClosePopup = () => {
        setPopupVisible(false);
    };
  
    useEffect(() => {
      // Check if coupleName is valid and exists in couplesData
      if (coupleName && couplesData[coupleName]) {
        setCoupleData(couplesData[coupleName]);
      }
    }, [coupleName]);
  
    return (
        <>
          <Header>
            <Title>Desafíos para parejas</Title>
            {coupleData ? (
              <SubTitle>{coupleData.subtitle}</SubTitle>
            ) : (
              <SubTitle>Loading...</SubTitle> // Or any loading indicator
            )}
          </Header>
          <Background>
            <ChallengesAndDosisContainer>
              <ChallengesContainer>
                {coupleData ? (
                coupleData.challenges.map((challenge, index) => (
                    <ChallengeImage 
                    key={index} 
                    challenge={challenge} // Provide the entire challenge object as a prop
                    onClick={handleStartChallengeClick} 
                    />
                ))
                ) : (
                <div>No Challenges Available</div>
                )}
              </ChallengesContainer>
              <DosisContainer>
                <ImageDosis src="/img/challenges/wesex_pasticolor.png"/>
                <ImageDosis src="/img/challenges/wesex_pastinocolor.png"/>
                <ImageDosis src="/img/challenges/wesex_pastinocolor.png"/>
                <ImageDosis src="/img/challenges/wesex_pastinocolor.png"/>
                <ImageDosis src="/img/challenges/wesex_pastinocolor.png"/>
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
        />

        </>
      );
    };
  
  export default Road;

// const Road = () => {
//     const router = useRouter();
//     const coupleName = router.query.origin;

//     console.log("Data URl");
//     console.log(router.query.origin);

//     // Look up data for the couple based on the extracted name
//     const coupleData = couplesData[coupleName];
//     console.log(coupleData);

    
//     return (
//         <>
//         <Header>
//             <Title>Desafíos para parejas</Title>
//             <SubTitle>{coupleData.subtitle}</SubTitle>
//         </Header>
//         <Background>
            
//             <ChallengesAndDosisContainer>
//                 <ChallengesContainer>
//                     <ImageDoneChallenge src="/img/challenges/done.png" />
//                     <ImageDoneChallenge src="/img/challenges/done.png" style={{ marginLeft: '60px' }}/>
//                     <ImageStartoDoChallenge src="/img/challenges/start.png" style={{ marginLeft: '90px' }}/>
//                     <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '0px' }}/>
//                     <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginRight: '50px' }}/>
//                     <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '40px' }}/>
//                     <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '80px' }}/>
//                     <ImageToDoChallenge src="/img/challenges/to_do.png"/>
//                 </ChallengesContainer>
//                 <DosisContainer>
//                     <ImageDosis src="/img/challenges/award_unlocked.png"/>
//                     <ImageDosis src="/img/challenges/award_locked.png"/>
//                     <ImageDosis src="/img/challenges/award_locked.png"/>
//                     <ImageDosis src="/img/challenges/award_locked.png"/>
//                     <ImageDosis src="/img/challenges/award_locked.png"/>
//                 </DosisContainer>
//             </ChallengesAndDosisContainer>
//         </Background>
//         </>
//     );
// }
 
// export default Road;