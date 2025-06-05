import { useState } from "react";
export default function CountButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={ handleClick}>点击了{count}次</button>
        </div>
    )
} 