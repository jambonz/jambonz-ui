/** Dep imports */
import React from 'react';

/** Local imports */
import { Button } from '../../../src/js/index';
import { useAppState } from '../state';

export const HomePage = () => {
  const { state, dispatch } = useAppState();

  const handleClick: React.PointerEventHandler<HTMLButtonElement> = (): void => {
    dispatch({ type: 'click' });
  };

  return (
    <section style={{
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      zIndex: -1
    }}>
      <div className="wrap">
        <div className="pad">
          <Button onClick={handleClick} subStyle="teal">
            Click for simple state test: {state.clicks} clicks.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
