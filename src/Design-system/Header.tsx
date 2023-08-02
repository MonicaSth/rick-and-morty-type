import React from "react";
import logo from "../Images/Rick_and_Morty_logo.de13d484.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useThemeContext } from "../Context/Theme-context";

const HeaderStyled = styled.div`
  height: auto;
`;

const ImageLink = styled(Link)``;
const SwitchDiv = styled.div`
  position: absolute;
  top: 25px;
  right: 40px;
`;
const ImageLogo = styled.img`
  height: max-content;
  max-width: 722px;
  padding: 5px;
  margin: 15px;
  @media (max-width: 968px) {
    max-width: 450px;
  }
  @media (max-width: 530px) {
    max-width: 95%;
  }
`;

const SwitchButton = styled.button<{ themeIsLight: boolean }>`
  padding: 8px;
  background-color: ${(props) =>
    props.themeIsLight ? "rgb(235, 235, 235, 0.8)" : "rgb(34, 34, 34, 0.8)"};
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

const Header = () => {
  const { toggleTheme, themeIsLight } = useThemeContext();

  const message = themeIsLight ? "Dark Mode 🌙" : "Light Mode ☀️";
  return (
    <HeaderStyled>
      <ImageLink to={``}>
        <ImageLogo src={logo} alt="Rick and Morty" />
      </ImageLink>
      <SwitchDiv>
        <SwitchButton themeIsLight={themeIsLight} onClick={toggleTheme}>
          {message}
        </SwitchButton>
      </SwitchDiv>
    </HeaderStyled>
  );
};
export default Header;
