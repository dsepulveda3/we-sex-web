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
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    // align-items: center; /* Center horizontally */
    background-color: white;
    border-radius: 1rem;
    width: 30%;
    height: 30%;
    margin: 1rem;
    padding: 2rem;
    
    @media(max-width: 540px){
        width: 80%;
        height: 30%;
    }
`;

const AsanaLogo = styled.img`
    display: block;
    margin: auto;
    width: 30%;
`;

const TitleCompany = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    text-align: center;
    margin: 0.5rem;
`;

const SubTitleCompany= styled.div`
    font-size: 1.3rem;
    background-color: var(--green);
    color: white;
    text-align: center;
`;

const DescriptionCompany = styled.div`
    font-size: 1.3rem;
    color: black;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

`;

const ButtonCompany = styled.a`
    font-size: 1.5rem;
    margin: auto;
    border-radius: 5rem;
    background-color: var(--green);
    padding: 1rem;
    font
`;

const Benefits = () => {

    return(
        <Background>
            <Title>Beneficios WeSexers</Title>
            <BenefitContainer>
                <AsanaLogo src='/img/premium-material/Asana_logo.png'/>
                <TitleCompany>Asana 🇦🇷</TitleCompany>
                <SubTitleCompany>15% OFF + envió gratis</SubTitleCompany>
                <DescriptionCompany>El botón te lleva directo a comprar com descuento y envío gratis. </DescriptionCompany>
                <ButtonCompany href='https://asanacup.com/discount/WESEX'>Quiero el beneficio :)</ButtonCompany>
            </BenefitContainer>
            <BenefitContainer>
                <AsanaLogo src='/img/premium-material/Savage_logo.png'/>
                <TitleCompany>Savage Sexhop 🇦🇷</TitleCompany>
                <SubTitleCompany>15% OFF + envió gratis</SubTitleCompany>
                <DescriptionCompany>Codigo: wesexer → pegando este codigo en la página tendrás un 15% OFF + envió gratis en el producto que quieras 😀. </DescriptionCompany>
                <ButtonCompany href='https://www.savagesexshop.com.ar/'>Quiero el beneficio :)</ButtonCompany>
            </BenefitContainer>
            
        </Background>
    );
};

export default Benefits;