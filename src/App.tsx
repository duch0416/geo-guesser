import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./page/Home"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home/>
      {/* <MapContainer/> */}
    </>
  );
}

export default App;
