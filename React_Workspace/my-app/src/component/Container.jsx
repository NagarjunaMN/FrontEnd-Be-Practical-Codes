//functional components
import React from "react";
import MainCard from "./MainCard";
function Container(props) {
    return (
        <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <MainCard />
            <div className="button">
                <label htmlFor="one" className="one active"></label>
                <label htmlFor="two" className="two"></label>
            </div>
        </div>
    );
}

export default Container