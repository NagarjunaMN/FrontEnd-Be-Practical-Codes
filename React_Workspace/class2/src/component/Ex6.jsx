import React from "react";

export class Ex6 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            x:12,
            y:33,
            title : "Welcome to string",
            isView : true,
            emp : ["Sita","Rama","Raju","Alluri"]
        }
    }
    countHandler() {
        // this.setState = > built in state handler (applicable only for class component)
        this.setState({
            x : this.state.x + 1,
            y : this.state.y +2
        })
    }
    boolHandler() {
        this.setState({
            isView : !this.state.isView
        })
    }
    render(){
        return(
            <div>
                <h1>States in class components</h1>
                <h3>{this.state.title}</h3>
                <h3>x = {this.state.x} and y = {this.state.y} </h3>
                <button onClick={this.countHandler.bind(this)}>Increment</button>
                <hr />
                <h3>
                    Boolean = {this.state.isView ? <span style={{color:"green"}}>It's True</span> :<span style={{color:"red"}}>It's False</span> }
                </h3>
                <button onClick={() => this.boolHandler()}>{this.state.isView ? "want false?":"want true?"}</button>
                <hr />

                <h3>
                    {
                        this.state.emp.map((item,index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </h3>
            </div>
        )
    }
}