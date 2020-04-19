import React, { useState, useEffect } from 'react';
import '@babel/polyfill'

const NextButton = (props) => {

  const handleClick = async (e) => {
    //need to save data to body
    props.getAlgoPrompt()
    const fakeBody = {
      timeInSeconds: 10000000,
      algo_id: 1,
      user_id: 1,
    }
    try {
      const response = await fetch(`http://localhost:3000/storeResult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fakeBody),
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