import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({ item }) => {
    const [like, setLike] = useState(false);

    return (
        <main
            key={item.id} className='w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] p-2 cursor-pointer inline-block relative'>
            <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item.id}
                className='w-full'
            />
            {/* HOVER */}
            <div
                className='text-white absolute top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/80 w-full h-full p-2'>
                <p className='whitespace-normal text-center flex items-center justify-center h-full text-xs md:text-sm'>
                    {item?.title}
                </p>

                {/* Heart icon */}
                <span>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </span>
            </div>

        </main>
    )
}

export default Movie