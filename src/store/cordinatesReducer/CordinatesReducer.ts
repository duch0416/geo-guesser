import { Actions } from './Types';

export const reducer = (state: any, action: any) => {
    switch (action.type) {
      case Actions.SET_CORDINATES:
        return state.cordinates = action.payload;
      default:
        return state;
    }
  };