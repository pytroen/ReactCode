import { useReducer } from "react";

const initState = {
    count: -1
}
type State = typeof initState;

// 该函数默认不走
/* 这段代码定义了 action 参数的类型，表示 action 是一个对象，并且必须包含一个名为 type 的属性。type 属性的值只能是 'add' 或 'sub' 这两个字符串之一。
在 useReducer 的 reducer 函数中，action 用于描述要执行的操作类型。通过这种类型约束，可以确保 reducer 只会处理 'add'（加一）或 'sub'（减一）这两种操作，避免传入其他无效的 type 值，提高了代码的类型安全性和可维护性。*/
const reducer = (state: State, action: { type: 'add' | 'sub' }) => {
    // console.log('reducer',state,action);
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'sub':
            return { count: state.count - 1 }
        default:
            return state
    }
}

// 初始化函数，只走一次，修饰默认值
const initFn = (state: State) => {
    console.log("init:", state);
    return { count: Math.abs(state.count) }
}

const Counter = () => {
    // 第一个参数是处理函数
    // 第二个参数是默认值
    // 第三个参数是可选的，初始化函数，只走一次，修饰默认值
    const [state, dispatch] = useReducer(reducer, initState, initFn);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'sub' })}>-</button>
        </>
    );
}
export default Counter;