/** Dep imports */
import React from 'react';
// import { Link } from 'react-router-dom';

/** Local imports */
import { Icons } from './icons';
import { Button } from '../../src/js/index';
import { KitOfParts } from './kop';
import { useAppState } from './state';

export const HomePage = () => {
  const { state, dispatch } = useAppState();

  const handleClick: React.PointerEventHandler<HTMLButtonElement> = (): void => {
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
