import { useState, useEffect } from "react";
import "./HSwiper.css"
import Connect from "./Connect";
function Detail() {
    const [connect, setconnect] = useState(false);
    return(

        
    <div>
    <div className='detail'>
    {connect? (
      <Connect></Connect>
    ): (
      null
    )}
    <button 
        onClick={()=> {setconnect(true);}}
    >상세보기
    </button>


    <br></br>
    <button>예매하기</button>
    </div>
    </div>
    );
}

export default Detail;