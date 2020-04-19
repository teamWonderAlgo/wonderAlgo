// import React from 'react'
import React, { useState, useEffect }  from 'react'

// class Timer extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0,
//     }
//     this.stopTimer = this.stopTimer.bind(this);
//   }

//   componentDidMount() {
//     this.myInterval = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1,
//       })
//     }, 1000)
//   }

//   stopTimer() {
//     clearInterval(this.myInterval)
//   }
//   // componentWillUnmount() {
//   //   clearInterval(this.myInterval)
//   // }

//   render() {
//     return (
//     <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.stopTimer}>Stop timer</button>
//     </div>
//     )
//   }
// }

const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if(isRunning) {
      const id = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000);
      return () => clearInterval(id)
    } return undefined;
  }, [isRunning]);

    }
    // console.log('render')

  // componentWillUnmount() {
  //   clearInterval(this.myInterval)
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        setIsRunning(false); setSeconds(0);
        }
      }>Start</button>
      <button onClick={() => {
        setIsRunning(false); setSeconds(0);
        }
      }>Stop timer</button>
    </div>
  )

















export default Timer;