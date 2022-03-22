import React from 'react'
import { useFetchTrends } from '../hooks/useFetchTrends'
import { GifGridItem } from './GifGridItem'

export const TrendsGrid = () => {

    const { data:images , loading } = useFetchTrends();

    return (
        <>
            <h3>Trending 🔥</h3>

            { loading && <p className='animate__animated animate__bounce'>Loading</p>} {/* Ampersan(? nos deja evaluar algo solo con respuesta positiva, el ternario (?) positivca y negativa */}


            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />    
                    ))

                }
            </div>
            

        </>
    )
}
