import React from 'react';
import Sketchpad from './Sketchpad.jsx';
import axios from 'axios';

const App = () => {
  const getAll = async () => {
    await axios.get('/');
  };

  return (
    <>
      <Sketchpad />
    </>
  );
};

export default App;
