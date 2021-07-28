import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from "./auth/privateRouter";
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import HomePage from './pages/homePage';
import Navigation from './pages/navigation';
import CVPage from './pages/cvPage';
import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'><LoginPage /></Route>
        <Route exact path='/register'><RegisterPage /></Route>
        <PrivateRoute exact path='/home'>
          <Navigation />
          <HomePage />
        </PrivateRoute>
        <PrivateRoute exact path='/CV'>
          <Navigation />
          <CVPage />
        </PrivateRoute>
      </Switch>

    </Router>
  );
}
export default App;
