import { useEffect, useState } from 'react';

const getPosition = () => {
  return {
    x: document.body.scrollLeft,
    y: document.body.scrollTop,
  };
};

function useScroll() {
  // 声明一个position，保存滚动条的位置
  const [positon, setPositon] = useState(getPosition());
  useEffect(() => {
    const handler = () => {
      setPositon(getPosition(document));
    };
    // 监听scroll事件，更新滚动条位置
    document.addEventListener('scroll', handler);
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener('scroll', handler);
    };
  }, []);
  return positon;
}

export default useScroll;
