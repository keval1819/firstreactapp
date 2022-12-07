import React from "react";
import './counter.css'

class Counter extends React.Component{

    constructor(){
        super();

        this.state = {
            count : 0
        }
    }
    increment() {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
    }
    decrement() {
       if (this.state.count > 0) {
        this.setState({
            count: this.state.count - 1
        })
       }
    }

    render(){
        return (
            <div className="add-minus">
                <h1> Heyy guysss ...</h1>
                

                <p> {this.state.count}</p>

                <button onClick={() => {this.increment()}}>
                    +
                </button>

                <button onClick={() => {this.decrement()}}>
                    -
                </button>
            </div>
        )
    }
}

export default Counter;
