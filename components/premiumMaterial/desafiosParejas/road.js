import React, { useState, useEffect } from "react";
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
    height: 15%;
    width: 11%;
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
    height: 15%;
    width: 25%;
    padding: 2rem;

    @media (max-width: 540px){
        height: 10%;
        width: 55%;
        padding: 0.9rem;
    }

`;



const couplesData = {
    "mati-vicky": {
      subtitle: "Mati y Vickyy",
      challenges: [
        { status: "done", ML: "0px", MR: "0px"},
        { status: "done", ML: "60px", MR: "0px"},
        { status: "next", ML: "90px", MR: "0px"},
        { status: "to_do", ML: "0px", MR: "0px"},
        { status: "to_do", ML: "0px", MR: "50px"},
        { status: "to_do", ML: "40px", MR: "0px"},
        { status: "to_do", ML: "80px", MR: "0px"},
        { status: "to_do", ML: "0px", MR: "0px"},
      ],
      // Add more data for this couple
    },
    // Add data for other couples
  };

  const ChallengeImage = ({ status, ML, MR }) => {
    console.log(ML);
    // Map the challenge status to the corresponding image component
    const imageComponents = {
      done: <ImageDoneChallenge src="/img/challenges/done.png" style={{ marginLeft: ML, marginRight: MR }}/>,
      next: <ImageStartoDoChallenge src="/img/challenges/start.png" style={{ marginLeft: ML, marginRight: MR }}/>,
      to_do: <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: ML, marginRight: MR }}/>,
    };
  
    // Render the appropriate image component based on the status
    return imageComponents[status] || null;
  };
  
  const Road = () => {
    const router = useRouter();
    const coupleName = router.query.origin;
  
    const [coupleData, setCoupleData] = useState(null);
  
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
                    <ChallengeImage key={index} status={challenge.status} ML={challenge.ML} MR={challenge.MR} />
                  ))
                ) : (
                  <div>No Challenges Available</div> // Display a message or loading indicator
                )}
              </ChallengesContainer>
              <DosisContainer>
                <ImageDosis src="/img/challenges/award_unlocked.png"/>
                <ImageDosis src="/img/challenges/award_locked.png"/>
                <ImageDosis src="/img/challenges/award_locked.png"/>
                <ImageDosis src="/img/challenges/award_locked.png"/>
                <ImageDosis src="/img/challenges/award_locked.png"/>
              </DosisContainer>
            </ChallengesAndDosisContainer>
          </Background>
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