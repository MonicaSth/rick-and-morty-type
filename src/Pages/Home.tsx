import React, { useState, useEffect } from "react";
import SearchInput from "../Components/SearchInput";
import Dropdown from "../Components/Dropdown";
import Card from "../Components/Card";
import styled from "styled-components";
import useCharacters, { Character } from "../API/useCharacters";
import Pagination from "../Components/Pagination";

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
const FiltersContainer = styled.div`
  margin: 30px;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResetButton = styled.button`
  padding: 8px;
  background-color: rgb(34, 34, 34, 0.8);
  color: white;
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
const Home: React.FC = () => {
  // const [filteredCharacters, setFilteredCharacters] =
  //   useState<Character[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [page, setPage] = useState(1);
  const [Characters, setCharacters] = useState<Character[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [reset, setReseted] = useState(false);

  const { results } = useCharacters(page, searchText, selectedStatus);

  useEffect(() => {
    if (results && results?.results !== undefined) {
      setCharacters(results.results);
      setLastPage(results.info.pages);
    }
  }, [results, searchText, selectedStatus]);
  console.log(Characters);

  const debounce = (callback: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  //Not filtering anymore,  making a new call from Api for each filter, so we  can populate  with all possible characters with that filters

  // useEffect(() => {
  //   const filtered = Characters.filter((character) => {
  //     const nameMatch = character.name
  //       .toLowerCase()
  //       .includes(searchText.toLowerCase());
  //     const statusMatch =
  //       !selectedStatus || character.status === selectedStatus;
  //     return nameMatch && statusMatch;
  //   });
  //   setFilteredCharacters(filtered);
  // }, [searchText, selectedStatus, Characters]);

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
    setReseted(true);
    setTimeout(() => {
      setReseted(false);
    }, 100);
  };

  const handleNextPage = () => {
    const numberPage = page;
    setPage(numberPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    const numberPage = page;
    setPage(numberPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MainHomeStyled>
      <FiltersContainer>
        <SearchInput onChange={handleSearchChange} reset={reset} />
        <Dropdown
          options={["Alive", "Dead", "Unknown"]}
          value={selectedStatus}
          onChange={handleStatusChange}
        />
        <ResetButton onClick={handleReset}>Reset Filters</ResetButton>
      </FiltersContainer>
      <CharactersContainer>
        <Card page="/" results={Characters} />
      </CharactersContainer>
      <Pagination
        currentPage={page}
        lastPage={lastPage}
        nextPage={handleNextPage}
        previousPage={handlePreviousPage}
      />
      {Characters.length === 0 && (
        <NoResult>
          <p>No characters with the name and status you mentioned! </p>
          <p>Please Try other option</p>
        </NoResult>
      )}
    </MainHomeStyled>
  );
};

export default Home;
