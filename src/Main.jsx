import { useState, useEffect } from "react";
import Main from "./Main";
function App() {
  
  const KEY = "da2c2d33b02a2d73a27241cb4592a5a1"
  const DATE = "25023022"
  const PERPAGE = "5"

  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([])
  const getMovies = async() => {
    const json = await (
       await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=${PERPAGE}`
    )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
    // 　　　　　　　　　　　　　　　　　　
  }
  useEffect(() => {
   getMovies();
  }, [])
  return (
    
    <div>
  <div style={{display: 'flex'}} >
    {movies.map(movie => 
      <div key={movie.movieCd} style={{ flex: 1, border: '1px blue solid', padding: 30, margin: 30}}>
        <h3>{movie.movieNm}</h3> 
        <p>누적 관객 수 : {movie.audiAcc}명</p>
        <p>영화 개봉일 : ({movie.openDt}) </p>
        <p>영화 코드 : ({movie.movieCd}) </p>
        <button style={{ width:250, height:50, fontsize: 15}}onClick={() => console.log(`영화 코드 ${movie.movieCd}가 클릭 완료!`)}>영화 확인</button>
      </div>
    )}
  </div>
</div>



  );
}


export default App;