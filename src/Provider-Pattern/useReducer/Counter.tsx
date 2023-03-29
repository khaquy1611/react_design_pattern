import * as React from 'react';
import { CounterContext } from './CounterContext';

const countReducer = (state: { count: number; }, action: { type: any; step: any; }) => {
  const { type, step } = action;
  console.log('type', type)
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + step,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - step,
      };
    }
    default:
      return state;
  }
};

const Counter = ({ step = 1 }) => {
  const initialCount = React.useContext(CounterContext)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: 'INCREMENT', step });
  const decrement = () => dispatch({ type: 'DECREMENT', step });
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;