import * as React from "react";
import styled from "styled-components";

import { useRandomCordinates } from "../hooks/useRandomCordinates";
import MapContainer from "../map/MapContainer";
import StreetView from "../map/StreetView";


const Home: React.SFC = () => {
  const { getRandomCordinates } = useRandomCordinates();

  return (
    // <MapContainer
    //   googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    //   loadingElement={<div style={{ height: `100%` }} />}
    //   containerElement={<div style={{ height: `400px` }} />}
    //   mapElement={<div style={{ height: `100%` }} />}
    // />
    <StreetView
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default Home;
