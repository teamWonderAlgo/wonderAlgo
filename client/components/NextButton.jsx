import React, { useState, useEffect } from 'react';
import '@babel/polyfill';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProfilePage from './Profile.jsx';

const NextButton = (props) => {
  const [promptCount, setPromptCount] = useState(1);

  const setupPromptCount = (count) => {
    return setPromptCount(count);
  };

  // console.log('promp count for rendering done button', promptCount)

  const handleClick = async (e) => {
    // let id = props.algoArr[props.algoArr.length - 1]
    // const res = await fetch(`http://localhost:3000/algo/${id}`)
    // const resJson = await res.json()
    // const algoAnswer = resJson.algo_answer

    // if (answer !== algoAnswer) {
    //   return (
    //     <>
    //       <button onClick={handleClick}>Next</button>
    //     </>
    //   )
    // }

    const algoid = props.algoArr[props.algoArr.length - 1];
    const timerSec = document.querySelector('.timer').textContent;
    const id = props.userId;
    props.getAlgoPrompt();
    const semiFakeBody = {
      timeInSeconds: timerSec,
      algo_id: algoid,
      user_id: id,
    };

    let number = promptCount + 1;
    setupPromptCount(number);

    try {
      const response = await fetch(`http://localhost:3000/storeResult`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(semiFakeBody),
      });
      console.log(response);
    } catch (err) {
      console.error('NextButton.jsx component error:', err.message);
    }
  };

  if (promptCount === 6) {
    return (
      <>
        <button onClick={props.setProfile(true)}>Done</button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleClick}>Submit</button>
      </>
    );
  }
};

export default NextButton;
