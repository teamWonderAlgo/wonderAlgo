import React, { useState, useEffect, Fragment } from 'react';
import NextButton from './NextButton.jsx';
import '@babel/polyfill'
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';
import algoGame from './algoGame.jsx';



import './App.css';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';



const App = () => {

  const [login, setLogin] = useState(false)

  const setupLogin = (bool) => {
    return setLogin(bool)
  }

  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} render={(props) => <Login {...props} login={false}/>}/>
            <Route exact path='/app' component={algoGame} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  )
}
export default App;
