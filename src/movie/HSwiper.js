import { useState, useEffect } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Navigation,Mousewheel} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';

import "./HSwiper.css"


import movie1 from './img/movie1.png';
import movie2 from "./img/movie2.png";
import movie3 from "./img/movie3.png";
import movie4 from "./img/movie4.png";
import movie5 from "./img/movie5.png";
import movie6 from "./img/movie6.png";
import movie7 from "./img/movie7.png"
import movie8 from "./img/movie8.png";
import movie9 from "./img/movie9.png";
import movie10 from "./img/movie10.png";


import Detail from "./Detail";

function HSwiper() {
  
  const KEY = "da2c2d33b02a2d73a27241cb4592a5a1"
  const DATE = "25023022"
  const PERPAGE = "5"
  const movieImg = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];


  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([])
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const [isHover6, setIsHover6] = useState(false);
  const [isHover7, setIsHover7] = useState(false);
  const [isHover8, setIsHover8] = useState(false);
  const [isHover9, setIsHover9] = useState(false);
  const [isHover10, setIsHover10] = useState(false);
  const getMovies = async() => {
    const json = await (
       await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}&itemPerPage=${PERPAGE}`
    )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
   
  }


  useEffect(() => {
   getMovies();
  }, [])

  

  return (  


    <div >
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div style={{display: 'flex'}} className="container" >
      <Swiper
      spaceBetween={50}
      slidesPerView={5}
      navigation={true}
      modules={[EffectCoverflow,Navigation,Mousewheel]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper)=> console.log(swiper)}
    >
      
              <SwiperSlide 
                  onMouseOver={()=> {setIsHover1(true);}}
                  onMouseOut={() => {setIsHover1(false);}}
                           >
              <div style={{ flex: 1 }}>
                {isHover1? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[0]}></img>
                )}             
              </div>
              </SwiperSlide>

              <SwiperSlide
                  onMouseOver={()=> {setIsHover2(true);}}
                  onMouseOut={() => {setIsHover2(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover2? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[1]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover3(true);}}
                  onMouseOut={() => {setIsHover3(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover3? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[2]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide
                  onMouseOver={()=> {setIsHover4(true);}}
                  onMouseOut={() => {setIsHover4(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover4? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[3]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover5(true);}}
                  onMouseOut={() => {setIsHover5(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover5? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[4]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover6(true);}}
                  onMouseOut={() => {setIsHover6(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover6? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[5]}></img>
                )}
              </div>
              </SwiperSlide>
              
              <SwiperSlide 
                  onMouseOver={()=> {setIsHover7(true);}}
                  onMouseOut={() => {setIsHover7(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover7? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[6]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover8(true);}}
                  onMouseOut={() => {setIsHover8(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover8? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[7]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover9(true);}}
                  onMouseOut={() => {setIsHover9(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover9? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[8]}></img>
                )}
              </div>
              </SwiperSlide>

              <SwiperSlide 
                  onMouseOver={()=> {setIsHover10(true);}}
                  onMouseOut={() => {setIsHover10(false);}}
              >
              <div style={{ flex: 1 }}>
                {isHover10? (
                  <Detail></Detail>
                ): (
                  <img className="img" src ={movieImg[9]}></img>
                )}
              </div>
              </SwiperSlide>
              </Swiper>
    </div>
    
    

</div>

        

  );
        
}



export default HSwiper;