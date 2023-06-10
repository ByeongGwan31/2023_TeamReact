import React, { Component } from 'react';

class MovieInfo extends Component {
    render() {
        const { movie } = this.props;

        if (!movie) {
          return null;
        }       
        
        return (
            <div className="movie-info">
              <ul>
                <h3>제목 : {movie.movieNm}</h3>
                <p>장르 : <strong>{movie.genres[0].genreNm}</strong></p>
                <p>감독 : <strong>{movie.directors[0].peopleNm}</strong></p>
                <p>출연 : <strong>{movie.actors.slice(0, 5).map((actor) => actor.peopleNm).join(", ")}{movie.actors.length > 5 && " 외 " + (movie.actors.length - 5) + "명"}</strong></p>
                <p>개봉일 : <strong>{movie.openDt}</strong></p>
                <p>평점 : <strong>{movie.movieNm}</strong></p>
                <p>상영시간 : <strong>{movie.showTm}분</strong></p>
              </ul>
            </div>
          );
    }
}

export default MovieInfo;