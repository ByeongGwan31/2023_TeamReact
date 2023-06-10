import React, { Component } from "react";
import MovieDetail from "./MovieDetail";
import MovieInfo from "./MovieInfo";
import InfoAPI from "./InfoAPI";
import "./Scroll.css";

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section1Height: "fit-content",
      section2Height: "fit-content",
      section3Height: "fit-content",
    };
  }

  // 섹션1로 스크롤하는 메서드
  handleScrollToSection1() {
    const section1 = document.getElementById("section1");
    section1.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { section1Height, section2Height, section3Height } = this.state;
    const { movieCd } = this.props;
    // const { movieCd } = this.props;
    return (
      <div>
        <div id="section1">
          <InfoAPI movieCd={movieCd} />
        </div>
      </div>
    );
  }
}

export default Scroll;
