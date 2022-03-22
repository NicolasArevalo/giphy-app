import { useEffect, useState } from 'react';

import { getTrends } from '../helpers/getTrends';


export const useFetchTrends = ( category ) => {
    
    const [trend, setTrend] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getTrends()
            .then( gifs =>{
                setTrend({
                    data: gifs,
                    loading: false
                })
            } )

    }, []);//Solo se ejecuta la primera vez y cada vez que el argumento cambia  


    return trend; // Qué devuelve?

    //su estado inicial { data: [], loading: true}
}
