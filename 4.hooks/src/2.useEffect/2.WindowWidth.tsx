import { useEffect, useState } from 'react';

const WindowWidth: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // 清理副作用
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>窗口宽度：{width}</div>;
};

export default WindowWidth;