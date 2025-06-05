import { useContext} from "react"
import { UserContext } from "./UserContext"

interface UserProfileProps {
    onLogingClick:() =>void;
}

const UserProfile: React.FC<UserProfileProps> = ({onLogingClick}) => {
   const user = useContext(UserContext);
    return (
        <div>
            {user ? <span>用户名：{user!.name}</span> 
            : <span style={{ color: 'red' }}>未登录,请<button onClick={() => onLogingClick()}>登录</button></span>}
        </div>
    )

}

export default UserProfile