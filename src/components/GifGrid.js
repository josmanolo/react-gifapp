import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFecthGifs(category);

    return (
        <>
            <h3 className='card animate__animated animate__fadeInUp'>{category}</h3>

            {loading &&   <p>Loading</p>}

            <div className='card-grid'>
                    {
                        images.map( gif => (
                            <GifGridItem 
                                {...gif}
                                key={gif.id}
                            />
                        ))
                    }
            </div>
        </>
    )
}
