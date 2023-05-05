import { IUser } from "./LoginForm"
interface AvatarProps{
    userObj:IUser
}

function Avatar({userObj}:AvatarProps){
    return (
        <div>
            <h1 className="cyberpunk glitched">{userObj.name}</h1>
            <img src={userObj.image} alt="" style={{width:'100px',height:'100px'}}/>
        </div>
    )
}

export default Avatar