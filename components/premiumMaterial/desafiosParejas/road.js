import React from "react";
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
    font-size: 4rem;
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
    font-size: 4rem;
    color: white;
    justify-content: center;

    @media (max-width: 540px){
        font-size: 1.3rem;
    }
`;

const Background = styled.div`
    // background-color: #ebe4f8;
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

const Road = () => {
    return (
        <>
        <Header>
            <Title>Desafíos para parejas</Title>
            <SubTitle>Mati y Vicky</SubTitle>
        </Header>
        <Background>
            
            <ChallengesAndDosisContainer>
                <ChallengesContainer>
                    <ImageDoneChallenge src="/img/challenges/done.png" />
                    <ImageDoneChallenge src="/img/challenges/done.png" style={{ marginLeft: '60px' }}/>
                    <ImageStartoDoChallenge src="/img/challenges/start.png" style={{ marginLeft: '90px' }}/>
                    <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '0px' }}/>
                    <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginRight: '50px' }}/>
                    <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '40px' }}/>
                    <ImageToDoChallenge src="/img/challenges/to_do.png" style={{ marginLeft: '80px' }}/>
                    <ImageToDoChallenge src="/img/challenges/to_do.png"/>
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
}
 
export default Road;