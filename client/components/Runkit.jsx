import React from 'react';
import Embed from 'react-runkit';

//this is the code editor component
const helloSource = `console.log('Hello, world!')`


// This is the actual code editor component. Read their docs (RunKit) for more info. It doesn't look like there's an easy way to evaluate and get the evaluated result. Would HIGHLY recommend using another editor that can't run the code in the editor (checkout React-Ace), but then instead grabbing the value and using in Node with execFile(). That way you can actually run __test__ files. CodePen may be another option.
class Runkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  render() {
    return <Embed minHeight='275px' source={this.props.code} readOnly={false} ref="embed" evaluateOnLoad={false} />
  }
}

export default Runkit;