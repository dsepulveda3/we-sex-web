import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';


const BotonClasico = styled.a`
    font-family: "Karla", sans-serif;
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    margin: 1rem auto;
    border: none;
    transition: all .5s ease;
    color: var(--green);
    background-color: white;
    font-size: 2.1rem;
    &:hover {
        background-color: var(--violet);
    }
`;



const BotonUniversal = () => {
    return (
                <BotonClasico
                    href="https://wa.me/5491140678698"
                    target="_blank"
                >Contactar por WhatsApp</BotonClasico>
    );
}
 
export default BotonUniversal;