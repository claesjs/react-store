import React from 'react';
import { useCount } from '../count-context'

const Counter = () => {
  const { increment, reduce } = useCount();
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={reduce}>-</button>
    </div>
  );
}

export default Counter;
