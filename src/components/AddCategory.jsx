import { useState } from "react";



export const AddCategory = ({onNewCategory}) => {

  const [ inputValue, setInputValue ] = useState();
  
  const onInputChange = (e) => {
    setInputValue( e.target.value );
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() <= 1) return;
    onNewCategory(inputValue.trim()); // el componente hijo emite el valor del imput al componente padre
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
    <input 
        type="text"
        placeholder='Write a category'
        value={inputValue}
        onChange={ (e) => onInputChange(e) }
     />
    </form>

  )
}
