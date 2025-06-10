import React, { useEffect } from 'react'
import { Button } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetBillList } from '@/store/modules/billStore'
const Month = () => {
  const dispatch = useDispatch();
  const {billList} = useSelector(state=>state.bill)
  useEffect(()=>{
    dispatch(asyncSetBillList())
  },[dispatch])
  return (
    <>
      <div>Month</div>
      <Button color='primary' >
        全局
      </Button>
      <div className="purple">
        <Button color='primary'>局部</Button>
      </div>
    <div>{billList.map(item=><li key={item.id}>{item.money}</li>)}</div>
    </>

  )
}

export default Month