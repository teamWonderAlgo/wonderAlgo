import React from 'react';
import Paper from '@material-ui/core/Paper';
import NextButton from './NextButton.jsx'
// const Embed = require('react-runkit')
import Runkit from './Runkit.jsx'

export default (props) => {


  return (
    <Paper style={props.styles.Paper}>
      <Runkit minHeight='500px' code={props.code} />
      <NextButton algoArr={props.algoArr} getAlgoPrompt={props.getAlgoPrompt} />
    </Paper>
  )
}

