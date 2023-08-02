import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}

const Select = styled.select`
  padding: 7.5px;
  border: 1px solid #ccc;
  background-color: rgb(34, 34, 34, 0.8);
  color: white;
  border: 1px solid #ccc;
  width: 150px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-shadow: 1px 4px 7px #747494;
  transition: border-color 0.2s ease-in-out;
  margin: 10px;
  &:focus {
    border-color: rgb(50, 195, 34);
  }
  &:hover {
    cursor: pointer;
    border-color: rgb(50, 195, 34);
    box-shadow: 1px 4px 7px rgb(50, 195, 34);
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (value === "") {
      setSelected(false);
    }
  }, [value]);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    if (selectedValue === "") {
      setSelected(false);
    } else {
      setSelected(true);
    }
    onChange(selectedValue);
  };

  return (
    <Select value={value} onChange={handleChange}>
      <option value="" key="reset" hidden={!selected}>
        {selected ? "All (reset)" : "Filter by status"}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
