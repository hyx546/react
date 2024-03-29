import React, { useState } from 'react';
import useCounter from './useCounter';

function UserDefinedHooks() {
  const [num, setNum] = useState(1);
  // 调用自定义hook
  const { count, increment, decrement, reset } = useCounter(num);
  return (
    <div>
      <div>
        <input
          type="text"
          defaultValue={num}
          placeholder="输入需要加减的数"
          onChange={(e) => {
            e.target.value ? setNum(parseInt(e.target.value)) : setNum(1);
          }}
        />
      </div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

// function UserDefinedHooks() {
//   const {
//     execute: fetchUsers,
//     data: users,
//     loading,
//     error,
//   } = useAsync(async () => {
//     const res = await fetch('https://reqres.in/api/users/');
//     const json = await res.json();
//     return json.data;
//   });
//   return (
//     <div>
//       <div className="user-list">
//         <button onClick={fetchUsers} disabled={loading}>
//           {loading ? 'loading...' : 'show Users'}
//         </button>
//         {error && <div style={{ color: 'red' }}>Failed:{String(error)}</div>}
//         <ul>
//           {users &&
//             users.length > 0 &&
//             users.map((user) => {
//               return <li key={user.id}>{user.first_name}</li>;
//             })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function UserDefinedHooks() {
//   const { y } = useScroll();
//   const goTop = useCallback(() => {
//     document.body.scrollTop = 0;
//   }, []);
//   const style = { position: 'fixed', right: '10px', bottom: '10px' };
//   if (y > 300) {
//     return (
//       <button onClick={goTop} style={style}>
//         Back to Top
//       </button>
//     );
//   }
//   return <div style={{ height: 1200 }}>hhhhhh</div>;
// }

export default UserDefinedHooks;
