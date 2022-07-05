/** Dep imports */
import React, { useReducer, useContext } from 'react';

interface State {
  /** Just for testing this set up... */
  clicks: number;
}

interface Action {
  /** Basically this is the event type, or `action` */
  type: string;
  /** Could be `any` but start with a tighter type set */
  payload?: string | number | {};
}

type Dispatcher = (action: Action) => void;

type AppStateTuple = [State, Dispatcher];

export interface AppStateContext {
  /** Actual state object */
  state: State;
  /** Dispatch function */
  dispatch: Dispatcher;
}

const initialState: State = { clicks: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'click':
      return { clicks: state.clicks + 1 };
    default:
      throw new Error();
  }
}

const StateContext = React.createContext<AppStateContext>(null!);

export const StateProvider = ({ children }) => {
  const [state, dispatch]: AppStateTuple = useReducer(reducer, initialState);
  const value: AppStateContext = { state, dispatch };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

/** Shallow wrapper for vanilla state as the `global store` */
export function useAppState() {
  return useContext(StateContext);
}
