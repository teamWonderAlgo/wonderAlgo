import React, { useState, useEffect } from 'react';
import Timer from './Timer.jsx';
import '@babel/polyfill'
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';

const App = () => {

  const [algoArr, setAlgoArr] = useState([])
  const [algo, setAlgo] = useState('')

  const setAlgoArray = (algoArr) => {
    return setAlgoArr(algoArr)
  }

  const getAlgoPrompt = async () => {
    try {
      let id = Math.floor(Math.random() * Math.floor(5)) + 1
      const randomAlgo = () => {
        id = Math.floor(Math.random() * Math.floor(5)) + 1
        if (algoArr.includes(id)) {
          return randomAlgo()
        }
        return id
      }

      const res = await fetch(`http://localhost:3000/algo/${id}`)
      const jsonData = await res.json()
      setAlgo(jsonData.content);

      let arr = [...algoArr]
      arr.push(id)
      setAlgoArray(arr);
    } catch (error) {
      console.error('getAlgoPrompt/App.js error: ', error.message)
    }


  }
  useEffect(() => {
    getAlgoPrompt()
  }, [])
  return (
    <>
      <Header />
      <Grid getAlgoPrompt={getAlgoPrompt} algo={algo} />
      <Timer />
      <Footer />
    </>
  );
}
export default App;
