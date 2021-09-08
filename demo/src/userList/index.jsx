import React, { useState } from 'react';
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0)

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://reqres.in/api/users/');
      const json = await res.json();
      setUsers(json.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  console.log('-----1');
  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'loading...' : 'show Users'}
      </button>
      {error && <div style={{ color: 'red' }}>Failed:{String(error)}</div>}
      <ul>
        {users.length>0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>

      <button onClick={() => setCount(count+1)}>add</button>
      <div>{count}</div>
    </div>
  );
}
