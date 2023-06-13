import React, { Component } from 'react';

class MovieDetail extends React.Component {
  
  render() {
    const { movie } = this.props;

    if (!movie) {
      return null;
    }      
    return (
      <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '850px',
        height: '450px',
        padding: '20px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
            <br></br>
            <h2>{movie.movieNm}</h2>
            <ul>
                    <img src="/MovieIMG.png" style={{ width: '15%', height: '20%' }} alt="영화 포스터" />
                    <li><strong>감독: {movie.directors[0].peopleNm}</strong></li>
                    <li><strong>출연: {movie.actors.map((actor) => actor.peopleNm).join(", ")}</strong></li>
                    <li><strong>장르: {movie.genres[0].genreNm} {movie.genres[1] ? movie.genres[1].genreNm : null}</strong></li>
                    <li><strong>개봉일: {movie.openDt}</strong></li>
                    <li><strong>평점: {movie.movieNm}</strong></li>
                    <li><strong>관람 등급: {movie.audits[0].watchGradeNm}</strong></li>
                    <li><strong>국가: {movie.nations.map((nation) => nation.nationNm).join(", ")}</strong></li>
               
            </ul>
        </div>
    );
  }
}



export default MovieDetail;