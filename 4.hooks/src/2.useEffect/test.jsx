import { useEffect, useState } from "react"

const Win = () =>{
    const [width,setWidth] = useState(0);


    useEffect(() =>{
        function handleWid(){
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleWid);
        return () => window.removeEventListener('resize',handleWid);
    });

    return (
        <div>
            {width}
        </div>
    )
}

export default Win