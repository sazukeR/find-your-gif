import { useState } from "react";
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
const [categories, setCategories] = useState([]);
const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); // el componente padre recibe la emision del componente hijo AddCategory
}
  return (
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} /> 
        {/* listado de Gif */}
        {
        categories.map( category => 

            <GifGrid key={ category } category={ category } />
            
          )
          }
        {/* Gif Item */}
    </>
  )
}
