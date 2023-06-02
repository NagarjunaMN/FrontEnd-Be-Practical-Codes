import React, {Component} from "react";

// global
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

class Ex4 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // local variables
        let x = 145;
        return(
            <div>
                <h1>Variables in class component</h1>
                <h3>x = {x}</h3>
            </div>
        )
    }
}

export default Ex4 ;