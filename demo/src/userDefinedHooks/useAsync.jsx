import { useCallback, useState } from 'react';

function useAsync(asyncFunction) {
  // 设置三个state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 用于异步逻辑
  const execute = useCallback(() => {
    // 请求开始时，设置loading为true，清除已有的数据和error
    setLoading(true);
    setData(null);
    setError(null);
    return asyncFunction()
      .then((res) => {
        // 请求成功时
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        // 请求失败
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);
  return { execute, data, loading, error };
}

export default useAsync;
