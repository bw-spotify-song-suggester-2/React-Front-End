import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Spotify Song Suggester</h1>
      <Navigation />
    </div>
  );
}

export default App;
