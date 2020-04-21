import React, { useState, useEffect, Fragment } from 'react';
import NextButton from './NextButton.jsx';
import '@babel/polyfill';
import Header from './Header';
import Grid from './Grid';
import Footer from './Footer';
import ProfilePage from './Profile.jsx';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AlgoGame = (props) => {
  //hooks used to manage state
  //algoArr was to ensure the algos did not repeat, in the the method below, getAlgoPrompt, it would check if the algo id was already used, if it was it would recurse to find a new id to use on the next prompt
  const [algoArr, setAlgoArr] = useState([]);
  //algo state was used to post the correct prompt into the prompt box, matching the id set by get algo prompt
  const [algo, setAlgo] = useState('');
  //code state was used to post the correct prompt into the code editor matching the id set by get algo prompt
  const [code, setCode] = useState('');
  //this state was used to present the profile page with the high scores
  const [profile, setProfile] = useState(false);
  //this method was used to passed down as a prop to manage the profile state
  const setupProfile = (bool) => {
    return setProfile(bool);
  };
  //this method was used to pass down as a prop to next button, but also to make sure the algo ids are unique
  const setAlgoArray = (algoArr) => {
    return setAlgoArr(algoArr);
  };
  //algo randomizer
  const getAlgoPrompt = async () => {
    try {
      let id;
      const randomAlgo = () => {
        id = Math.floor(Math.random() * Math.floor(5)) + 1;
        if (algoArr.includes(id)) {
          return randomAlgo();
        }
        return id;
      };

      randomAlgo();
      const res = await fetch(`http://localhost:3000/algo/${id}`);
      const jsonData = await res.json();
      setAlgo(jsonData.content);
      setCode(jsonData.default_code);

      let arr = [...algoArr];
      arr.push(id);
      setAlgoArray(arr);
    } catch (error) {
      console.error('getAlgoPrompt/App.js error: ', error.message);
    }
  };
  useEffect(() => {
    getAlgoPrompt();
  }, []);

  if (profile === true) {
    return (
      <>
        <ProfilePage userId={props.userId}/>
      </>
    );
  }
  return (
    <>
      <Header algo={algo} />
      <Grid
        setProfile={setupProfile}
        userId={props.userId}
        getAlgoPrompt={getAlgoPrompt}
        algo={algo}
        algoArr={algoArr}
        code={code}
      />
      <Footer />
    </>
  );
};
export default AlgoGame;
