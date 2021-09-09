import UserList from './userList/index.jsx';
import React from 'react';
import HocComp from './hoc/index';
import Counter from './useCallBack/index';
import SearchUserList from './useMemo/index';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UserList /> */}
      {/* <HocComp /> */}
      {/* <Counter /> */}
      <SearchUserList />
    </div>
  );
}

export default App;
