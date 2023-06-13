import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

class MovieLogo extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>영화사이트</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
  </div>
);

export default MovieLogo;
