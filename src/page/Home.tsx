import * as React from "react";
import styled from "styled-components";

import { useRandomCordinates } from "../hooks/useRandomCordinates";
import Map from "../map/MapContainer";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const Home: React.SFC = () => {
  const { getRandomCordinates } = useRandomCordinates();

  return (
    // <Wrapper onClick={getRandomCordinates}></Wrapper>
    <>
      <h1>My google map</h1>
      <Map></Map>
    </>
  );
};

export default Home;
