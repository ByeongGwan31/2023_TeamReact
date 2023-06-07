import React, { Component } from "react";

import MovieInfo from "./MovieInfo";
import poster1 from "./Images/poster1.jpg";
import poster2 from "./Images/poster2.jpg";
import poster3 from "./Images/poster3.jpg";
import poster4 from "./Images/poster4.jpg";

import "./Image.css";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "분노의 질주 : 라이드 오어 다이",
          genre: "범죄, 액션, 스릴러, 느와르, 어드벤처",
          info: "주요정보에 대해서 알 수 있는 테스트입니다.",
          cast: "감독 및 출연진 : 빈 디젤, 존 시나, 미셸 로드리게즈, 타이리스 깁슨...",
          synopsis: `아무리 빨리 달려도 과거를 앞지를 순 없다.
                    돔 (빈 디젤)과 그의 패밀리 앞에 나타난 운명의 적 단테 (제이슨 모모아)
                    과거의 그림자는 돔의 모든 것을 파괴하기 위해 달려온다.
                    단테에 의해 산산히 흩어진 패밀리들은 모두 목숨을 걸고 맞서야 하는 함정에 빠지고 마는데...`,
          duration: "141분",
          rating: `7.97 ★★★★☆`,
          image: poster1,
        },
        {
          id: 2,
          title: "범죄도시 3",
          genre: "액션, 범죄, 스릴러, 느와르, 블랙 코미디, 형사",
          info: `주요정보에 대해서 알 수 있는 테스트입니다.`,
          cast: `마동석, 이준혁, 아오키 무네타카 외... `,
          synopsis: `대체불가 괴물형사 마석도, 서울 광수대로 발탁!
                    베트남 납치 살해범 검거 후 7년 뒤,
                    ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다.
                    사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다.
                    한편, 마약 사건의 배후인 '주성철'(이준혁)은 계속해서 판을 키워가고...`,
          duration: `105분`,
          rating: "평점 : 8.49 ★★★★☆",
          image: poster2,
        },
        {
          id: 3,
          title: "가디언즈 오브 갤럭시 VOL.3",
          genre:
            "슈퍼히어로, SF, 액션, 코미디, 어드벤처, 판타지, 스페이스 오페라, 드라마",
          info: `주요정보에 대해서 알 수 있는 테스트입니다.`,
          cast: `크리스 프랫, 조 샐다나, 데이브 바리스타, 카렌 길런 외... `,
          synopsis: `'가모라'를 잃고 슬픔에 빠져 있던 '피터 퀼'이 위기에 처한
                    은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 
                    성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기`,
          duration: `150분`,
          rating: "평점 : 9.39 ★★★★★",
          image: poster3,
        },
        {
          id: 4,
          title: "슈퍼 마리오 브라더스",
          genre: "애니메이션, 코미디, 액션, 어드벤처, 가족",
          info: `주요정보에 대해서 알 수 있는 테스트입니다.`,
          cast: `크리스 프랫, 안야 테일러조이, 찰리 데이, 잭 블랙 외... `,
          synopsis: `브루클린의 평범한 배관공 형제 '마리오'와 '루이지'는 배수관 고장으로 위기에 빠진 도시를 구하려다 미스터리한 초록색 파이프 안으로 빨려 들어가게 된다.
                    파이프를 통해 새로운 세상으로 차원 이동하게 된 형제.
                    형 마리오는 뛰어난 리더십을 지닌 '피치'가 통치하는 버섯왕국에 도착하지만
                    동생 루이지는 빌런 '쿠파'가 있는 다크랜드로 떨어지며 납치를 당하고 마는데...`,
          duration: `92분`,
          rating: "평점 : 8.42 ★★★★☆",
          image: poster4,
        },
      ],
      selectedMovieId: 1,
    };
    this.changeMovie = this.changeMovie.bind(this);
  }

  changeMovie() {
    let newSelectedMovieId = this.state.selectedMovieId + 1;

    if (newSelectedMovieId > this.state.movies.length) {
      newSelectedMovieId = 1;
    }

    this.setState({
      selectedMovieId: newSelectedMovieId,
    });
  }

  render() {
    const { movies, selectedMovieId } = this.state;
    return (
      <MovieInfo
        movies={movies}
        selectedMovieId={selectedMovieId}
        changeMovie={this.changeMovie}
      />
    );
  }
}

export default MovieDetail;
