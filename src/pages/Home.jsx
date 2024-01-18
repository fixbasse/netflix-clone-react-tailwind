import React from 'react'

import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  const openTap = () => {
    window.open('https://www.youtube.com/watch?v=ATz8wg6sg30')
  };

  return (
    <>
      <Main />

      <Row rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming} />
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} />

      <div className='flex justify-center py-4'>
        <h2
          onClick={openTap}
          className='text-gray-200 font-bold cursor-pointer'>
          Credit to Code Commerce
        </h2>
      </div>
    </>
  )
}

export default Home
// passing data through Row
