import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({onAddCategory}) =>{

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ( {target} ) => {
        //console.log(event.target.value)
        setinputValue(target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        onAddCategory( inputValue.trim() );
        setinputValue('')
    }


    return (
        <form onSubmit={ (event) => onSubmit(event)}>
        <input type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
            /*(event) => onInputChange(event) */
        />
        </form>
    )
}