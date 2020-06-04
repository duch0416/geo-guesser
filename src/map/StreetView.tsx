import React, { useState } from "react";
import styled from "styled-components";
import {
  GoogleMap,
  LoadScript,
  StreetViewPanorama,
  StreetViewService,
} from "@react-google-maps/api";

import { CordinatesContext } from './../store/cordinatesReducer/CordinatesContext';
import { setCords } from './../store/cordinatesReducer/Actions';
import { useContext} from "react"

const Pano = styled(StreetViewPanorama)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export interface StreetView {}

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat:  51.1069200,
  lng: 16.9299300
};

const StreetView: React.SFC<StreetView> = () => {
  const [panoId, setPanoId] = useState("");
  const {state, dispatch} = useContext(CordinatesContext)
  const onLoad = (streetViewService: any) => {
    streetViewService.getPanorama(
      {
        location: center,
        preference: "nearest",
        radius: 500,
        source: 'outdoor'
      },
      (data: any, status: any) => {
        dispatch(setCords([data.location.latLng.lat(), data.location.latLng.lng()]))
        console.log(state)
        setPanoId(data.location.pano)
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={7} center={center}>
        <Pano
          pano={panoId}
          visible={true}
          options={{
            disableDefaultUI: true,
            showRoadLabels: false,
            enableCloseButton: false,
          }}
        />
        <StreetViewService onLoad={onLoad} />
      </GoogleMap>
    </LoadScript>
  );
};

export default StreetView;
