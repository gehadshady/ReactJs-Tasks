import React ,{Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {count: 42};

    }

    increment=()=>{
        this.setState({
            count:++(this.state.count)
        })
    }
    decrement=()=>{
        this.setState({
            count:--(this.state.count)
        })
    }
    render(){
        return (
            <>
                <h2 className="counter">
                    {this.state.count}
                </h2>
                <button className="counter-btn"  onClick={this.increment}>+</button>
                <button className="counter-btn"  onClick={this.decrement}>-</button>
                <style>{`
                    .counter{color:#333}
                    .counter-btn{padding:5px 10px}
                `}</style>

            </>
        );
      }
}
export default Counter;