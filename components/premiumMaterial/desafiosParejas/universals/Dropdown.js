import React, { useState } from "react";
import styled from "@emotion/styled";

const DropdownContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;

const DropdownHeader = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : "Selecciona una opción"}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownListItem key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
