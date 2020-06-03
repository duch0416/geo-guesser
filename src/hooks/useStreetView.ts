import { useState, useEffect } from "react";
import axios from "axios";

export const useStreetView = () => {
    const [x, setX] = useState()
  const getImg = async () => {
    const img = await axios.get(
      `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    setX(img.data)
  };

  return{
      getImg,
      x
  }

};
