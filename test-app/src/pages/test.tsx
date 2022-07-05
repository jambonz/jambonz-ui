/** Dep imports */
import React from 'react';

/** Local imports */
import { P } from '../../../src/js/index';
import { useAppState } from '../state';

export const TestPage = () => {
  const { state } = useAppState();

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
          <P>There are <span>{state.clicks}</span> clicks persisted in global state.</P>
        </div>
      </div>
    </section>
  );
};

export default TestPage;
