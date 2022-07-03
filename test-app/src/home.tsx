import React, { useReducer } from 'react';
// import { Link } from 'react-router-dom';

import { Icons } from './icons';
import { Button } from '../../src/js/index';
import { KitOfParts } from './kop';

import { reducer, initialState } from './state';

export const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'click' });
  };

  return (
    <div className="homepage" style={{ textAlign: 'center' }}>
      <div className="wrap">
        <div className="pad">
          <Button onClick={handleClick} subStyle="teal">
            Click for simple state test: {state.clicks} clicks...
          </Button>
        </div>
      </div>
      <KitOfParts Icons={Icons} />
    </div>
  );
};

export default HomePage;
