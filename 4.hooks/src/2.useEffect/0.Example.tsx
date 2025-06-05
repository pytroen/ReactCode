import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // 浏览器控制台打印两次是因为使用了严格模式StrictMode
    console.log('组件挂载时执行一次');
    // 可以在这里请求数据、订阅事件等
  }, []); // 依赖数组为空，只在挂载时执行

  return <div>Example1</div>;
}

export default Example