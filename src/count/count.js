import React from 'react';
import { CountProvider, useCount } from './count-context'
import CountDisplay from './components/count-display';
import Counter from './components/counter';

const Count = () => (
  <div>
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  </div>
);

export default Count;
