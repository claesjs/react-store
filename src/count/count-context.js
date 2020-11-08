import React, { createContext, useContext, useMemo } from 'react';
import { countReducer } from './count-reducer';
import * as Const from './count-constants';
import { useReducerWithLogger } from '../common/middlewares';

const CountContext = createContext();

const CountProvider = props => {
  const [state, dispatch] = useReducerWithLogger(countReducer, { count: 0 });
  const value = useMemo(() => [state, dispatch], [state]);

  return <CountContext.Provider value={value} {...props} />
};

const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  const [state, dispatch] = context;
  const increment = () => dispatch({ type: Const.INCREMENT });
  const reduce = () => dispatch({ type: Const.REDUCE });

  return {
    state,
    dispatch,
    increment,
    reduce
  };
};

export { CountProvider, useCount };
