import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = ()=>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];

    const [ categories, setCategories ] = useState(['Rick and morty'])

/*     const handleAdd = () => {
        setCategories( [...categories, 'SerieDeNico']);
        //setCategories( [ 'SerieDeNico'], ...categories);
      //Deja las categorias que ya tenía y agrega una nueva, spreed?
    } // si pongo primero las categories anteriores me sale de últimas y viceversa
 */


    return(

        <>
            <h2>GifExpertApp</h2>
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