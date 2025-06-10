import store from './store'
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increase,decrease,add5,add10} from './store/modules/counterStore';
import { useEffect } from 'react';
import { fetchList } from './store/modules/listCounter';
function App() {
  const { count } = useSelector(state => state.counter);
  const {list} = useSelector(state=>state.list);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchList())
  },[dispatch]);
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>dispatch(decrease())}>-1</button>
      <button onClick={()=>dispatch(increase())}>+1</button>
      <button onClick={()=>dispatch(add5(5))}>+5</button>
      <button onClick={()=>dispatch(add10({num:10}))}>+10</button>
      <hr />
      <div>{list.map(item =>item.name + ' | ')}</div>
    </>

  )

}

export default App
