//Todos los hooks empiezan con USE

//Cuando uno necesita importar react es cuando uno 
//va a retornar un jsx
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs( category )
            .then( imgs =>{
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category]);//Solo se ejecuta la primera vez y cada vez que el argumento cambia  


    return state; // Qué devuelve?

    //su estado inicial { data: [], loading: true}
}
