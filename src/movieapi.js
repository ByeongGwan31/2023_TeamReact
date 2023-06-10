import React, { useState, useEffect } from "react";
import Movielist from "./Movielist";

const KEY = "your KEY";
const URL = "https://api.themoviedb.org/3/movie/";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `${URL}popular?api_key=${KEY}`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <Movielist
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genre_ids={movie.genre_ids}
        />
      ))}
    </div>
  );
}

export default movieapi;
