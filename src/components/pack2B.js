import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    background-image: url("/img/ws-background.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* min-height: 85vh; */
    margin-top: .1rem;
    position: relative;
    padding-top:6rem;
    padding-bottom:6rem;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
    }
`;

const Title = styled.h4`
    font-size: 3rem;
    font-family: "Averia Libre", sans-serif;
    color: white;
    font-weight: bold;
    margin-bottom: 4rem;
    align-items:center;
    text-align:center;
    span {
        color: var(--green);
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        /* margin-bottom:1.5rem; */
        font-size: 3.2rem;
    }
`;

const Dots = styled.p`
    color: white;
    font-size: 4rem;
    margin: 2.5rem 0 .5rem;
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 3rem;
    margin-bottom: 5rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.8rem;
    }
`;

const BigText = styled(Text)`
    font-family: "Karla", sans-serif;
    font-size: 8rem;
    font-weight: bold;
    margin-bottom: 0;
    @media(max-width: 540px){
        font-size: 6rem;
    }
`;

const AppImage = styled.img`
    width: 90%;
    height: auto;
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    /* display:block; */
    /* min-width: 80%; */
    /* margin: 5rem auto 1rem!important; */
    border: none;
    transition: all .5s ease;
    font-size:2.3rem;
    &:hover {
        background-color: white;
        color: var(--violet);
        cursor: pointer;
    }
`;

const BotonVerde = styled(Boton)`
    margin-top: 5rem!important;
    color: white;
    background-color: var(--green);
`;

const Pack = () => {
    return (
        <Background id="regalar">
            <Container className="text-center">
                <Title><span>2 x 3:</span> por 3.000 llevate las 3 guías de WeSex:  <span>Zonas Erógenas</span> + 
                <span>Tantra</span> + <span>Sexo Anal</span></Title>
                {/* <Dots>😮</Dots> */}
                {/* <BigText>REGALARLA</BigText> */}
                {/* <Dots style={{margin: "1rem 0"}}>👇</Dots> */}
                {/* <Text>
                    puedes adquirirla y que le llegue directo<br/><span>a esa persona</span> que se merece TANTO PLACER
                </Text> */}
                <BotonVerde href="/premium-material/packs/pack1-email-b">Ver oferta !</BotonVerde>
            </Container>
        </Background>
    );
}
 
export default Pack;