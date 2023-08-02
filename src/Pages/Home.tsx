import React, { useState, useEffect } from "react";
import SearchInput from "../Components/SearchInput";
import Dropdown from "../Components/Dropdown";
import Card from "../Components/Card";
import styled from "styled-components";
import { characters as dummyCharacters } from "../Components/DummiCharacters";

export interface Character {
  id: number;
  image: string;
  name: string;
  status: "Dead" | "Alive" | "Unknown";
  location: {
    name: string;
  };
}

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2% 5%;
`;
const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
  min-height: 260px;
  margin: 2% 5%;
`;
const MainHomeStyled = styled.div``;

const Home: React.FC = () => {
  const [filteredCharacters, setFilteredCharacters] =
    useState<Character[]>(dummyCharacters);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const debounce = (callback: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const filtered = dummyCharacters.filter((character) => {
      const nameMatch = character.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const statusMatch =
        !selectedStatus || character.status === selectedStatus;
      return nameMatch && statusMatch;
    });
    setFilteredCharacters(filtered);
  }, [searchText, selectedStatus]);

  const handleSearchChange = debounce((text: string) => {
    console.log("search");
    setSearchText(text);
  }, 300);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <MainHomeStyled>
      <SearchInput onChange={handleSearchChange} />
      <Dropdown
        options={["", "Alive", "Dead", "Unknown"]}
        value={selectedStatus}
        onChange={handleStatusChange}
      />
      <CharactersContainer>
        <Card page="/" results={filteredCharacters} />
      </CharactersContainer>
      {filteredCharacters.length === 0 && (
        <NoResult>
          <p>No characters with the name and status you mentioned! </p>
          <p>Please Try other option</p>
        </NoResult>
      )}
    </MainHomeStyled>
  );
};

export default Home;
