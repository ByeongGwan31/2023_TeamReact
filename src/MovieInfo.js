import React from 'react';
import "./MovieInfo.css";

const MovieInfo = ({movies, selectedMovieId, changeMovie}) => {
  
    return (
        <div className="container">
          {movies.map((movie) => {
            if (movie.id === selectedMovieId) {

              return (
                <div key={movie.id} className="movie-container" style={{flext: 1, border: "1px blue solid", padding: 30, margin: 10}}>
                  <img src={movie.image} alt={movie.title} />
                  <h2 className="movie-title">{movie.title}</h2>
                  <h3><strong>장르 : </strong>{movie.genre}</h3>
                  <div className="dasd">
                  <p>{movie.synopsis.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}</p>
                  <p><strong>상영 시간 : </strong>{movie.duration}</p>
                  <p><strong>평점 : </strong>{movie.rating}</p>
                  <p><strong>출연진 : </strong> {movie.cast}</p>
                  </div>
                </div>  
              );
            } else {
                return null;
              }
            })}.
          </div>
        );
  };

export default MovieInfo;