import React, { useState, useEffect } from 'react';
import '@babel/polyfill'

const NextButton = (props) => {

  const handleClick = async (e) => {

    const algoid = props.algoArr[props.algoArr.length - 1]
    const timerSec = document.querySelector('.timer').textContent

    props.getAlgoPrompt()
    const semiFakeBody = {
      timeInSeconds: timerSec,
      algo_id: algoid,
      user_id: 1,
    }
    try {
      const response = await fetch(`http://localhost:3000/storeResult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(semiFakeBody),
      })
      console.log(response)
    } catch (err) {
      console.error('NextButton.jsx component error:', err.message)
    }
  }



  return (
    <>
      <button onClick={handleClick}>Next</button>
    </>
  )

}




export default NextButton;