import React, { useState, useEffect, Fragment } from 'react';
import NextButton from './NextButton.jsx';
import '@babel/polyfill'
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';
import AlgoGame from './AlgoGame.jsx';



import './App.css';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user_id: 0,
      isLoggedIn: false,
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(id) {
    this.setState({
      user_id: id,
      isLoggedIn: true,
    })
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <AlgoGame userId={this.state.user_id}/>
      )
    }
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path='/register' render={(props) => <Register {...props} updateState={this.updateState}/>} />
              <Route exact path='/login' render={(props) => <Login {...props} updateState={this.updateState}/>}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    )
  }
}
export default App;
