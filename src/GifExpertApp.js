import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = ()=>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

    const [ categories, setCategories ] = useState(['Leones'])

/*     const handleAdd = () => {
        setCategories( [...categories, 'SerieDeNico']);
        //setCategories( [ 'SerieDeNico'], ...categories);
      //Deja las categorias que ya tenía y agrega una nueva, spreed?
    } // si pongo primero las categories anteriores me sale de últimas y viceversa
 */


    return(

        <>
            <h2>GifExpertApp</h2>
            <p>Hola, puedes buscar aquí una palabra y verás gifs que vienen de <a href="https://giphy.com">GIPHY</a></p>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    )
                }
            </ol>
        </>

    );

};

export default GifExpertApp;