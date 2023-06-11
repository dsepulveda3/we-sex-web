import React, {useState, useEffect, useRef } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';

// import { createPreference } from "/API/mercadopago.js";

const Background = styled.div`
    background-color: #f5f5f5;
    @media(max-width: 540px){
        text-align: center;
        /* padding-bottom:3rem; */
    }
`;

const Title = styled.p`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    color: var(--violet);
    font-weight: bold;
    margin-bottom:3rem;
    span {
        color: var(--green);
        font-weight: bold;
    font-family: "Karla", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 2.5rem;
    }
`;

const Amount = styled(Title)`
    font-size: 2rem!important;
    margin-top: 2rem;
    margin-bottom: 0;
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    color: var(--violet);
    /* border-bottom: 2px solid var(--violet);
    border-width: 15px; */

    @media(max-width: 540px){
        position: relative;
    
        &:before {
            content: "";
            position: absolute;
            left: 35%;
            right: 35%;
            bottom: 0;
            height: 1px;
            width: 30%;  /* or 100px */
            border-bottom:2px solid var(--violet);
        }
    }
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        /* font-size: 1.6rem; */
    }
    strong {
        font-weight: bold;
        font-size:2rem;
    }
`;

const Text2 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.0rem;
    margin-bottom: 2.5rem;
    color: var(--green);
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.8rem;
    }
`;

const Text3 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.0rem;
    margin-top: 3rem;
    color: var(--violet);
    text-decoration: underline;

    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.0rem;
    }
`;


const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    width: fit-content;
    border: none;
    transition: all .5s ease;
    font-size:2.3rem;
    max-width: 100%;
`;

const BotonConContorno = styled(Boton)`
    margin-top: 1rem!important;
    /* color: white; */
    background-color: white;
    border: 2px solid var(--violet);
    padding: 2.5rem;
    &:hover {
        background-color: white;
        color: var(--violet);
        border: 4px solid var(--violet);
        cursor: pointer;
    }
    img {
        width: 45vw;
        max-width: 17rem;
    }
`;

const BotonVioleta = styled(Boton)`
    margin-top: 1rem!important;
    color: white;
    background-color: var(--violet);
    padding: 2rem;
    &:hover {
        background-color: white;
        color: var(--violet);
        cursor: pointer;
    }
`;

const BotonVerde = styled(Boton)`
    margin-top: 5rem!important;
    color: white;
    background-color: black;
    span {
      color: var(--violet);
  }
  
`;

 export default function PaymentButton() {
   
 
   return (
    <div>
     HOLA
    </div>
  );
}