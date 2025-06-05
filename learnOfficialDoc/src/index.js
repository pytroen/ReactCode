import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';


// import App from './00快速入门/独立的button/CountButton.jsx'
// import App from './00快速入门/数据共享Button/App.jsx'
// import './井字棋游戏/style.css'
// import App from './00快速入门/井字棋游戏/App.jsx'
// import App from './01描述UI/1.9 将UI视为树/App.jsx'

// import App from './02添加交互/2.6更新state中的对象/01跟随鼠标的小点.jsx'
// import App from './02添加交互/2.6更新state中的对象/02表单.jsx'
// import App from './03状态管理/用state响应输入/App.jsx';
// import App from './03状态管理/用state响应输入/challenge/01添加和删除一个class.jsx'
import App from './03状态管理/用state响应输入/challenge/02.个人信息编辑器.jsx'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式会调用两次，检查组件是否纯粹，生产环境下不会生效
  // <StrictMode>
    <App />
  // </StrictMode>
);
