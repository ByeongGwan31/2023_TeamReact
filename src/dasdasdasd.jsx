import { useState, useEffect } from "react";
import Main from "./Main";
function App() {
  
  const KEY = "da2c2d33b02a2d73a27241cb4592a5a1"
  const DATE = "25023022"
  const PERPAGE = "5";

  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([])
  const getMovies = async() => {
    const json = await (
       await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
    )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  }
  useEffect(() => {
   getMovies();
  }, [])
  return (
    
    <div>

     <div style={{display: 'flex'}} > {movies.map(movie, idx => 
     <div key = {movie.movieCd} style={{ flex: 1, border: '1px red solid', padding: 30 }}> <h3>{movie.movieNm}</h3> 
     <p>{`${idx + 1}위. ${movie.movieNm}`}</p>
     <p>누적 관객 수 : {movie.audiAcc}명</p>
     <p>영화 개봉일 :  ({movie.openDt}) </p>
     <p>영화 코드 :  ({movie.movieCd}) </p>
     </div>)} </div>
     


    </div>


  );
}


export default App;