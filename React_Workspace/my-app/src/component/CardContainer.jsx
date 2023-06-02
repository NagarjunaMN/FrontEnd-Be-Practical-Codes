// const functional components (arrow)
import React from "react";
import Card from "./Card"

const CardContainer = (props) => {
    return (
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardContainer