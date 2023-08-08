import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';

const Background = styled.div`
    background-color: var(--violet);
`;

const Text = styled.p`
    a {
        font-family: "Averia Libre", sans-serif;
        font-size: 1.8rem;
        color: white;
    }
`;

const Footer = () => {
    return (
        <Background>
            <Container style={{paddingTop: "2rem", paddingBottom: "2rem", textAlign:"center"}}>
                <Text>
                    <a href="https://we.sex" target="_blank">
                        WeSex - hecho por personas para personas, con ♥
                    </a>
                </Text>
            </Container>
        </Background>
    );
}
 
export default Footer;