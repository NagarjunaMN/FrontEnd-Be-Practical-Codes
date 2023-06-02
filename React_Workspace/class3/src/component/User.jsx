import React from "react";
import UserCard from "./UserCard";
export default function User(props) {
    return(
        <div className="container">
            {
                props.userData.map((item,index) => {
                    return (
                        <UserCard key={index} {...item} />
                    )
                })
            }
        </div>

    )
}