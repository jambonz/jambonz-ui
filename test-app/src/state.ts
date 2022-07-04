/** Dep imports */
import { useReducer } from 'react';

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

const initialState: State = { clicks: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'click':
      return { clicks: state.clicks + 1 };
    default:
      throw new Error();
  }
}

/** const [state, dispatch]: AppStateTuple = useAppState(); */
export type AppStateTuple = [State, (action: Action) => void];

/** Shallow wrapper for vanilla state as the `global store` */
export function useAppState() {
  return useReducer(reducer, initialState);
}
