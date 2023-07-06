import React from 'react';
import Link from 'next/link';
import {Row,Col,Container} from 'reactstrap';
import styled from '@emotion/styled';
import { downloadAppAlert } from '../../../helpers';

const Write = styled.input`
    color: black;
    padding: 1rem;
    /* max-width: 60rem; */
    text-align: left!important;
    margin-top:2rem;
    border: none;
    border-bottom: 1px solid;
    width: 100%;
    outline: none;
`;

const Answer = styled.button`
    background-color: transparent;
    color: var(--violet); 
    border: none;
    margin: 1rem 0 0 auto;
    text-align:right;
    font-weight:bold;
    text-transform:uppercase;
    transition: all .5s ease;
    &:hover {
        color: var(--green);
    }
    &:focus {
        outline: none;
    }
`;



const WriteComment = () => {
    return (
        <div
            style={{maxWidth: "60rem", display: "flex"}}
        >
            <Write type="text" placeholder="¿Que opinas?" name="opinion" onClick={() => downloadAppAlert()} />
            <Answer
                onClick={() => downloadAppAlert()}
            >Publicar</Answer>
        </div>
    );
}
 
export default WriteComment;