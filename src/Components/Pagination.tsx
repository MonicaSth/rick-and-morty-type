import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../Context/Theme-context";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  nextPage: () => void;
  previousPage: () => void;
}

const PaginationDiv = styled.div<{ themeIsLight: boolean }>`
  margin: 15px 0px 50px;
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  text-shadow: 2px 2px 3px
    ${(props) => (props.themeIsLight ? "white" : "black")};
`;
const PageNumber = styled.span`
  border: 1px solid grey;
  box-shadow: 1px 4px 7px white;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 9px 4px;
`;

const ButtonChangePage = styled.button<{
  themeIsLight: boolean;
  disabled?: boolean;
}>`
  background-color: transparent;
  color: ${(props) =>
    props.themeIsLight
      ? props.disabled
        ? "gray"
        : "black"
      : props.disabled
      ? "gray"
      : "white"};
  text-shadow: 2px 2px 3px
    ${(props) => (props.themeIsLight ? "white" : "black")};
  border: 0;
  margin: 12px;
  cursor: pointer;
  font-size: medium;
  width: 200px;
  text-align: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.themeIsLight ? "rgb(1, 135, 36)" : "rgb(50, 195, 34)"};
    font-size: larger;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 11px;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  nextPage,
  previousPage,
}) => {
  const { themeIsLight } = useThemeContext();

  const handleNextPage = () => {
    nextPage();
  };

  const handlePreviousPage = () => {
    previousPage();
  };

  return (
    <>
      <PaginationDiv themeIsLight={themeIsLight}>
        <ButtonChangePage
          themeIsLight={themeIsLight}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          ◄ Previous page
        </ButtonChangePage>
        <PageNumber>{currentPage}</PageNumber>
        <ButtonChangePage
          themeIsLight={themeIsLight}
          onClick={handleNextPage}
          disabled={currentPage === lastPage}
        >
          Next page ►
        </ButtonChangePage>
      </PaginationDiv>
    </>
  );
};

export default Pagination;
