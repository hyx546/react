import { useRef, useState, useEffect } from 'react';


function useSyncState(state) {
    const [data, setData] = useState(state);
    const useMyRef = useRef(null);

    useEffect(() => {
        console.log(data, useMyRef.current, 'useMyRef.current2');
        useMyRef.current && useMyRef.current(data);
    }, [data]);

    return [data, (val, callback) => {
        useMyRef.current = callback;
        setData(val);
        console.log(callback, 'callback');
        console.log(useMyRef.current, 'useMyRef.current');
    }];
}

export default useSyncState;