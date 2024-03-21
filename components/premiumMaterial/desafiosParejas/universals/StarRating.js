import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";

const StarContainer = styled.div`
  display: inline-block;
  font-size: 2rem;
  cursor: pointer;
`;

const Star = ({ selected, onSelect }) => {
  return <StarContainer onClick={onSelect}>{selected ? <FaStar /> : <FaRegStar />}</StarContainer>;
};

const StarRating = ({ totalStars, setStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarSelect = (selectedRating) => {
    setRating(selectedRating);
    setStars(selectedRating);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleStarSelect(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;

