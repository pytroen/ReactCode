import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import Com from "./com";

const ThemeChild: React.FC = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <div>子元素：{theme}</div>
            <Com/>
        </div>

    )
}

export default ThemeChild