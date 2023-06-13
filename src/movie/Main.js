import React from "react";

import MovieLogo from "./MovieLogo";
import MovieSlide from "./MovieSlide";
import MovieSlide2 from "./MovieSlide2";
import MovieList from "./MovieList";
import HSwiper from "./HSwiper";

class Main extends React.Component {
  render() {
    return (
      <div>
        <MovieLogo />
        <HSwiper/>
        <MovieSlide2 />
        <MovieList />
        <MovieSlide />
        
      </div>
    );
  }
}

export default Main;
