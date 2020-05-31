import React from "react";
import { createGlobalStyle } from "styled-components";

import MapContainer from "./map/MapContainer"

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
      <MapContainer/>
    </>
  );
}

export default App;
