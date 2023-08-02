import React from "react";
import Header from "./Design-system/Header";
import Footer from "./Design-system/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CharacterDetailsPage from "./Pages/CharacterDetails";
import { styled } from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
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
