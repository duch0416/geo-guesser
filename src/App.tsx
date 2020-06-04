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
 
  .gm-style a[href^="https://maps.google.com/maps"] {
    display: none !important;
  }
  .gmnoprint div {
      background:none !important;
  }
  .gmnoprint a, .gmnoprint span, .gm-style-cc {
      display:none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CordinatesProvider>
        <Home />
      </CordinatesProvider>
    </>
  );
}

export default App;
