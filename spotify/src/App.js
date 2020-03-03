import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Spotify Song Suggester</h1>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default App;
