import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results);
            })
    }, [fetchURL]);
    // console.log(movies);

    //* SLIDER 
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
        <>
            <h2 className='md:text-xl font-bold text-white p-4'>
                {title}
            </h2>

            <section
                className='flex relative items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                />

                <div id={'slider' + rowId}
                    className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {movies.map((item) => (
                        <Movie
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                />
            </section>

        </>
    )
}

export default Row
//* group hover
//! add rowId for identify each row;