import UserList from './userList/index.jsx';
import React from 'react';
import HocComp from './hoc/index';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UserList /> */}
      <HocComp />
      
    </div>
  );
}

export default App;