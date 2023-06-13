import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

import poster1 from './Images/poster1.jpg';
import poster2 from './Images/poster2.jpg';
import poster3 from './Images/poster3.jpg';
import poster4 from './Images/poster4.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MovieSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide>
        <img src={poster1} alt="Poster 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={poster2} alt="Poster 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={poster3} alt="Poster 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={poster4} alt="Poster 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MovieSlide;
