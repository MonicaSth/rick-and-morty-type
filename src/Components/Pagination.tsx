import React from "react";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  lastPage: number;

  nextPage: () => void;
  previousPage: () => void;
}
const PaginationDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
`;
const PageNumber = styled.span`
  margin: 15px;
  border: 1px solid grey;
  box-shadow: 1px 4px 7px white;
  border-radius: 50%;
  color: white;
  padding: 3px;
`;

const ButtonChangePage = styled.button`
  background-color: transparent;
  color: white;
  border: 0px;
  margin: 10px;
  cursor: pointer;
  font-size: medium;
  &:hover {
    cursor: pointer;
    color: rgb(50, 195, 34);
    font-size: larger;
    margin-left: 1px;
    margin-right: 0px;
    // margin-bottom: 40px;
    margin-top: 6px;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  nextPage,
  previousPage,
}) => {
  const handleNextPage = () => {
    nextPage();
  };

  const handlePreviousPage = () => {
    previousPage();
  };

  return (
    <>
      <PaginationDiv>
        {currentPage !== 1 && (
          <>
            <ButtonChangePage onClick={handlePreviousPage}>
              ◄ Previous page
            </ButtonChangePage>
          </>
        )}
        <PageNumber>{currentPage}</PageNumber>
        {currentPage !== lastPage && (
          <ButtonChangePage onClick={handleNextPage}>
            Next page ►{" "}
          </ButtonChangePage>
        )}
      </PaginationDiv>
    </>
  );
};

export default Pagination;
