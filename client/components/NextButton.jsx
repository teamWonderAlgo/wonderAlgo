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
        <input
          type='submit'
          className='btn btn-primary'
          value='Done'
          onClick={props.setProfile(true)}
        />
      </>
    );
  } else {
    return (
      <>
        {/* <button onClick={handleClick}>Next</button> */}
        <input type='submit' className='btn btn-primary' value='Next' onClick={handleClick} />
      </>
    );
  }
};

export default NextButton;
