import React, {useState,useEffect} from 'react';
import styled from '@emotion/styled';

const ItemTitle = styled.p`
color: black;
font-size:2.2rem;
font-weight: bold;
@media(max-width: 540px){
    /* font-size: 1rem; */
    line-height: normal;
    margin-bottom:.5rem;
}

`;
const Text = styled.p`
    color: black;
    line-height: normal;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--lightGrey);
    
    @media(max-width: 540px){
        /* font-size: .85rem; */
        margin-bottom: 1.5rem!important;
    }
`;


const ItemSexFaq = ({item}) => {
    return (
        <div className="mb-3">
            <ItemTitle>{item.title}</ItemTitle>
            <Text>{item.content}</Text>
        </div>
    );
}
 
export default ItemSexFaq;