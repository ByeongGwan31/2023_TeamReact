import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MovieSlide.css';

const MovieSlide2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const KEY = "e741f2047718511cc6332ca32873663b";
      const DATE = "25023022";
      const response = await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
      );
      const data = await response.json();
      setMovies(data.boxOfficeResult.dailyBoxOfficeList);
    };

    fetchMovies();
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMovie(null);
  };

  return (
    <div className="movie-slide">
      <h2>Movies</h2>
      <div className="slider-container">
        <button
          className="slider-button prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <div className="slider" ref={sliderRef}>
          {movies.map((movie, index) => (
            <div
              key={movie.movieCd}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleMovieClick(movie)}
            >
              <h3>{movie.movieNm}</h3>
            </div>
          ))}
        </div>
        <button
          className="slider-button next"
          onClick={handleNext}
          disabled={currentIndex === movies.length - 1}
        >
          Next
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedMovie.movieNm}</h2>
            <p>누적 관객 수: {selectedMovie.audiAcc}명</p>
            <p>영화 개봉일: ({selectedMovie.openDt})</p>
            <button >상제 보기</button>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieSlide2;
