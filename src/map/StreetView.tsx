import * as React from "react";
import styled from "styled-components";
import {
  withScriptjs,
  withGoogleMap,
  StreetViewPanorama,
  OverlayView,
  GoogleMap,
} from "react-google-maps";

const Pano = styled(StreetViewPanorama)`
  display: flex;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export interface StreetView {}

const StreetView: React.SFC<StreetView> = () => {
  return (
    <GoogleMap>
      <Pano
        defaultPosition={{ lat: 46.9171876, lng: 17.895183 }}
        visible
        defaultOptions={{disableDefaultUI: true, showRoadLabels: false, enableCloseButton:false}}
      ></Pano>
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(StreetView));
