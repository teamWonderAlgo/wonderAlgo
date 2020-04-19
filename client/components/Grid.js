import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 545 }
}

export default props => {
  return(
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item sm>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
};
