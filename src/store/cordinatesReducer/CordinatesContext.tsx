import React, { useReducer, Dispatch, createContext } from "react";

import { initStateType } from "./Types";
import { reducer } from "./CordinatesReducer";

const initState = {
  cordinates: [0, 0],
};

const CordinatesContext = createContext<{
  state: initStateType;
  dispatch: Dispatch<any>;
}>({ state: initState, dispatch: () => null });


export const CordinatesProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return(
     <CordinatesContext.Provider value={{state, dispatch}}>
          {children}
     </CordinatesContext.Provider>
  )
};
