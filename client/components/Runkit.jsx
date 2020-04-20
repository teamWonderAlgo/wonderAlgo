import React from 'react';
import Embed from 'react-runkit';


const helloSource = `console.log('Hello, world!')`

class Runkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.handleChange = this.handleChange.bind(this);
    console.log(props)
  }
  handleChange(event) {
    console.log('blargh', event.target.value);
  }
  alertEvaluated() {
    // (this.source and event are undefined, but we can update state in the callback below) 
    console.log('hi');
    // this.refs.embed.getURL((code) => this.setState({ code }));
    this.refs.embed.getURL('hello')
  }
  render() {
    return <Embed source={this.props.code} readOnly={false} onLoad={this.alertEvaluated.bind(this)} ref="embed" onSubmit={this.handleChange} evaluateOnLoad={false} />
  }
}

export default Runkit;