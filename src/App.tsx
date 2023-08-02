import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CharacterDetails from "./Pages/CharacterDetails";
import { styled } from "styled-components";

//  this will be added to change the theme...

// import starLightImage from "./Images/Rick & Morty star light1.jpg";
// import darkImage from "./Images/Rick and Morty Dark.jpg";

// type MainProps = {
//   light: boolean;
// };

// const Main = styled.div<MainProps>`
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-image: ${(props) =>
//     props.light ? `url(${starLightImage})` : `url(${darkImage})`};
// `;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

export default App;
