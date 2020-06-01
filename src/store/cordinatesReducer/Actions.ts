import { Actions } from './Types';

export const setCords = (cordinates: Array<string>) => {
    return {
        type: Actions.SET_CORDINATES,
        payload: cordinates
    }
}