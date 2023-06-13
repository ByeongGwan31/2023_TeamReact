
import React, { Component,useState } from 'react';
import MovieDetail from './Project2/MovieDetail';
import Scroll from './Project2/Scroll';
import ImageSlideShow from './Project2/ImageSlideShow';
import './ImageSlide.css';
import InfoAPI from './Project2/InfoAPI';
import MainTrailerAPI from './Project2/MainTrailerAPI';
import SubTrailerAPI from './Project2/SubTrailerAPI';
import MovieFindAPI from './Project2/MovieFindAPI';



import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./movie/Main";
import AdPage from './movie/AdPage';
import AdPage2 from './movie/AdPage2';


function App() {
  const [showAd, setShowAd] = useState(true);

  const handleToggleAd = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };

  return (
    <div>
      {/* <Main/>
          <div>
            <h1>광고</h1>
            <button onClick={handleToggleAd}>
              {showAd ? "광고 접기" : "광고 펼치기"}
            </button>
            {showAd && (
              <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/ad1">광고1</Link>
                      </li>
                      <li>
                        <Link to="/ad2">광고2</Link>
                      </li>
                    </ul>
                  </nav>

                  <Routes>
                    <Route path="/ad1" element={<AdPage />} />
                    <Route path="/ad2" element={<AdPage2 />} />
                  </Routes>
                </div>
              </Router>
            )}
          </div> */}


      <div>
         <MovieFindAPI selectedMovieCd={"20124079"} selectedMovieNm={"광해 왕이 된 남자"}></MovieFindAPI> 
        {/* 상세페이지 가는 컴포넌트 */}
      </div>
    </div>



    
  );
}

export default App;
