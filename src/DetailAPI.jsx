import React, { Component } from "react";
import MovieInfo from "./MovieInfo";
import MovieDetail from "./MovieDetail";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const KEY = "e741f2047718511cc6332ca32873663b";
    const { movieCd } = this.props;

    try {
      const response = await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${KEY}&movieCd=${movieCd}`
      );
      const { movieInfoResult } = await response.json();

      this.setState({
        movies: [movieInfoResult.movieInfo],
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching movie information:", error);
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { loading, movies } = this.state;

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div style={{ display: "flex" }}>
            {movies.map((movie) => (
              <div
                key={movie.movieCd}
                style={{
                  flex: 1,
                  border: "1px red solid",
                  padding: 30,
                }}
              >
                {/* <div>영화명: {movie.movieNm}<br></br></div>
                <div>감독: {movie.directors[0].peopleNm}<br></br></div>
                <div>배우: {movie.actors.map((actor) => actor.peopleNm).join(", ")}<br></br></div>
                <div>장르명: {movie.genres[0].genreNm}<br></br></div>
                <div>개봉연도: {movie.openDt}</div> */}
                
                <MovieDetail movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default API;
