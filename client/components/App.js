import React, { useState, useEffect } from 'react';
import Runkit from './Runkit.jsx';
import AlgoPrompt from './AlgoPrompt.jsx';
import NextButton from './NextButton.jsx';
import '@babel/polyfill'

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

      const res = await fetch(`http://localhost:3000/algo${id}`)
      const jsonData = await res.json()
      // console.log(jsonData)
      setAlgo(jsonData);//check jsonData to see if we get the correct data

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
      <AlgoPrompt algo={algo} />
      <Runkit />
      <NextButton getAlgoPrompt={getAlgoPrompt} />
    </>
  );
}

export default App;
