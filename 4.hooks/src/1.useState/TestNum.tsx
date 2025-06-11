import React, { useState } from 'react'

const TestNum = () => {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    setNum(p => p + 1);
    console.log(num);
  }
  return (
    <div >Test
      <button onClick={handleClick}>点击</button>
    </div>

  )
}

export default TestNum