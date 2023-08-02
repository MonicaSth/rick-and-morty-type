import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Character } from "../API/useCharacters";
import { useThemeContext } from "../Context/Theme-context";

interface CardProps {
  page: string;
  results: Character[];
}
const CardContainer = styled(Link)<{ themeIsLight: boolean }>`
  text-decoration: none;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.8)" : "rgb(34, 34, 34, 0.8)"};
  color: ${(props) => (props.themeIsLight ? "black" : "white")};
  box-shadow: 1px 4px 7px #747494;
  border-radius: 10px;
  display: flex;
  flex-basis: 18%;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  min-width: 157px;
  width: 100%;
  padding: 0;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    border-color: rgb(50, 195, 34);
    box-shadow: 1px 4px 7px rgb(50, 195, 34);
    transform: scale(1.06);
  }
`;

const CardImage = styled.img`
  border-radius: 157px;
  margin: 5% 5%;
  width: 90%;
`;

const CardContent = styled.div`
  padding: 16px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.div`
  font-weight: bold;
  @media (min-width: 950px) {
    font-size: large;
  }
`;

const GenderBadge = styled.div<{
  gender: "Female" | "Male" | "Genderless" | "unknown";
}>`
  position: absolute;
  top: -10px;
  right: 8px;
  font-size: 17px;
  color: #fff;
  box-shadow: 1px 4px 7px #747494;
  padding: 4px 8px;
  border-radius: 25px;
  background-color: ${({ gender }) =>
    gender === "Female"
      ? "#dc3545"
      : gender === "Male"
      ? "#3976fa"
      : gender === "Genderless"
      ? "#f5da42"
      : "#6c757d"};
`;

const Card: React.FC<CardProps> = ({ page, results }) => {
  const { themeIsLight } = useThemeContext();
  const handleClick = () => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <>
      {results ? (
        results.map((x) => (
          <CardContainer
            themeIsLight={themeIsLight}
            to={`${page}${x.id}`}
            key={x.id}
            onClick={handleClick}
          >
            <CardImage src={x.image} alt="" />
            <CardContent>
              <GenderBadge gender={x.gender}>{x.gender}</GenderBadge>
              <Name>{x.name}</Name>
              <div>{x.status}</div>
            </CardContent>
          </CardContainer>
        ))
      ) : (
        <div>No Characters Found :/</div>
      )}
    </>
  );
};

export default Card;
