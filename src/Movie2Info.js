import React from "react";

function Movie2Info(props) {
  const { movies } = props;
  const movie = movies[0];
  
  return (
    <div
      key={movie.rank}
      style={{ flex: 1, border: "1px blue solid", padding: 30, margin: 30 }}
    >
      <h3>{movie.movieNm}</h3>
      <p>{`누적 관객 수 : ${movie.audiAcc}명`}</p>
      <p>{`영화 개봉일 : (${movie.openDt})`}</p>
      <p>{`영화 코드 : (${movie.movieCd})`}</p>
      <button
        style={{ width: 250, height: 50, fontsize: 15 }}
        onClick={() =>
          console.log(`영화 코드 ${movie.movieCd}가 클릭 완료!`)
        }
      >
        영화 확인
      </button>
    </div>
  );
}

export default Movie2Info;
