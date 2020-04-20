<<<<<<< HEAD
import React, { useState, useEffect, Fragment } from 'react';
import Runkit from './Runkit.jsx';
import AlgoPrompt from './AlgoPrompt.jsx';
import NextButton from './NextButton.jsx';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 8ebf9e3bc1af010bd7d6c506b64bfd5d3f89b2d5
import '@babel/polyfill'
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';
import './App.css';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './auth/Register';
import Login from './auth/Login';


const App = () => {


  const [algoArr, setAlgoArr] = useState([])
  const [algo, setAlgo] = useState('')
  const [code, setCode] = useState('')

  const setAlgoArray = (algoArr) => {
    return setAlgoArr(algoArr)
  }

  const getAlgoPrompt = async () => {
    try {
      let id;
      const randomAlgo = () => {
        id = Math.floor(Math.random() * Math.floor(5)) + 1
        if (algoArr.includes(id)) {
          return randomAlgo()
        }
        return id;
      }

      randomAlgo();
      const res = await fetch(`http://localhost:3000/algo/${id}`)
      const jsonData = await res.json()
      setAlgo(jsonData.content);
      setCode(jsonData.default_code)
      // console.log(jsonData)

      let arr = [...algoArr]
      arr.push(id)
      setAlgoArray(arr);
      console.log(algoArr)
    } catch (error) {
      console.error('getAlgoPrompt/App.js error: ', error.message)
    }


  }
  useEffect(() => {
    getAlgoPrompt()
  }, [])


  // return (
  //   <>
  //     <Header />
  //     {/* algo={algo} */}
  //     <Landing />
  //     <Grid algo={algo} />
  //     <Footer />
  //     {/* <Runkit /> */}
  //     {/* /      <NextButton getAlgoPrompt={getAlgoPrompt} /> */}
  //   </>
    
  // );

  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  )

    // <>
    //   <Header />
    //   <Grid getAlgoPrompt={getAlgoPrompt} algo={algo} algoArr={algoArr} code={code} />
    //   {/* <Timer /> */}
    //   <Footer />
    // </>
  // );
}
export default App;
