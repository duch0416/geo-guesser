import * as React from 'react';
import styled from "styled-components"

import {useRandomCordinates} from "../hooks/useRandomCordinates"

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`

const Home: React.SFC = () => {
    const {getRandomCordinates} = useRandomCordinates()
    return ( 
    <Wrapper onClick={getRandomCordinates}></Wrapper>
     );
}
 
export default Home;