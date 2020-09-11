import { useEffect, useMemo, useReducer, useRef } from 'react';

const withLogger = dispatch => action => {
	const timestamp = new Date();
  console.groupCollapsed(
    `%caction %c${action.type} %c@ ${timestamp.toLocaleTimeString()}.${timestamp.getMilliseconds()}`,
    'color: gray; font-weight: normal',
    'color: black; font-weight: bold',
    'color: gray; font-weight: normal');
  return dispatch(action);
};

export const useReducerWithLogger = (...args) => {
	const initialState = args[1];
  let prevState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);

  const dispatchWithLogger = useMemo(() => withLogger(dispatch), [dispatch]);

  useEffect(() => {
    if (state !== initialState) {
      console.log('%cprev state', 'color: gray; font-weight: bold', prevState.current);
      console.log('%cnext state', 'color: forestgreen; font-weight: bold', state);
      console.groupEnd();
    }
    prevState.current = state;
  }, [state]);

  return [state, dispatchWithLogger];
};
