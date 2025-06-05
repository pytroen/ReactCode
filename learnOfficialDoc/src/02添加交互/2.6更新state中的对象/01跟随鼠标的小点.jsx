import { useState } from "react";
export default function MousePoint() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div className="parent"
        style={
            {
                position:"relative",
                width:'100vw',
                height:'100vh'
            }
        }
        onPointerMove={e =>{
            setPosition({
                x:e.clientX,
                y:e.clientY,
            })
        }}
        >
            <div
            style={{
                position:'absolute',
                backgroundColor:'orange',
                borderRadius:'50%',
                transform:`translate(${position.x}px,${position.y}px)`,
                left:-10,
                top:-10,
                width:10,
                height:10,
            }}
            >

            </div>
        </div>
    )

}