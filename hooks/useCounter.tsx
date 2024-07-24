import { useState } from 'react';

type UseCounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
};

export const useCounter = ({
  initialValue = 0,
  min,
  max,
}: UseCounterProps): [
  number,
  (quantity?: number) => void,
  (quantity?: number) => void
] => {
  const [counter, setCounter] = useState(initialValue);

  function increment(quantity: number = 1) {
    if (max != undefined) {
      if (counter + quantity > max) return;
    }

    setCounter(counter => counter + quantity);
  }

  function decrement(quantity: number = 1) {
    if (min != undefined) {
      if (counter - quantity < min) return;
    }

    setCounter(counter => counter - quantity);
  }

  return [counter, increment, decrement];
};
