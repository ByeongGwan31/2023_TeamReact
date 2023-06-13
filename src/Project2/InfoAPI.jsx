import React, { Component } from "react";
import MovieInfo from "./MovieInfo";

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

  componentDidUpdate(prevProps) {
    if (prevProps.movieCd !== this.props.movieCd) {
      this.getMovies();
    }
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
              <div key={movie.movieCd}>
                <MovieInfo movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default API;
