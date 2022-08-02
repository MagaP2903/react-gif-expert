import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// https://04-maga-pagina.netlify.app

export const GifExpertApp = () => {

    const apiKey = 'Yb1aXPy7SR2jHWfae25EDZaw9uYeTiiz'

    const [categories, setcategories] = useState([ 'One Punch']);

    const onAddCategory = (value) =>{

        if (categories.includes(value))  return;

        setcategories([ value, ...categories]);
        /* categories => [...categories, 'maga' ] */

    }

    //rafc

    //clg


    return (
        <>

            {/*titulo*/}
            <h1> GifExpertApp</h1>

            {/*input*/}
            <AddCategory 
            onAddCategory ={ onAddCategory } 
            />

            {/*Listado de gif*/}
            { categories.map( category => (
                <GifGrid
                    key={category}
                    category={category}/>
            )) }

                {/* gif de item*/}
        
        </>
    
    )
}