import React, { useEffect } from "react";
import Header from "./Design-system/Header";
import Footer from "./Design-system/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CharacterDetailsPage from "./Pages/CharacterDetails";
import { styled } from "styled-components";
import Dark from "./Images/Dark.jpg";
import Light from "./Images/Light.jpg";
import { useThemeContext } from "./Context/Theme-context";
import ImagePreloader from "./Components/ImagePreloader";

const Main = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const { themeIsLight } = useThemeContext();

  useEffect(() => {
    document.body.style.background = themeIsLight
      ? `url(${Light}) `
      : `url(${Dark})`;
    document.body.style.color = themeIsLight ? "black" : "white";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPositionY = "top";
    document.body.style.backgroundPositionX = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.scrollBehavior = "smooth";
    document.body.style.textAlign = "center";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.flexDirection = "row";
  }, [themeIsLight]);

  return (
    <BrowserRouter>
      <Main>
        <Header />
        <ImagePreloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CharacterDetailsPage />} />
        </Routes>
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

export default App;
