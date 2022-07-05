/** Dep imports */
import React from 'react';

/** Local imports */
import { P } from '../../src/js/index';
import { useAppState } from './state';

export const TestPage = () => {
  const { state } = useAppState();

  return (
    <div className="homepage" style={{ textAlign: 'center' }}>
      <div className="wrap">
        <div className="pad">
          <P>There have been: {state.clicks} clicks...</P>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
