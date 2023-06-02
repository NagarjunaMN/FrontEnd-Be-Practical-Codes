import React, {useState} from "react";

//useState = hook -> used only in functional component
// state variables => value
//state handler = > used to change/modify the values of the state

function Ex5(props) {
    //const [state, handler] = useState(init value)
    let [num, setNum] = useState(0);
    const [isView,setIsView] = useState(false)

    const clickHandler = () => setNum(num+1)
  
    //function binding => direct call //here it is clickhandler
    // callback here it is bool handler

    const boolHandler = () => setIsView(!isView)
    return (
        <div>
            <h1>State in functional component</h1>
            <h2>num  = { num }</h2>
            <button onClick={clickHandler}>Add+1</button>
            <hr />
            <div>
                {
                    isView ? <h1>Welcome to React</h1> : <h1>Try Next Time</h1>
                }
            </div>
            <button onClick={() => boolHandler()}>{isView?"True":"False"}</button>
        </div>
    )
}

export default Ex5