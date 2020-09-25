import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          movie.backdrop_path ? movie.backdrop_path : movie.poster_path
        }')`,
      }}
    >
      <div className='banner-content'>
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>

        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>

        <p className='banner-description'>{truncate(movie?.overview, 150)}</p>
      </div>

      <div className='banner-fade-bottom'></div>
    </header>
  );
};

export default Banner;
