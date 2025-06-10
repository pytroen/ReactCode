import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const Article = () => {
  const natigate = useNavigate();
  const [params] = useSearchParams();

  return (
    <>
    <div>编号为{params.get('id')}的{params.get('name')}用户你好</div>
      <div>article</div>
      <button onClick={()=>natigate('/login')}>跳转登录</button>

    </>

  )
}

export default Article