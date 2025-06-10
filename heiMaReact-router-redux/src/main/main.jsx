import React, { useState } from 'react'
import './main.css'
import { Outlet, useNavigate } from 'react-router-dom'
const Main = () => {
    const [isTabACtive, setIsTabActive] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter = () => {
        setIsTabActive(true);
    }
    const handleMouseLeave = ()=>{
        setIsTabActive(false);
    }
    return (
        <div className="main">
            <ul  className={`tabFirst ${isTabACtive?'tabActive':'tabUnactive'}`}>
                <li
                    onClick={() => { navigate('/home') }}
                    onMouseEnter={()=>handleMouseEnter()}
                    onMouseLeave={()=>handleMouseLeave()}
                >home</li>

                <li
                    onClick={() => { navigate('/login') }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={()=>handleMouseLeave()}
                >login</li>

                <li
                    onClick={() => { navigate('/user/123/wangwu') }}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={()=>handleMouseLeave()}>user</li>
                <li
                    onClick={() => { navigate('/article?id=127&name=zhaoliu') }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={()=>handleMouseLeave()}   
                >article</li>
            </ul>
            <div className='title'>main</div>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est pariatur non architecto culpa quaerat maxime similique sunt, quisquam saepe molestias et facilis optio neque blanditiis accusantium magnam fugit tempore?</p>
            <Outlet />
        </div>

    )
}

export default Main