import React from 'react';
import MovieDetail from './MovieDetail';
import "./App.css";
import Main from "./Main";
import API from "./api";


function App() {
  return (
    <div className="App">
      <MovieDetail />
      <Main/>
      <API/>
      <footer/>
    </div>
  );
}

export default App;