function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            //   e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        // onClickCapture将事件传播变为捕获模式（默认是冒泡，捕获是从上至下，冒泡是从下至上）
        // 可以同时写onClickCapture 和onClick
        // 每个事件分三个阶段传播：
        // 它向下传播，调用所有的 onClickCapture 处理函数。
        // 它执行被点击元素的 onClick 处理函数。
        // 它向上传播，调用所有的 onClick 处理函数。
        // 捕获事件对于路由或数据分析之类的代码很有用，但你可能不会在应用程序代码中使用它们。
        <div className="Toolbar" onClickCapture={(e) => {
            //   e.stopPropagation()
            alert('你点击了 toolbar ！');
        }} onClick={(e) => {
            //   e.stopPropagation()
            alert('你点击了 toolbar ！');
        }}>
            <Button onClick={() => alert('正在播放！')}>
                播放电影
            </Button>
            <Button onClick={() => alert('正在上传！')}>
                上传图片
            </Button>
        </div>
    );
}
