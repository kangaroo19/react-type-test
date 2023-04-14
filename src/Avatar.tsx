import { IUser } from "./LoginForm"
interface AvatarProps{
    userObj:IUser
}

function Avatar({userObj}:AvatarProps){
    return (
        <div>
            <img src={userObj.image} alt="" style={{width:'100px',height:'100px'}}/>
            <div>{userObj.name}</div>
        </div>
    )
}

export default Avatar