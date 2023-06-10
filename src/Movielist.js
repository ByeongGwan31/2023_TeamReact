import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import getMovies from "./movieapi";

function Movie({ poster_path, title, overview, genre_ids, id }) {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>{overview}</p>
      <ul>{genre_ids.map((genre) => (<li key={genre}>{genre}</li>))}</ul>
    </div>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired
};

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
      setLoading(false);
    };
    fetchMovies();
  }, []);
  
  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? <h2>Loading...</h2> :
        <div>
          {movies.map(movie =>
            <Movie
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genre_ids={movie.genre_ids}
            />)}
        </div>
      }
    </div>
  );
}

export default MovieList;
