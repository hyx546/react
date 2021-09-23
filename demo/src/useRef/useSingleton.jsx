import React, { useRef } from 'react';

function useSingleton(callback) {
  const called = useRef(false);
  if (called.current) return;
  callback();
  called.current = true;
}

const MyComp = () => {
  useSingleton(() => {
    console.log('-----只执行一次');
  })
  return <div>My Component</div>;
};

export default MyComp;



useEffect(() => {
  // componentDidMount + componentDidUpdate
  console.log('这里基本等价于 componentDidMount + componentDidUpdate');
  return () => {
    // componentWillUnmount
    console.log('这里基本等价于 componentWillUnmount');
  }
}, [deps])
