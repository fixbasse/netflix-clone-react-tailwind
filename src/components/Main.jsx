import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios';

const Main = () => {
    const [movies, setMovies] = useState([]);
    // random movies
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results)
                // console.log(movies);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    //console.log(movie);

    //* CUT the word and add ...
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        };
    };


    return (
        <main className='w-full h-[550px] text-white'>

            <div
                className='w-full h-full'>
                {/* OVERLAY */}
                <span className='w-full h-[550px] absolute bg-gradient-to-r from-black'>
                </span>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className='w-full h-full object-cover'
                />

                <article
                    className='absolute w-full top-[20%] flex flex-col gap-4 p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        {movie?.title}
                    </h1>

                    {/* BUTTON */}
                    <div>
                        <button className='border py-2 px-5 bg-gray-300 text-black'>Play</button>
                        <button className='border py-2 px-5 ml-4'>Watch Later</button>
                    </div>

                    <p
                        className='text-gray-400 text-sm'>
                        Released {movie?.release_date}
                    </p>
                    <p
                        className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </article>

            </div>

        </main>
    )
}

export default Main

//* 2.1 Get Data from Request.js using Axios

//* 150 = 150 words;