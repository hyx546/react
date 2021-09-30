import React, { useState } from 'react';
import './App.css';
import Pagination from './pagination/myPagination';

const list = [
  { id: 1, text: 'page 1' },
  { id: 2, text: 'page 2' },
  { id: 3, text: 'page 3' },
  { id: 4, text: 'page 4' },
  { id: 5, text: 'page 5' },
  { id: 6, text: 'page 6' },
  { id: 7, text: 'page 7' },
  { id: 8, text: 'page 8' },
  { id: 9, text: 'page 9' },
  { id: 10, text: 'page 10' },
  { id: 11, text: 'page 11' },
  { id: 12, text: 'page 12' },
  { id: 13, text: 'page 13' },
  { id: 14, text: 'page 14' },
  { id: 15, text: 'page 15' },
  { id: 16, text: 'page 16' },
  { id: 17, text: 'page 17' },
  { id: 18, text: 'page 18' },
  { id: 19, text: 'page 19' },
  { id: 20, text: 'page 20' },
];

const App = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [pageList, setPageList] = useState(list);
  let total = list.length;

  // 拖拽后map重新排序
  const arrSort = (arr: any[], oldIndex: number, newIndex: number) => {
    if (oldIndex > newIndex) {
      arr.splice(newIndex, 0, arr[oldIndex]);
      arr.splice(oldIndex + 1, 1);
    } else {
      arr.splice(newIndex + 1, 0, arr[oldIndex]);
      arr.splice(oldIndex, 1);
    }
    return arr;
  };

  const changeCurLevelIndex = (index: number, oldIndex?: number, newIndex?: number) => {
    setCurIndex(index);
    if (oldIndex && newIndex) {
      const arr = arrSort(list, oldIndex - 1, newIndex - 1);
      setPageList(arr);
    }
  };
  return (
    <div className="App">
      <div className="paganition">
        <Pagination
          pageCallbackFn={(index: number, oldIndex?: number, newIndex?: number) => changeCurLevelIndex(index - 1, oldIndex, newIndex)}
          total={total}
          current={curIndex + 1}
          showTotal={(total: number) => <span style={{ marginRight: '8px' }}>{`LEVEL_LIST (${total})`}</span>}
        />
      </div>
    </div>
  );
};

export default App;
