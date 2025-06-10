import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>login</div>
      <Link to='/article'>跳转到文章页</Link>
      <button onClick={()=>navigate('/article?id=111&name=zhangsan')}>跳转到文章页传参1</button>
      <button onClick={()=>navigate('/user/105/lisi')}>传参2</button>
    </div>

  )
}

export default Login