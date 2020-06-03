import * as React from "react";
import styled from "styled-components";

import { useRandomCordinates } from "../hooks/useRandomCordinates";
import Map from "../map/MapContainer";
import StreetView from "../streetView/StreetView"



const Home: React.SFC = () => {
  const { getRandomCordinates } = useRandomCordinates();

  return (
    <>
      <h1>My google map</h1>
      <StreetView></StreetView>
    </>
  );
};

export default Home;
