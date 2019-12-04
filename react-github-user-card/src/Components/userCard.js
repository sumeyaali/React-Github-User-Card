import React from "react"
import Followers from "./FollowerCard"

const UserCard = props => {

    return (
        <div>
           <img src={props.user.avatar_url}/>
           <p>{props.user.login} </p> 
           <p>{props.user.location} </p> 
           <p>{props.user.bio} </p> 
           <p>{props.user.url} </p> 

        </div>
    )

}

export default UserCard;