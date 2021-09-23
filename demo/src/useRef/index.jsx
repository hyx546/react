import React, { useRef, useState, useCallback } from 'react';

// export default function Timer() {
//   // 定义time 用于保存计时的累积时间
//   const [time, setTime] = useState(0);

//   // 定义timer 这样一个容器用于在跨组件渲染之间保存一个变量
//   const timer = useRef(null);

//   // 开始计时的事件处理函数
//   const handleStart = useCallback(() => {
//     // 使用current属性设置ref的值
//     timer.current = window.setInterval(() => {
//       setTime((time) => time + 1);
//     }, 100);
//   }, []);

//   // 暂停计时的事件处理函数
//   const handlePause = useCallback(() => {
//     window.clearInterval(timer.current);
//     timer.current = null;
//   }, []);
//   return (
//     <div>
//       <div>{time / 10} seconds.</div>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   );
// }

export default function Timer() {
  const inputEL = useRef(null);
  const onButtonClick = () => {
    // current属性指向了真实的input这个DOM节点，从而可以调用docus方法
    inputEL.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputEL} />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}
