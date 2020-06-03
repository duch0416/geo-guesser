import * as React from "react";
import styled from "styled-components";
import ReactStreetview from "react-streetview";

const Wrapper = styled.div`
  width: 800px;
  height: 450px;
`;

export interface StreetViewProps {}

const StreetView: React.SFC<StreetViewProps> = () => {
  const streetViewPanoramaOptions = {
    position: {lat: 52.4033201, lng: 16.9299300},
    
    zoom: 1,
  };

  return (
    <Wrapper>
      <ReactStreetview
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      ></ReactStreetview>
    </Wrapper>
  );
};

export default StreetView;
