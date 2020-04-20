import React, { useState, useEffect } from 'react';
import '@babel/polyfill'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NextButton = (props) => {

  const [promptCount, setPromptCount] = useState(1)

  const setupPromptCount = (count) => {
    return setPromptCount(count)
  }

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

    const algoid = props.algoArr[props.algoArr.length - 1]
    const timerSec = document.querySelector('.timer').textContent

    props.getAlgoPrompt()
    const semiFakeBody = {
      timeInSeconds: timerSec,
      algo_id: algoid,
      user_id: 1,
    }

    let number = promptCount + 1
    setupPromptCount(number)

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

  if (promptCount === 5) {
    return (
      <>
        <Router>
          <div>
            <Link to="/">
              <button >Done</button>
            </Link>
            <hr />

            <Switch>
              <Route exact path="/">
                {/* <Profile /> */}
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
  else {
    return (
      <>
        <button onClick={handleClick}>Next</button>
      </>
    )
  }


}




export default NextButton;