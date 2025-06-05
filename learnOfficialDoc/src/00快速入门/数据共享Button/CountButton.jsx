export default function CountButton({count,onClick}){
    return (
        <button onClick={onClick}>点击了{count}次</button>
    )
}