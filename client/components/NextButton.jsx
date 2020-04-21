import React, { useState, useEffect } from 'react';
import '@babel/polyfill';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProfilePage from './Profile.jsx';

const NextButton = (props) => {
  //state to count how many prompts you get until it loads the profile page
  const [promptCount, setPromptCount] = useState(1);
//used to manage promptcount state
  const setupPromptCount = (count) => {
    return setPromptCount(count);
  };


  const handleClick = async (e) => {

    //handleclick was also going to be the part that would validate the answer with node.js/backend before it allowed it to move on to the next prompt, we were unable to complete this logic

    //bottom 3 constants are used to save the "scores" along with the user who accomplished the score and the algo that was solved; packaged for the body
    const algoid = props.algoArr[props.algoArr.length - 1];
    const timerSec = document.querySelector('.timer').textContent;
    const id = props.userId;

    props.getAlgoPrompt();

    //took the 3 constants into a package sent to the server
    const body = {
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
        body: JSON.stringify(body),
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