import React from "react";
import Header from "./Design-system/Header";
import Footer from "./Design-system/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CharacterDetailsPage from "./Pages/CharacterDetails";
import { styled } from "styled-components";
import { useThemeContext } from "./Context/Theme-context";
import ImagePreloader from "./Components/ImagePreloader";
import "./index.css";

const Main = styled.main`
  margin: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--background-image) no-repeat;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  color: var(--text-color);
`;

function App() {
  const { themeIsLight } = useThemeContext();

  return (
    <BrowserRouter>
      <Main className={themeIsLight ? "light-theme" : "dark-theme"}>
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
