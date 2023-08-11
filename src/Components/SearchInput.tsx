import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../Context/Theme-context";

interface SearchInputProps {
  reset: boolean;
  onChange: (searchText: string) => void;
}

const Input = styled.input<{ themeIsLight: boolean }>`
  padding: 8px;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.8)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  border: 1px solid #ccc;
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

const SearchInput: React.FC<SearchInputProps> = ({ onChange, reset }) => {
  const [value, setValue] = useState("");
  const { themeIsLight } = useThemeContext();

  useEffect(() => {
    if (reset) {
      setValue("");
    }
  }, [reset]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Input
      themeIsLight={themeIsLight}
      type="text"
      value={value}
      placeholder="Search by name"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
