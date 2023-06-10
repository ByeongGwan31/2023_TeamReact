import { useState, useEffect } from "react";
import Movie2Info from "./Movie2Info";

function Api() {
  const KEY = "da2c2d33b02a2d73a27241cb4592a5a1";
  const DATE = "20230609";
  const PERPAGE = "5";

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=${PERPAGE}`
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {loading ? (
        <div></div>
      ) : (
        <Movie2Info movies={movies} />
      )}
    </div>
  );
}

export default Api;
