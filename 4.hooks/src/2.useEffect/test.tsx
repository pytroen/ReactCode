import { useState,useEffect } from "react"

const Timer:React.FC = ()=>{
    const [seconds,setSeconds] = useState<number>(0);
    useEffect(() =>{
        const time = setInterval(()=>{
            setSeconds(s => s+1)
        },1000);

        return () =>clearInterval(time);
    },[])

    return (
        <div>过了秒：{seconds}</div>
    )
}

export default Timer