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
  const [algoArr, setAlgoArr] = useState([]);
  const [algo, setAlgo] = useState('');
  const [code, setCode] = useState('');
  const [profile, setProfile] = useState(false);

  const setupProfile = (bool) => {
    return setProfile(bool);
  };

  const setAlgoArray = (algoArr) => {
    return setAlgoArr(algoArr);
  };

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
