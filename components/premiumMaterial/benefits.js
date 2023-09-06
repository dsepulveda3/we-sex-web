import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Container } from "reactstrap";

const Background = styled.div`
    padding-top: 10rem;
    background-color: var(--green);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Start at the top */
    align-items: center; /* Center horizontally */
`;

const Title = styled.div`
    text-align: center;
    color: white;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    padding: 2rem;
`;


const BenefitContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center; /* Center vertically */
    // align-items: center; /* Center horizontally */
    background-color: white;
    border-radius: 1rem;
    width: 30%;
    height: 20%;
    margin: 1rem;
    
    @media(max-width: 540px){
        width: 80%;
        height: 20%;
    }
`;

const Benefits = () => {

    return(
        <Background>
            <Title>Beneficios WeSexers</Title>
            <BenefitContainer>Hey </BenefitContainer>
            <BenefitContainer>Hey </BenefitContainer>
        </Background>
    );
};

export default Benefits;