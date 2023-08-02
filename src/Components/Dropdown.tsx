import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}

const Select = styled.select`
  padding: 7.5px;
  border: 1px solid #ccc;
  background-color: rgb(34, 34, 34);
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-shadow: 1px 4px 7px #747494;
  transition: border-color 0.2s ease-in-out;
  margin: 10px;
  &:focus {
    border-color: #007bff;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
