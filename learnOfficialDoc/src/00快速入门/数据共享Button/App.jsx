import { useState } from "react"
import CountButton from "./CountButton"
export default function App() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <CountButton count={count} onClick={handleClick}/>
            <CountButton count={count} onClick={() =>setCount(count +1)}/>
        </div>
    )
}