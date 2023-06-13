import React, { Component } from 'react';
import DetailAPI from './DetailAPI';
import InfoAPI from './InfoAPI';
import ActorAPI from './ActorAPI';
import ImageSlideShow from './ImageSlideShow';
import MainTrailerAPI from './MainTrailerAPI';
import SubTrailerAPI from './SubTrailerAPI';
import './Scroll.css';

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReRenderIng: 0,
    };
  }


  handleScrollToSection1() {
    const section1 = document.getElementById('section1');
    section1.scrollIntoView({ behavior: 'smooth' });
  }

  handleScrollToSection2() {
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' });
  }

  handleScrollToSection3() {
    const section3 = document.getElementById('section3');
    section3.scrollIntoView({ behavior: 'smooth' });
  }

  handleScrollToSection4() {
    const section4 = document.getElementById('section4');
    section4.scrollIntoView({ behavior: 'smooth' });
  }

  handleScrollToSection5() {
    const section5 = document.getElementById('section5');
    section5.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
   
    const { movieCd, movieNm } = this.props;

    return (
      <div>
        <button onClick={this.handleScrollToSection1} className="scroll-button2">
          주요정보
        </button>
        <button onClick={this.handleScrollToSection2} className="scroll-button">
          영화 정보
        </button>
        <button onClick={this.handleScrollToSection3} className="scroll-button3">
          감독 및 출연진
        </button>
        <button onClick={this.handleScrollToSection4} className="scroll-button4">
          스틸컷
        </button>
        <button onClick={this.handleScrollToSection5} className="scroll-button5">
          트레일러
        </button>

        <div id="section1">
          <DetailAPI movieCd={movieCd} />
        </div>
        <div id="section2">
          <InfoAPI movieCd={movieCd} />
        </div>

        <div id="section3">
          <ActorAPI movieCd={movieCd} />
        </div>

        <div id="section4">
          <ImageSlideShow />
        </div>

        <div id="section5">
         <MainTrailerAPI movieNm={movieNm}/>
          <SubTrailerAPI movieNm={movieNm}/> 
        </div>
      </div>
    );
  }
}

export default Scroll;
