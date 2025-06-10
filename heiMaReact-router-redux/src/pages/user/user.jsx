import { useParams } from "react-router-dom"

const User =()=>{
    const params = useParams();
    return (
        <>
            <div>尊敬的VIP{params.id}{params.name}您好</div>
            <div>Home</div>
        </>
    )
}

export default User;