import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
const Com:React.FC = () =>{
    const themr = useContext(ThemeContext);
    return (
        <div>组件：{themr}</div>
    )
}

export default Com