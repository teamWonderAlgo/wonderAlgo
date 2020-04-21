import React, { useState, useEffect } from 'react';
import Header from './HeaderProfile.jsx';
import Grid from './GridProfile.jsx';
import Footer from './FooterProfile.jsx';

const ProfilePage = (props) => {
  console.log('profile render')
  return(
    <>
    <Header />
    <Grid userId={props.userId}/>
    <Footer />
    </>
  )

}

export default ProfilePage;