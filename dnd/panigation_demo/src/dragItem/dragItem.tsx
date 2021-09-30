/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDrag, useDrop } from 'react-dnd';
import React, { useRef } from 'react';
import { pageToShowProps } from '../pagination/myPagination';
/**
 * 通用拖拽排序的容器
 * @param pageItem 当前页码
 */
interface IProps {
  pageItem: pageToShowProps;
  onSortItemChange: (item: pageToShowProps, pageItem: pageToShowProps) => void;
  pageClick: (currentPage: number) => void;
}
const DragItem: React.FC<IProps> = (props) => {
  const { pageItem, onSortItemChange, pageClick } = props;
  const ref = useRef<HTMLDivElement>(null);
  /**
   * 定义拖拽
   * isDragging 是否拖拽
   */
  const [{ isDragging }, drag] = useDrag({
    item: { ...pageItem, type: 'sort' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'sort',
    hover(item: any) {
      if (!ref.current) return;
      onSortItemChange(item, pageItem);
    },
  });
  drag(drop(ref));
  const { id, cur } = pageItem;
  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.25 : 1 }}>
      <a key={id} onClick={() => pageClick(id)} className={cur ? 'num current' : 'num'}>
        {id}
      </a>
    </div>
  );
};
export default DragItem;
