import React from "react";
import UserCard from "./userCard"

const FollowerCard = (props) => {
    return (
        <div> 
             <img src={props.img}/> 
            <h1>{props.login}</h1>
            <p> {props.url}</p>
           
        </div>
    )
}



export default FollowerCard;