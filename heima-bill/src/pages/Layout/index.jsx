import React from 'react'
import { Outlet } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import './index.scss'
import {
  AddCircleOutline,
  BillOutline,
  CalculatorOutline,
} from 'antd-mobile-icons'

const Layout = () => {
  const tabs = [
    {
      key: '/month',
      title: '月度账单',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: '新建账单',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <CalculatorOutline />,
    },
  ]


  return (
    <div className='layout'>
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar  >
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout