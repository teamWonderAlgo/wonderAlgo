import React, { Component } from 'react';

// import NavBar from './NavBar.js';
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
/*
  constructor(props) {
    super(props);
  }
*/
  
  render() {
    return (
      <div>
        {/*<h1>Hello</h1>*/}
        {/*<Runkit />*/}
        {/*<NavBar />*/}
        <Header />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
