import React, { useState } from 'react';
import useSyncState from './hooks/useSyncState';

function App() {
    const [state, setState] = useSyncState(0);
    const [data, setData] = useState(0);

    const clickcb = () => {
        setState(state + 1, (val) => {
            console.log('val', val);
        });
        setData(data + 1);
        console.log('data', data);
    };

    return (
        <div>
            <button onClick={clickcb}>点击按钮</button>
        </div>
    );
}

export default App;