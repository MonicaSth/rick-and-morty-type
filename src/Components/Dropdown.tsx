import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../Context/Theme-context";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}

const Select = styled.select<{ themeIsLight: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.8)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
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
  const { themeIsLight } = useThemeContext();

  useEffect(() => {
    if (value === "") {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Select themeIsLight={themeIsLight} value={value} onChange={handleChange}>
      <option value="" key="reset" selected hidden={!selected}>
        {selected ? "All (reset filter)" : "Filter by status"}
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
