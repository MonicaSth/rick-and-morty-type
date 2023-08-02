import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface SearchInputProps {
  onChange: (searchText: string) => void;
}

const Input = styled.input`
  padding: 8px;
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

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value);
  };

  return (
    <Input type="text" placeholder="Search by name" onChange={handleChange} />
  );
};

export default SearchInput;
