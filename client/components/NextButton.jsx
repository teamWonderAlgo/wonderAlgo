import React, { useState, useEffect } from 'react';
import '@babel/polyfill'

const NextButton = (props) => {

  const handleClick = async (e) => {
    //need to save data to body
    try {
      const response = await fetch(`http://localhost:3000:/storeResult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify('body'),
      })

    } catch (err) {
      console.error('Next.jsx component error:', err.message)
    }
  }



  return (
    <>
      <button onClick={handleClick}>Next</button>
    </>
  )

}




export default NextButton;