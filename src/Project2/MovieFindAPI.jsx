import React, { Component } from "react";
import Scroll from "./Scroll";

class MovieFindAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
      selectedMovieCd: this.props.selectedMovieCd,
      selectedMovieNm: this.props.selectedMovieNm,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const KEY = "e741f2047718511cc6332ca32873663b";
    const DATE = "25023022";

    try {
      const response = await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=5`
      );
      const { boxOfficeResult } = await response.json();

      this.setState({
        movies: boxOfficeResult.dailyBoxOfficeList,
        loading: false,
      });
    } catch (error) {
      console.error("영화 정보를 가져오는 중에 오류가 발생했습니다:", error);
      this.setState({
        loading: false,
      });
    }
  };

  handleMovieButtonClick = (movieCd, movieNm) => {
    this.setState({
      selectedMovieCd: movieCd,
      selectedMovieNm: movieNm,
    });
  };

  render() {
    const { loading, movies, selectedMovieCd, selectedMovieNm } = this.state;

    return (
      <div>
        {loading ? (
          <div>로딩 중...</div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {movies.map((movie, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "30px",
                  marginRight: "30px",
                  position: "static",
                  left: "400px",
                }}
              >
                <button
                  style={{
                    padding: " 16px",
                    background: "cadetblue",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    transform: 'translate(10%, 40%)',
                  }}
                  onClick={() =>
                    this.handleMovieButtonClick(movie.movieCd, movie.movieNm)
                  }
                >
                  {movie.movieNm}
                </button>
              </div>
            ))}
          </div>
        )}
        <div>
          {selectedMovieCd} {selectedMovieNm}
          <Scroll movieCd={selectedMovieCd} movieNm={selectedMovieNm} />
        </div>
      </div>
    );
  }
}

export default MovieFindAPI;
