import React from 'react';
import Paper from '@material-ui/core/Paper';

export default (props) => {

  return (
    <Paper style={props.styles.Paper}>
      {props.algo}
    </Paper>
  )
}

