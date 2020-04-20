import React, { useState, useEffect, Fragment } from 'react';
import NextButton from './NextButton.jsx';
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
