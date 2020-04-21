import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
  },
  typography: {
    fontFamily: 'Raleway'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Footer;