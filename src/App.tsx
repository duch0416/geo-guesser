import React from 'react';
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`

function App() {
  return (
   <GlobalStyle/>
  );
}

export default App;
