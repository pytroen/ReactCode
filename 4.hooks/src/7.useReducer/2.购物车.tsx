import { useReducer } from "react";

const ShoppingCart = () => {
    const initData = [
        { id: 0, name: '小满(只)', price: 100, count: 1, isEdit: false },
        { id: 1, name: '中满(只)', price: 200, count: 1, isEdit: false },
        { id: 2, name: '大满(只)', price: 300, count: 1, isEdit: false }
    ]

    type State = typeof initData;

    const reducer = (state: State, action: {
        type: 'sub' | 'add' | 'del' | 'edit' | 'update_name', id: number, newName?: string
    }) => {
        /* 这段 reducer 代码修改了 React 的原数据（state），这不符合 React 推荐的“不可变数据”开发准则。*/
        // const item = state.find(item =>item.id === action.id)!;
        // switch(action.type){
        //     case 'sub':
        //         item.count--;
        //         return [...state];
        //     case 'add':
        //         item.count++;
        //         return [...state];
        //     default:
        //         return state;
        // }
        const newState = state.map(item => {
          

            if (item.id === action.id) {
                switch (action.type) {
                    case 'add':
                        return { ...item, count: item.count + 1 };
                    case 'sub':
                        return { ...item, count: item.count - 1 };
                    case 'update_name':
                        return { ...item, name: action.newName }
                    case 'edit':
                        return {...item,isEdit:!item.isEdit}
                    default:
                        return item;
                }
            } else {
                switch(action.type){
                      // 是要实现点击id=n的name让其他所有id不为n的name变为false
                    case 'edit':
                        return {...item,isEdit:item.isEdit?!item.isEdit:item.isEdit}
                    default:
                        return item;
                }
            }
        })

        if (action.type === 'del') {
            return newState.filter(item => item.id !== action.id);
            /*下面返回删除的数组，  1. `splice` 是**原地修改**（会直接改变 `newState` 数组本身,虽然newValue已经不是原数组且内部对象也是新对象），这不推荐。
2. `action.id` 作为索引用来删除，实际你的 `id` 是商品 id，不一定等于数组索引，可能会删错。*/
            // newState.splice(action.id, 1);
        }

        return newState;

    }
    const [data, dispatch] = useReducer(reducer, initData)
    return (
        <>
            <h1>购物车</h1>
            <table cellSpacing={0} border={1} width={800}>
                <thead>
                    <tr>
                        <td align="center">编号</td>
                        <td align="center">名称</td>
                        <td align="center">价格</td>
                        <td align="center">数量</td>
                        <td align="center">操作</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (
                            <tr key={item.id}>
                                <td align="center" >{item.id + 1}</td>
                                <td align="center" >
                                    {item.isEdit ? <input type='text'
                                        value={item.name}
                                        // onBlur={() =>dispatch({type:'edit',id:item.id})}
                                        onChange={e => dispatch({ type: 'update_name', id: item.id, newName: e.target.value })}
                                        onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                                dispatch({ type: 'edit', id: item.id })
                                            }
                                        }
                                        }
                                        autoFocus
                                    /> :
                                        <span onClick={() => dispatch({ type: 'edit', id: item.id })}>{item.name}</span>}

                                </td>


                                <td align="center">{item.price}</td>
                                <td align="center">
                                    <button onClick={() => dispatch({ type: 'sub', id: item.id })}>-1</button>
                                    {item.count}
                                    <button onClick={() => dispatch({ type: 'add', id: item.id })}>+1</button>
                                </td>
                                <td align="center">
                                    <button onClick={() => dispatch({ type: 'edit', id: item.id })}>修改</button>
                                    <button onClick={() => dispatch({ type: 'del', id: item.id })}>删除</button>
                                </td>
                            </tr>
                        )
                    }

                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td align="center" >总价</td>
                        {/* 如果reduce第二个不给初始值,如果数组为空，那么在没有初始值的情况下调用 reduce 会导致错误。 */}
                        <td align="center" colSpan={4}>{data.reduce((sum, item) => sum + item.count * item.price, 0)}</td>
                        {/* {['qwe','ert','ret'].reduce((a,b)=> a+b,'')} */}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ShoppingCart;