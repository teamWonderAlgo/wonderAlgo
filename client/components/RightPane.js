import React from 'react';
import Paper from '@material-ui/core/Paper';
import Runkit from './Runkit.jsx';
import NextButton from './NextButton.jsx'

export default (props) => {


  return (
    <Paper style={props.styles.Paper}>
      <Runkit />
      <NextButton getAlgoPrompt={props.getAlgoPrompt} />
    </Paper>
  )
}

