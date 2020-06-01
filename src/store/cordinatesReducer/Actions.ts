import { Actions } from './Types';

export const setCords = (cordinates: Array<number>) => {
    return {
        type: Actions.SET_CORDINATES,
        payload: cordinates
    }
}