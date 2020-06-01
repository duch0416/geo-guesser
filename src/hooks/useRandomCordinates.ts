import { CordinatesContext } from './../store/cordinatesReducer/CordinatesContext';
import { setCords } from './../store/cordinatesReducer/Actions';
import { useContext} from "react"

export const useRandomCordinates = () => {
    const {dispatch} = useContext(CordinatesContext)

    const getRandomInRange = (from: number, to: number, fixed: number) => {
        return (Math.random() * (to - from) + from).toFixed(fixed);
    }

    const getRandomCordinates = () => {
        dispatch(setCords([getRandomInRange(-180, 180, 3), getRandomInRange(-90, 90, 3)]))
    }

    return{
        getRandomCordinates,
    }
}