import { useState, memo ,  useCallback} from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import { useMemo } from 'react';
import CounterHistory from '../Counter/CounterHistory.jsx'


function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount) , [initialCount]);

  //const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState([initialCount]);

  //const [counterHistory, setCounterChanges] = useState([])


  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    //setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounter) => [-1 , ...prevCounter] )
  
  } , [])

  const handleIncrement = useCallback(function handleIncrement() {
    //setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounter) => [1 , ...prevCounter] )
  
  } , [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
        <CounterHistory history={counterChanges}></CounterHistory>
      </p>
    </section>
  );
}
)
export default Counter
/*
The difference between memo and useMemo in React lies in how and where they are used, and what they are optimizing.

1. memo
Type: Higher-Order Component (HOC).
Usage: memo is used to wrap a functional component to optimize re-rendering. It memoizes the component, meaning it only re-renders when its props change.
When to Use: Useful for optimizing components that receive props but don't need to re-render unless the props change.
Example:

javascript
Copy code
import React, { memo } from 'react';

const MyComponent = memo(({ data }) => {
  console.log("MyComponent rendered");
  return <div>{data}</div>;
});
Here, MyComponent will only re-render if data changes. If its parent re-renders but data remains the same, MyComponent won't re-render.
2. useMemo
Type: React Hook.
Usage: useMemo is used to memoize the result of a function call or a value inside a component. It caches the result of an expensive computation and recalculates it only when dependencies change.
When to Use: Ideal for optimizing expensive calculations or operations within a component that you don't want to re-run on every render unless necessary.
Example:

javascript
Copy code
import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const computedValue = useMemo(() => {
    console.log("Expensive calculation");
    return data * 2;
  }, [data]);

  return <div>{computedValue}</div>;
};
Here, computedValue is recalculated only when data changes, saving computation time on each re-render.
Summary:
memo: Memoizes the entire component to avoid re-renders based on props changes.
useMemo: Memoizes the result of a calculation within a component, recalculating only when dependencies change.
In short:

Use memo to optimize the rendering of entire components.
Use useMemo to optimize calculations or specific values inside a component.





*/