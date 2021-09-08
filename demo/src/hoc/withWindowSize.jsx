import React from 'react';
import useWindowSize from './useWindowSize';

function withWindowSize(Comp) {
  return (props) => {
    const windowSize = useWindowSize();
    return <Comp windowSize={windowSize} {...props}></Comp>
  };
}

export default withWindowSize;
