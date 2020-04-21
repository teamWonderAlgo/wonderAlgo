import React, { useState, useEffect } from 'react';
import Header from './HeaderProfile.jsx';
import Grid from './GridProfile.jsx';
import Footer from './Footer.js';

const ProfilePage = (props) => {
  return(
    <>
    <Header />
    <Grid userId={props.userId}/>
    <Footer />
    </>
  )

}

export default ProfilePage;