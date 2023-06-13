import React, { Component } from 'react';

class MovieInfo extends Component {
    render() {
        const { movie } = this.props;

        if (!movie) {
            // movie 객체가 없는 경우 렌더링하지 않음
            return null;
        }

        return (
            <div
        style={{
          width: '850px',
          height: '450px',
          padding: '20px',
          position : 'absolute',
          left : '50%',
          top: '110%',
          transform: 'translate(-50%, -50%)',
        }}
      >
                <br />
                <h2>영화 상세정보</h2>
                <ul>
                    <li>
                        <strong>제목: {movie.movieNm}</strong>
                    </li>
                    <li>
                        <strong>개봉일: {movie.openDt}</strong>
                    </li>
                    <li>
                        <strong>상영 시간: {movie.showTm}분</strong>
                    </li>
                    <li>
                        <strong>평점: {movie.movieNm}</strong>
                    </li>
                    {movie.audits && movie.audits.length > 0 && (
                        <li>
                            <strong>관람 등급: {movie.audits[0].watchGradeNm}</strong>
                        </li>
                    )}
                    {movie.companys && movie.companys.length > 0 && (
                        <li>
                            <strong>제작사: {movie.companys[0].companyNm}</strong>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MovieInfo;
