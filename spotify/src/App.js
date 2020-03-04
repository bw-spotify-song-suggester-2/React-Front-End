import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Spotify Song Suggester</h1>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;
