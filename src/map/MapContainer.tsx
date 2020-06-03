import * as React from "react";
import styled from "styled-components";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const Map = styled(GoogleMap)`
  display: flex;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export interface MapProps {}

const MapContainer: React.SFC<MapProps> = () => {
  return (
    <Map
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
};

export default withScriptjs(withGoogleMap(MapContainer));
