import { useState } from "react"
import { ThemeContext } from "./ThemeContext";
import ThemeChild from './ThemeChild'

const Theme: React.FC = () => {
    const [theme, setTheme] = useState<'black' | 'white'>('black');

    return (
        <div>
            {/* 不用ThemeContext.Provider包裹,点击按钮子元素的不会改变 */}
            <ThemeContext.Provider value={theme}>
                <div>父元素：{theme}</div>
                <ThemeChild />
                <button onClick={() => setTheme(theme => theme === 'black' ? 'white' : 'black'
                )}>点击</button>
            </ThemeContext.Provider>
        </div>
    )
}

export default Theme