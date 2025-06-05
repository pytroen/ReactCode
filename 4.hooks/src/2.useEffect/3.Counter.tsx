import { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `当前计数：${count}`;
  }, [count]); // 依赖 count，count 变化时执行

  return (
    <button onClick={() => setCount(count + 1)}>
      点击加一（{count}）
    </button>
  );
};

export default Counter;
