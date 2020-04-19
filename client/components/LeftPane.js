import React from 'react';
import Paper from '@material-ui/core/Paper';

export default (props) => {

  return (
    <Paper style={props.styles.Paper}>
      {props.algo}
      Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
    </Paper>
  )
}

