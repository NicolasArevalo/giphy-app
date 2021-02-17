import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

// ESTE LO USAMOS ANTES DE LOS HOOKS 


export const GifGrid = ({ category }) => {


   /*  const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category )
            .then( img => setImages(img));
    }, [ category ])//El segundo argumento es una lista de a dónde pertenece o de quien depende
    // Como no depende de nadie se deja vacío y así solo se ejecuta una vez.

 */
    
    
    return (
        <>
            <h3>{category}</h3>

            { loading ? 'Cargando...':'Ya cargó xD' }
            {/* <div c lassName="card-grid">


                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )) //Tenga cuidado mi pana de poner () en vez de {} para el return implícito, sino va a estar esperando un return
                }
            </div> */}
        </>
    )
}
