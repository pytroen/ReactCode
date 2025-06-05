/*`useEffect` 是 React 函数组件中用于处理副作用（side effects）的 Hook。副作用包括**数据请求、订阅事件、手动操作 DOM、定时器等**，这些操作不能直接写在组件的渲染流程里，而应该放在 `useEffect` 中。`useEffect` 可以让你在组件挂载、更新、卸载时执行特定的代码。 */


import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    // 页面加载时请求数据
    useEffect(() => {

        /* 1. fetch(/data123.json) 
       向服务器请求 /data123.json 文件。返回一个 Promise，代表异步请求的结果。
    2 .then(res => res.json()) 
       当请求成功后，res 是响应对象。调用 res.json() 可以把响应体解析为 JSON 格式（也是一个 Promise）。
    3 .then((data: User[]) => setUsers(data))  
       当 JSON 解析完成后，data 就是解析出来的用户数组。通过 setUsers(data) 把数据保存到组件状态中，触发页面更新。*/
        fetch('/data123.json')
            .then(re => re.json())
            .then((data: User[]) => setUsers(data));
    }, []);

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

export default UserList