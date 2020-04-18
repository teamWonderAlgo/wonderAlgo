import React, { Component } from 'react';
import Runkit from './Runkit.jsx';
import Timer from './Timer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Timer />
        <Runkit />
      </>
    );
  }
}

export default App;
