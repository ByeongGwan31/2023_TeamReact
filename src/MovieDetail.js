import React, { Component } from 'react';

class MovieDetail extends React.Component {
  
  render() {
    const { movie } = this.props;

    if (!movie) {
      // movie 객체가 없는 경우 렌더링하지 않음
      return null;
    }      
    return (
      <div>
            <br></br>
            <h2>영화 정보</h2>
            <ul>
                <li><strong>제목:{movie.movieNm}</strong> </li>
                <li><strong>장르:{movie.genres[0].genreNm}</strong></li>
                <li><strong>감독:{movie.directors[0].peopleNm}</strong> </li>
                <li><strong>출연:{movie.actors.map((actor) => actor.peopleNm).join(", ")}</strong> </li>
                <li><strong>개봉일:{movie.openDt}</strong> </li>
                <li><strong>평점:{movie.movieNm}</strong> </li>
            </ul>
        </div>
    );
  }
}



export default MovieDetail;