import React, { useState, useEffect, useContext } from 'react';
import Footer from '../sections/Footer';
import Navbar from '../sections/Navbar';
import Intro from './Intro';
import Grid from './Grid';
import Video from '../component/Video';
import Cursor from '../component/Cursor';

import NewContextProvider from '../context/index';
import { NewContext } from '../context/index';

function Layout({ children }) {
  return (
    <NewContextProvider>
      <div className='layout__container'>
        <Cursor />
        <Button />
        {/* <Grid /> */}
        <Intro />
        <Video />
        <Navbar />
        <div className='layout__wrapper'>{children}</div>
        <Footer />
      </div>
    </NewContextProvider>
  );
}

export default Layout;

const Button = () => {
  const { off, setOff, hover, setHover } = useContext(NewContext);
  return (
    <button
      className={`offbtn ${off ? 'stick' : ''}`}
      onClick={() => setOff(!off)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {off ? 'ON' : 'OFF'}
    </button>
  );
};
