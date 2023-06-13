import React, { Component } from 'react';
import axios from 'axios';

class MainTrailerAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
    };
  }

  componentDidMount() {
    this.searchYouTube();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieNm !== this.props.movieNm) {
      this.searchYouTube();
    }
  }

  searchYouTube = async () => {
    const { movieNm } = this.props;

    try {
      const KEY ='AIzaSyDmbThbVrzp38fIMFWLBIXBMnhR5H0A74s';
      const query = `${movieNm} 메인 예고편`;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${KEY}`
      );
      const firstVideo = response.data.items[0];

      this.setState({ video: firstVideo });
    } catch (error) {
      console.error('YouTube 검색 중 오류 발생:', error);
    }
  };

  render() {
    const { video } = this.state;

    return (
      <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        width: '850px',
        height: '450px',
        padding: '20px',
        position: 'absolute',
        left: '50%',
        top: '350%',
        transform: 'translate(-50%, -50%)',
      }}>
        {video ? (
          <div>
            <h2>{video.snippet.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    );
  }
}

export default MainTrailerAPI;
