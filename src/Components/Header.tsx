import React from "react";
import logo from "../Images/Rick_and_Morty_logo.de13d484.png";
import styled from "styled-components";

const HeaderStyled = styled.div`
  height: auto;
`;

const ImageLogo = styled.img`
  height: max-content;
  max-width: 722px;
  padding: 5px;
  margin: 15px;
  @media (max-width: 968px) {
    max-width: 450px;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <ImageLogo src={logo} alt="Rick and Morty" />
    </HeaderStyled>
  );
};
export default Header;
