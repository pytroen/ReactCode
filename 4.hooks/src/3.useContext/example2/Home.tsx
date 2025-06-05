import UserProfile from "./UserProfile"
import { UserContext } from "./UserContext"
import { useState } from "react"
interface User {
    name: string,
    age: number,
}

const Home: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const handleClick = () => {
        setUser({ name: 'zhangsan', age: 17 })
    }

    return (
        <div>
            <UserContext.Provider value={user}>
                <UserProfile onLogingClick={handleClick} />
            </UserContext.Provider>

        </div>
    )
}

export default Home