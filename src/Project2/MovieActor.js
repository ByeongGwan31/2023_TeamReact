import React, { Component } from 'react';

class MovieActor extends Component {
  render() {
    const { movie } = this.props;

    if (!movie) {
      // movie 객체가 없는 경우 렌더링하지 않음
      return null;
    }

    const actorsToShow = movie.actors.slice(0, 10); // 최대 10명의 배우만 선택

    return (
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '850px',
        height: '550px',
        padding: '20px',
        position: 'absolute',
        left: '50%',
        top: '160%',
        transform: 'translate(-50%, -50%)',
      }}>
        <br />
        <h2>영화 정보 인포</h2>
        <ul>
          <li>
            <strong>감독:</strong>{' '}
            {movie.directors.map((director) => (
              <div key={director.peopleNm}>
                <img
                  src="/people.png"
                  alt={director.peopleNm}
                  style={{ width: '100px', height: '100px' }}
                />
                <p>{director.peopleNm}</p>
              </div>
            ))}
          </li>
          <li>
            <strong>출연:</strong>{' '}
            <div style={{ display: 'flex' }}>
              {actorsToShow.map((actor) => (
                <div
                  key={actor.peopleNm}
                  style={{
                    width: '100px',
                    height: '100px',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/people.png"
                    alt={actor.peopleNm}
                    style={{ width: '100%', height: '100%' }}
                  />
                  <p>{actor.peopleNm}</p>
                  <p>({actor.cast})</p>
                </div>
              ))}
            </div>
          </li>
        </ul>
        <br></br>
        
      </div>
    );
  }
}

export default MovieActor;
