import * as React from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = styled(GoogleMap)`
  width: 400px;
  height: 400px;
`;
export interface MapProps {}

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapContainer: React.SFC<MapProps> = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <Map mapContainerStyle={containerStyle} center={center} zoom={10}></Map>
    </LoadScript>
  );
};

export default MapContainer;
