import * as React from "react";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';


const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export interface MapProps {}

const MapContainer: React.SFC<MapProps> = () => {
  return (
    <Wrapper>
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`}}
          defaultCenter={{lat: 59.95, lng: 30.33}}
          defaultZoom={11}
        >
        </GoogleMapReact>
    </Wrapper>
  );
};

export default MapContainer;
