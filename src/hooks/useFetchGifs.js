import { useState, useEffect } from "react";
import { getGifs } from "../hellpers/getGifs";


export const useFecthGifs = ( category ) => {

    
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    await getGifs(category).then(newImages=>setImages(newImages))
    setIsLoading(false);
  }

  useEffect(()=>{
    getImages();
  },[])


    return {
        images,
        isLoading
    }
}