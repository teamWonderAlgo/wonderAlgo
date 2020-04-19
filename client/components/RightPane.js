import React from 'react';
import Paper from '@material-ui/core/Paper';
import NextButton from './NextButton.jsx'
const Embed = require('react-runkit')

export default (props) => {


  return (
    <Paper style={props.styles.Paper}>
      <Embed minHeight='300px' source={props.code} />
      <NextButton algoArr={props.algoArr} getAlgoPrompt={props.getAlgoPrompt} />
    </Paper>
  )
}

