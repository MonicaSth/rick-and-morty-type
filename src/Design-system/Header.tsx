import React from "react";
import logo from "../Images/Rick_and_Morty_logo.de13d484.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.div`
  height: auto;
`;

const ImageLink = styled(Link)``;
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
const Header = () => {
  return (
    <HeaderStyled>
      <ImageLink to={``}>
        <ImageLogo src={logo} alt="Rick and Morty" />
      </ImageLink>
    </HeaderStyled>
  );
};
export default Header;
