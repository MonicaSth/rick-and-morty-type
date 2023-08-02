import React, { useState, useEffect } from "react";
import SearchInput from "../Components/SearchInput";
import Dropdown from "../Components/Dropdown";
import Card from "../Components/Card";
import styled from "styled-components";
import useCharacters, { Character } from "../API/useCharacters";
import Pagination from "../Components/Pagination";
import { useThemeContext } from "../Context/Theme-context";

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 20px;
  margin: 2% 5%;
`;
const NoResult = styled.div<{ themeIsLight: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  min-height: 200px;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.8)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  box-shadow: 1px 4px 7px #747494;
  border-radius: 10px;
  margin: 2% 10% 10%;
`;
const MainHomeStyled = styled.div`
  width: 100%;
`;
const FiltersContainer = styled.div`
  width: auto;
  margin: 30px 30px 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 465px) {
    flex-direction: column;
  }
`;

const ResetButton = styled.button<{ themeIsLight: boolean }>`
  padding: 8px;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(72, 199, 105, 0.8)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-shadow: 1px 4px 7px #747494;
  margin: 10px;
  transition: transform 0.1s ease-in-out;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    border-color: rgb(50, 195, 34);
  }
  &:hover {
    cursor: pointer;
    border-color: rgb(50, 195, 34);
    box-shadow: 1px 4px 7px rgb(50, 195, 34);
  }
`;

const Home: React.FC = () => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [page, setPage] = useState(1);
  const [Characters, setCharacters] = useState<Character[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [reset, setReset] = useState(false);
  const { fetchedCharacters } = useCharacters(page, searchText, selectedStatus);
  const { themeIsLight } = useThemeContext();

  useEffect(() => {
    if (fetchedCharacters) {
      setCharacters(fetchedCharacters.results);
      setLastPage(fetchedCharacters.info.pages);
    }
  }, [fetchedCharacters, searchText, selectedStatus]);

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
    const filtered = Characters.filter((character) => {
      const nameMatch = character.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const statusMatch =
        !selectedStatus || character.status === selectedStatus;
      return nameMatch && statusMatch;
    });
    setFilteredCharacters(filtered);
  }, [searchText, selectedStatus, Characters]);

  if (!fetchedCharacters) {
    return <div>Loading...</div>;
  }

  const handleSearchChange = debounce((text: string) => {
    setSearchText(text);
    setPage(1);
  }, 300);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setPage(1);
  };

  const handleReset = () => {
    setSearchText("");
    setSelectedStatus("");
    setPage(1);
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 300);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <MainHomeStyled>
      <FiltersContainer>
        <SearchInput onChange={handleSearchChange} reset={reset} />
        <Dropdown
          options={["Alive", "Dead", "unknown"]}
          value={selectedStatus}
          onChange={handleStatusChange}
        />
        <ResetButton themeIsLight={themeIsLight} onClick={handleReset}>
          Reset Filters
        </ResetButton>
      </FiltersContainer>
      {filteredCharacters.length !== 0 && (
        <>
          <CharactersContainer>
            <Card page="/" results={filteredCharacters} />
          </CharactersContainer>
          <Pagination
            currentPage={page}
            lastPage={lastPage}
            nextPage={handleNextPage}
            previousPage={handlePreviousPage}
          />
        </>
      )}
      {filteredCharacters.length === 0 && (
        <NoResult themeIsLight={themeIsLight}>
          <p>No characters with the name and status you mentioned! </p>
          <p>Please Try other options</p>
        </NoResult>
      )}
    </MainHomeStyled>
  );
};

export default Home;
