import { useCallback, useState } from 'react';
function useCounter(quantity) {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + quantity);
  }, [count, quantity]);
  const decrement = useCallback(() => {
    setCount(count - quantity);
  }, [count, quantity]);
  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return { count, increment, decrement, reset };
}

export default useCounter;
