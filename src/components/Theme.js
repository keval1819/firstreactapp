import React from "react";
import './Theme.css'

class Theme extends React.Component{

    constructor(){
        super();

        this.state = {
            backgroundcolor : "red",
            color : "white"
        }
    }

    black = () => {
        // console.log("call");
        this.setState({
            backgroundcolor : "black",
            color : "white"
        })
    }
    darkblue = () => {
        this.setState({
            backgroundcolor : "darkblue",
            color : "white"
        })
    }  
    green = () => {
        this.setState({
            backgroundcolor : "green",
            color : "white"
        })
    }
  

    render(){
        return (<>
            <div className="container" style={{backgroundColor: this.state.backgroundcolor}}>
                <div className="row">
                    <div className="themebox">
                        <h1>Class base components...</h1>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <p style={{color: this.state.color}}>Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly. Imagine how much harder reading and writing would be if everything was just one long block of text.Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly. Imagine how much harder reading and writing would be if everything was just one long block of text.Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly. Imagine how much harder reading and writing would be if everything was just one long block of text.Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme. Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly. Imagine how much harder reading and writing would be if everything was just one long block of text. </p>
                        <br></br>
                        <div className="button">
                        <button onClick={() => {this.black()}}>BLACK</button>
                        <button onClick={() => {this.darkblue()}}>DARKBLUE</button>
                        <button onClick={() => {this.green()}}>GREEN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>  
        )
    }
}
export default Theme;
