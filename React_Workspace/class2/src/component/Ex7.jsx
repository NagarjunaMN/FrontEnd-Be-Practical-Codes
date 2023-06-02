import React from "react";

export class Ex7 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message : "Welcome Vistor",
            isLogged : true,
            
        }
    }
    msgHandler() {
        // this.setState = > built in state handler (applicable only for class component)
        this.setState({ 
            isLogged : !this.state.isLogged
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h3>
                   Log Status = {this.state.isLogged ? "Logged In" :"Not Logged In"}
                </h3>
                <button onClick={() => this.msgHandler()}>Log Toggle</button>
            </div>
        )
    }
}

export default Ex7