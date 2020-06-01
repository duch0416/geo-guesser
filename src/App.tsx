import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./page/Home";
import { CordinatesProvider } from "./store/cordinatesReducer/CordinatesContext";

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
      <CordinatesProvider>
        <Home />
      </CordinatesProvider>
      {/* <MapContainer/> */}
    </>
  );
}

export default App;
