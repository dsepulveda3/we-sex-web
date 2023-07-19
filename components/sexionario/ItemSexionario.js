import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ItemTitle = styled.p`
  color: black;
  font-weight: bold;
  font-size: 2.2rem;
`;
const Text = styled.p`
  color: black;
  line-height: normal;
  @media (max-width: 540px) {
    /* font-size: .85rem; */
  }
`;

const ItemSexionario = ({ item }) => {
  return (
    <div
      className='mb-3'
      id={item?.title
        ?.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s/g, '-')}
    >
      <ItemTitle>{item.title}</ItemTitle>
      <Text>{item.content}</Text>
    </div>
  );
};

export default ItemSexionario;
