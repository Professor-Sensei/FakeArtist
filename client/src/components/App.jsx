import React from 'react';
import Sketchpad from './Sketchpad.jsx';
import axios from 'axios';
import { createContext } from 'react';

export const AppContext = createContext(null);

const App = () => {
  const get = async (callback) => {
    callback(await axios.get('drawing'));
  };

  const post = async (image) => {
    await axios.post('drawing', image);
  };

  return (
    <>
      <AppContext.Provider value={{ get, post }}>
        <Sketchpad />
      </AppContext.Provider>
    </>
  );
};

export default App;
