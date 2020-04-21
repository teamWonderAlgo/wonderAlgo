import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Timer from './Timer.jsx';
import '../scss/appbar.scss';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  typography: {
    fontFamily: 'Raleway'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className='appbar'>
          <Typography className={classes.typography} variant="h5">Algo Game</Typography>
          <Timer algo={props.algo} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
