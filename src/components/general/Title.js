import React from 'react';
import styled from '@emotion/styled';
import {Container} from "reactstrap";

const Fondo = styled.div`
    /* background-image: url(""); */ // TODO: Poner fondo violeta manchado con verde
    background-color: var(--violet);
    border-top: white solid 0.1rem;
    padding: 1.5rem 0;
    color: white;
    margin-bottom: 2rem;
    @media(max-width: 540px){
        margin-bottom: 1rem;
        padding: .5rem 0;
    }
`;
const Title = ({title, bgImage}) => {
    return (
        <Fondo>
            <Container>
                <h1>{title}</h1>
            </Container>
        </Fondo>
    );
}
 
export default Title;