import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }

    fetchData();
  }, [fetchUrl]);

  //   console.log(movies);

  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.name || '')
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get('v'));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img
            // onClick={handleClick(movie)}
            className={`row-poster ${isLargeRow && 'row-poster-large'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};

export default Row;
