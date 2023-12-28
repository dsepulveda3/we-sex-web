import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';


const BotonClasico = styled.a`
    font-family: "Karla", sans-serif;
    text-align: center;
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    margin: 1rem auto;
    border: none;
    transition: all .5s ease;
    color: ${props => props.textColor || 'var(--green)'};
    background-color: ${props => props.bgColor || 'white'};
    font-size: 2.1rem;
    &:hover {
        background-color: ${props => props.bgColorHover || 'var(--violet)'};
    }
`;


const BotonUniversal = ({link_redireccion, text, textColor, bgColor, bgColorHover, style}) => {
    return (
                <BotonClasico
                    style ={style}
                    href={link_redireccion}
                    target="_blank"
                    textColor={textColor}
                    bgColor={bgColor}
                    bgColorHover={bgColorHover}
                >{text}</BotonClasico>
    );
}
 
export default BotonUniversal;