import * as React from "react";
import styled from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  /* background-color: red; */
`;


const Map = styled(LeafletMap)`
    width: 100%;
    height: 100%;
`;
export interface MapProps {

}

const MapContainer: React.SFC<MapProps> = () => {
  return (
    <Wrapper>
      <Map center={[51.505, 20.05]} zoom={11}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
    </Map>
    </Wrapper>
  );
};

export default MapContainer;
