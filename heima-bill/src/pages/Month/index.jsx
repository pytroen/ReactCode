import React, { useEffect, useMemo, useState } from 'react'
import './index.scss'
// 状态管理
import { useDispatch, useSelector } from 'react-redux'
import { asyncSetBillList } from '@/store/modules/billStore'
// UI
import { Button, DatePicker } from 'antd-mobile'
import { DownOutline, UpOutline } from 'antd-mobile-icons'
// 工具包
import dayjs from 'dayjs'
import _ from 'lodash'

const Month = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSetBillList())
  }, [dispatch]);
  const [testNum, setTestNum] = useState(0);
  const [dateVisible, setDateVisible] = useState(false);
  // 这样写规范吗？标记一下
  const [currentDate, setCurrentDate] = useState(() => {
    const date = new Date();
    return {
      year: dayjs(date).format("YYYY"),
      month: dayjs(date).format("MM"),
      yearMonth: dayjs(date).format('YYYY-MM'),
    }
  });
  const { billList } = useSelector(state => state.bill);

  // ，二次处理数据，当[]中数据变化时会重新求值
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'));
  }, [billList]);
  // console.log(monthGroup);

  const [currentMonthList, setCurrentMonthList] = useState([]);
  const monthResult = useMemo(() => {
    const pay = currentMonthList?.filter(item => item.type === 'pay').reduce((a, b) => a + b.money, 0);
    const income = currentMonthList?.filter(item => item.type === 'income').reduce((a, b) => a + b.money, 0);
    // 疑问？为什么初始都是0，但是一选择日期confirm后pay和income都变成了undefined,原因如下面打印所展示，所以需要在handleDateconfirm中设置月份没有账单的判断,不然月度无账单monthGroup[monthKey]会为undefined
    // console.log(undefined?.filter(item => item.type === 'pay').reduce((a, b) => a + b.money, 0));
    // console.log([]?.filter(item => item.type === 'pay').reduce((a, b) => a + b.money, 0));
    // console.log(pay); //0
    // console.log(income); //0
    // const numPay = pay ? Math.abs(pay) : 0;
    // const numIncome = income ? income : 0;

    return {
      pay: Math.abs(pay).toFixed(2),
      income: income.toFixed(2),
      surplus: (pay + income).toFixed(2),
    }
  }, [currentMonthList])

  useEffect(() => {
    // 自己想的，为了降低耦合性用const dateKey = dayjs().format('YYYY-MM')而不用currentDate的初始数据，Object.values(currentDate).join('-')（最开始就两个值年和月）省的currentDate数据的结构又有啥改动了。
    // 不过又想到个好方法，currentDate数据在加个键值对yearMonth:value;
    const monthList = monthGroup[currentDate.yearMonth];
    console.log('1231231');
    console.log(currentDate);
    monthList ? setCurrentMonthList(monthList) : setCurrentMonthList([]);
  }, [monthGroup, currentDate]);

  const handleDateConfirm = (date) => {
    // console.log(date);
    const dateKey = dayjs(date).format('YYYY-MM');
    const monthList = monthGroup[dateKey];
    // 加判断,该月份没有账单则如何
    monthList ? setCurrentMonthList(monthList) : setCurrentMonthList([]);
    setCurrentDate(p => {
      return {
        ...currentDate,
        year: dayjs(date).format("YYYY"),
        month: dayjs(date).format('MM'),
        yearMonth: dayjs(date).format('YYYY-MM'),
        other: null,
      }


    });
    setTestNum(p => { return p + 1 });
    console.log('testNum:',testNum); //第一次还是0,后面会逐渐增加
    console.log('设置currentDate的同时打印currentDate:', currentDate); //第一次输出还是不带other，哪怕用p=>p+1形式
  }

  return (
    <div className="monthlyBill">
      <div className='header'>月度收支</div>
      <div className='content'>
        <div className='title' onClick={() => setDateVisible(true)}>
          <span className="year">{currentDate.year}</span>
          <span className="month">{currentDate.month}月账单</span>
          <div className="arrow">
            {dateVisible ? <UpOutline /> : <DownOutline />}
          </div>
        </div>
        <div className="income-expenses">
          <div className='item expenses'>
            <div className="number">￥{monthResult.pay}</div>
            <div className='text'>支出</div>
          </div>
          <div className='item income'>
            <div className="number">￥{monthResult.income}</div>
            <div className='text'>收入</div>
          </div>
          <div className='item surplus'>
            <div className="number">￥{monthResult.surplus}</div>
            <div className='text'>结余</div>
          </div>
        </div>
      </div>
      {/* 选择时间 */}
      <DatePicker
        className='billDate'
        title="记账日期"
        precision="month"
        visible={dateVisible}
        max={new Date()}
        onCancel={() => setDateVisible(false)}
        onConfirm={(date) => handleDateConfirm(date)}
        onClose={() => setDateVisible(false)}

      />



    </div>



  )
}

export default Month