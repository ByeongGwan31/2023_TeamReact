import React, { useEffect } from 'react';

function Kakaomap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=bf5220acf939ab9b794238b9a26d0f74';
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(33.55321, 126.972613),
          level: 3
        };
        new kakao.maps.Map(container, options);
      });
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '400px', height: '400px' }}></div>
    </div>
  );
}

export default Kakaomap;
