import {useState, useEffect} from "react"

export const useRandomCordinates = () => {
    const [cordinates, setCordinates] = useState<any>([])

    const getRandomInRange = (from: number, to: number, fixed: number) => {
        return (Math.random() * (to - from) + from).toFixed(fixed);
    }

    useEffect(() => {
        setCordinates([getRandomInRange(-180, 180, 3), getRandomInRange(-90, 90, 3)])
    },[])

    return{
        cordinates
    }
}