import React from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
