// Class Components6
import React, {Component} from "react";

class Card extends Component{
    constructor(){
        super()
    }
// component render - built in method to return jsx
    render(){
        return(
            <div className="card">
                <div className="content">
                    <div className="img">
                        <img src="https://picsum.photos/id/234/1200/800"  />
                        
                    </div>
                    <div className="details">
                        <div className="name">User-1</div>
                        <div className="job">web developer</div>
                    </div>
                    <div className="media-icons">
                        <a href="#" target="_blank" ><i className="bi bi-facebook"></i></a>
                        <a href="#" target="_blank" ><i className="bi bi-google"></i></a>
                        <a href="#" target="_blank" ><i className="bi bi-twitter"></i></a>
                        <a href="#" target="_blank" ><i className="bi bi-instagram"></i></a>
                        <a href="#" target="_blank" ><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
