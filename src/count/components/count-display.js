import React from 'react';
import { useCount } from '../count-context'

const CountDisplay = () => {
  const { state } = useCount();
  return <div>The current counter count is {state.count}</div>;
}

export default CountDisplay;
