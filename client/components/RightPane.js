import React from 'react';
import Paper from '@material-ui/core/Paper';
import Runkit from './Runkit.jsx';

export default ({ styles }) => {
  

  return (
    <Paper style={styles.Paper}>
      <Runkit />
    </Paper>
  )
}

