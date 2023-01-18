import React, { Component } from 'react';
import './state.css'


class NewYear extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Abaddon",
            age:18,
            job:"FrondEnd Dev",
            date:new Date(),
            count:0,


        };

    }
    reset(){
        this.setState({
            count:0
        })
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        })
    }
    decreament(){
        this.setState({
            count:this.state.count - 1


        })
    }
    render() {
        return (
            <>
                <button onClick={(e) => this.increment(e)}>+</button>
                <button onClick={(e) => this.decreament(e)}>-</button>
                <button onClick={(e) => this.reset(e)}>Reset</button>
                <h1>Count:{this.state.count}</h1>
                

            </>
        );
    }
}



export default NewYear;