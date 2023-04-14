import { useFecthGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFecthGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      {isLoading && ( <h6> Cargando ...</h6> )}
      <div className="card-grid">
          {images.map((image)=>(
          <GifItem key={image.id} {...image}/> /* con el spread op exparso todas las propiedades al componente hijo, esto se usa mucho cuando se maneja muchas propiedades, es una forma de haacerlo */
          ))}
      </div>

    </>
  )
}