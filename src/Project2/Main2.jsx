import { useState, useEffect } from "react";
import InfoAPI from './InfoAPI'; 
import Scroll from "./Scroll";

function App() {
  const KEY = "e741f2047718511cc6332ca32873663b";
  const DATE = "25023022";

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=3`
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.peopleNmEn}
          <Scroll movieCd = {movies[0].movieCd} movieNm={movies[0].movieNm} ></Scroll>
          {/* <div style={{ border: '1px red solid', padding: 30 }}>
            <h3>{movies[0].movieNm}</h3>
            <p>누적 관객 수: {movies[0].audiAcc}명</p>
            <p>영화 개봉일: ({movies[0].openDt})</p>
            <p>영화 코드: ({movies[0].movieCd})</p>
            <button> Scroll 컴포넌트로 movies[0].movieCd를 전달하고 페이지를 이동</button>
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            <h3>{movies[1].movieNm}</h3>
            <p>누적 관객 수: {movies[1].audiAcc}명</p>
            <p>영화 개봉일: ({movies[1].openDt})</p>
            <p>영화 코드: ({movies[1].movieCd})</p>
          </div>  
          <div style={{ border: '1px red solid', padding: 30 }}>
            <h3>{movies[2].movieNm}</h3>
            <p>누적 관객 수: {movies[2].audiAcc}명</p>
            <p>영화 개봉일: ({movies[2].openDt})</p>  
            <p>영화 코드: ({movies[2].movieCd})</p>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
