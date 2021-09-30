/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import DragItem from '../dragItem/dragItem';
import './index.css';

export interface pageToShowProps {
  id: number;
  cur: boolean;
  type?: string;
}
interface PagecomponentProps {
  total: number;
  current: number;
  showTotal: any;
  pageCallbackFn: (cur: number, oldIndex?: number, newIndex?: number) => void;
}
function Pagecomponent(props: PagecomponentProps) {
  const { total, pageCallbackFn, current = 1, showTotal } = props;
  let currentPage = current;
  const [left, setLeft] = useState(Math.max(1, currentPage - 2));
  const [right, setRight] = useState(Math.min(currentPage + 2, total));

  /**
   * 拖拽后的值
   * @param dragRow 拖拽的对象
   * @param placeRow 放置的对象
   */
  const sortItems = useRef<{ dragRow: any; placeRow: any }>({
    dragRow: {},
    placeRow: {},
  });

  /**
   * 拖拽结束后的方法
   */
  const onDrop = () => {
    const { dragRow, placeRow } = sortItems.current;
    // 拖拽的itemIndex-dragRow.id,放置的itemInde-placeRow.id
    if (dragRow.id !== placeRow.id) {
      currentPage = placeRow.id;
      pageCallbackFn(currentPage, dragRow.id, placeRow.id);
      sortItems.current = {
        dragRow: {},
        placeRow: {},
      };
    }
  };

  const [, drop] = useDrop({
    // 定义拖拽的类型 类型必须相同
    accept: 'sort',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  /**
   * 前五页
   * @returns
   */
  const goFivePrev = () => {
    const cur = currentPage - 5 <= 1 ? 1 : currentPage - 5;
    pageClick(cur);
  };

  /**
   * 点击页面
   * @param cur 页码
   */
  const pageClick = (cur: number) => {
    // 将当前页码返回父组件
    currentPage = cur;
    pageCallbackFn(cur);
  };

  const goFiveNext = () => {
    const cur = currentPage + 5 >= total ? total : currentPage + 5;
    pageClick(cur);
  };

  /**
   * 回车跳转页码
   */
  const switchChange = (e: any) => {
    const cur = parseInt(e.target.value);
    if (e.keyCode === 13 && cur) {
      currentPage = cur;
      pageCallbackFn(cur);
    }
  };

  // 页码数组
  const pageToShow: pageToShowProps[] = useMemo(() => {
    // 显示分页按钮
    const pageNum: pageToShowProps[] = [];
    setLeft(Math.max(1, currentPage - 2));
    setRight(Math.min(currentPage + 2, total));
    if (total > 4) {
      if (currentPage - 1 <= 2) {
        setRight(1 + 4);
      }
      if (total - currentPage <= 2) {
        setLeft(total - 4);
      }
    }
    // 根据返回的总记录数计算当前页显示的数据
    for (let j = left; j <= right; j++) {
      const active = currentPage === j;
      pageNum.push({ id: j, cur: active });
    }
    if (left !== 1) {
      pageNum.unshift({ id: 1, cur: false });
    }
    if (right !== total) {
      pageNum.push({ id: total, cur: false });
    }
    return pageNum;
  }, [currentPage, total, left, right]);

  /**
   * 改变拖拽位置
   * @param dragRow 开始位置
   * @param placeRow 放置位置
   */
  const onSortItemChange = (dragRow: any, placeRow: any) => {
    sortItems.current = { dragRow, placeRow };
  };

  const renderCard = (curPageNum: any, index: any) => {
    return <DragItem key={curPageNum.id} pageItem={curPageNum} onSortItemChange={onSortItemChange} pageClick={pageClick} />;
  };

  return (
      <div className="paginationDiv">
        {showTotal(total)}
        <div className="pagesDrag" ref={drop}>
          <a className={currentPage === 1 ? 'prev disable' : 'prev'} onClick={() => currentPage !== 1 && pageClick(currentPage - 1)} />
          {pageToShow.map((curPageNum, index) => {
            const fivePreBtn = index === 1 && left !== 1 && currentPage >= 5;
            const fiveNextBtn = index === pageToShow.length - 2 && right !== total && currentPage <= total - 4;
            return (
              <React.Fragment key={index}>
                {fivePreBtn && <a className="fivePrev" onClick={goFivePrev} />}
                {renderCard(curPageNum, index)}
                {fiveNextBtn && <a className="fiveNext" onClick={goFiveNext} />}
              </React.Fragment>
            );
          })}
          <a className={currentPage === total ? 'next disable' : 'next'} onClick={() => currentPage !== total && pageClick(currentPage + 1)} />
        </div>
        <div className="rightDiv">
          Go to
          <input type="search" onKeyUp={switchChange} />
        </div>
      </div>
  );
}
export default Pagecomponent;
