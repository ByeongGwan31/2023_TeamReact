import React, { Component } from "react";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
      sortByReleaseDate: false,
      sortByAudience: false,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    const KEY = "e741f2047718511cc6332ca32873663b";
    const DATE = "25023022";

    fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
    )
      .then((response) => response.json())
      .then((data) => {
        let sortedMovies = data.boxOfficeResult.dailyBoxOfficeList;

        if (this.state.sortByReleaseDate) {
          sortedMovies = sortedMovies.sort((a, b) =>
            a.openDt.localeCompare(b.openDt)
          );
        }

        if (this.state.sortByAudience) {
          sortedMovies = sortedMovies.sort((a, b) => b.audiAcc - a.audiAcc);
        }

        this.setState({
          movies: sortedMovies,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleReload = () => {
    this.setState({ loading: true });
    this.getMovies();
  };

  handleSortByReleaseDate = () => {
    this.setState(
      (prevState) => ({
        sortByReleaseDate: !prevState.sortByReleaseDate,
      }),
      this.getMovies
    );
  };

  handleSortByAudience = () => {
    this.setState(
      (prevState) => ({
        sortByAudience: !prevState.sortByAudience,
      }),
      this.getMovies
    );
  };

  render() {
    const { loading, movies, sortByReleaseDate, sortByAudience } = this.state;

    return (
      <div>
        <div>
          <button onClick={this.handleReload}>새로고침</button>
          <button onClick={this.handleSortByReleaseDate}>
            {sortByReleaseDate ? "정렬 해제" : "개봉일 순으로 정렬"}
          </button>
          <button onClick={this.handleSortByAudience}>
            {sortByAudience ? "정렬 해제" : "관객 수 별로 정렬"}
          </button>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2>영화 목록</h2>
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
                  <h3>{movie.movieNm}</h3>
                  <p>누적 관객 수: {movie.audiAcc}명</p>
                  <p>영화 개봉일: ({movie.openDt})</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
