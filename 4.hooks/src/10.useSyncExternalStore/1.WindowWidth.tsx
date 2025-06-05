// 这个案例是通过copilot生成的
//useSyncExternalStore 是 React 18 引入的一个用于订阅外部可变数据源（如全局状态、原生事件等）的 Hook。它能保证在并发渲染下数据一致性。

import React, { useSyncExternalStore } from 'react';

// 订阅窗口 resize 事件
/* ubscribe 函数负责监听窗口的 resize 事件。当窗口大小发生变化时，会调用传入的回调函数。返回的函数用于取消事件监听，确保组件卸载时不会发生内存泄漏。*/
function subscribe(callback: () => void): () => void {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

// 获取当前窗口宽度
// getSnapshot 返回新对象导致无限更新
function getSnapshot(): number {
  return window.innerWidth;
}

// 服务端渲染时的快照（可选，防止警告）
function getServerSnapshot():number {
  return window.innerHeight
}

const WindowWidth: React.FC = () => {
    //  useSyncExternalStore 钩子来安全地订阅和读取外部存储（这里是 window.innerWidth）的值。
  const width = useSyncExternalStore(subscribe, getSnapshot,getServerSnapshot);

  return <div>当前窗口宽度：{width}px</div>;
};

export default WindowWidth;

// 总结：这种写法相比 useEffect + useState 更加安全，特别是在并发渲染和服务端渲染场景下。需要注意的是，useSyncExternalStore 适合用于订阅外部数据源（如全局事件、全局状态等），而不是本地状态。

/* 补充：**全局事件** 指的是在整个应用范围内都可以被监听和响应的事件，通常与浏览器或操作系统相关。例如：  
- `window` 的 `resize`（窗口大小变化）、`scroll`（滚动）、`keydown`（键盘按下）等事件  
- `document` 的某些事件，如 `visibilitychange`  
这些事件不是某个组件私有的，而是全局共享的，任何组件都可以监听。

**全局状态** 指的是在应用的多个组件之间共享的数据。它不属于某个单独组件，而是整个应用都可以访问和修改。例如：  
- 使用 Redux、MobX、Recoil、Zustand 等状态管理库维护的状态  
- React Context 提供的全局数据  
- 某些情况下，保存在 `window` 或 `localStorage` 上的数据也可以视为全局状态

全局事件和全局状态的特点是：它们的变化会影响到多个组件，因此需要一种安全、统一的方式来订阅和响应这些变化。 */