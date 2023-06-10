  import React, { Component } from 'react';
  import MovieDetail from './MovieDetail';
  import MovieInfo from './MovieInfo';
  import InfoAPI from './InfoAPI'
  import './Scroll.css';

  class Scroll extends Component {
    constructor(props) {
      super(props);
      this.state = {
      section1Height: 'fit-content',
      section2Height: 'fit-content',
      section3Height: 'fit-content',
    };


  }

  // 섹션1로 스크롤하는 메서드
  handleScrollToSection1() {
    const section1 = document.getElementById('section1');
    section1.scrollIntoView({ behavior: 'smooth' });
  }

  // 섹션2로 스크롤하는 메서드
  handleScrollToSection2() {
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' });
  }

  handleScrollToSection3() {
    const section3 = document.getElementById('section3');
    section3.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { section1Height, section2Height, section3Height } = this.state;
    const { movieCd } = this.props;
    // const { movieCd } = this.props;
    return (
      <div>

        <button onClick={this.handleScrollToSection1} className="scroll-button2">
          세션1로 이동
        </button>
        <button onClick={this.handleScrollToSection2} className="scroll-button">
          세션2로 이동
        </button>
        <button onClick={this.handleScrollToSection3} className="scroll-button3">
          세션3로 이동
        </button>

        <div id="section1">
          <InfoAPI  movieCd={movieCd}/>
        </div>
        
        <div id="section2" style={{ height: section2Height, backgroundColor: 'pink' }}>
          <MovieDetail movieCd={movieCd}/>
        </div>

        <div id="section3" style={{ height: section3Height, backgroundColor: 'green' }}>
          <MovieDetail movieCd={movieCd}/>
        </div>
      </div>
    );
  }
  }

  export default Scroll;
