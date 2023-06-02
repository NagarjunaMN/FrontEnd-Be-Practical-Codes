import React from "react";
//global
let x = 22;
const y = 124;
let title = "Welcome to String data";
let isAdmin = true;
let user = {
    "name":"Raju",
    "age" : 23,
    "email" : "raju@gmail.com"
}
let emp = ["Hello", "World", "I'm", "Nagarjuna","MN"]

const Ex2 = function(props) {
    let x = 555;
    return (
        <div>
            <h1>Variables in Const local Functional component</h1>
            <h3>x = {x} </h3>
            <h3>y = {y} </h3>
            <h3> product = {x*y} </h3>
            <hr />
            <h2>{title}</h2>
            <hr />
            <h3>Boolean = {isAdmin ? "Say True":"Say False"}</h3>
            <hr />
            <h4>name = {user.name}</h4>
            <h4>age = {user.age}</h4>
            <h4>email = {user.email}</h4>
            <hr />
            <div>
                {
                    emp.map((item,index) =>{
                        return(
                            <p key={index}>{index} {item}</p>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Ex2;