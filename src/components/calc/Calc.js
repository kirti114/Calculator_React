import React, { Component } from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };


    render() {
        let { result } = this.state;
        return (
            <div>
                <div className="result"><p>{result}</p></div>

                <div className="button">
                    <button name="1" onClick={e => this.onClick(e.target.name)}>1</button>
                    <button name="2" onClick={e => this.onClick(e.target.name)}>2</button>
                    <button name="3" onClick={e => this.onClick(e.target.name)}>3</button>
                    <button name="+" onClick={e => this.onClick(e.target.name)}>+</button><br />


                    <button name="4" onClick={e => this.onClick(e.target.name)}>4</button>
                    <button name="5" onClick={e => this.onClick(e.target.name)}>5</button>
                    <button name="6" onClick={e => this.onClick(e.target.name)}>6</button>
                    <button name="-" onClick={e => this.onClick(e.target.name)}>-</button><br />

                    <button name="7" onClick={e => this.onClick(e.target.name)}>7</button>
                    <button name="8" onClick={e => this.onClick(e.target.name)}>8</button>
                    <button name="9" onClick={e => this.onClick(e.target.name)}>9</button>
                    <button name="*" onClick={e => this.onClick(e.target.name)}>x</button><br />


                    <button name="." onClick={e => this.onClick(e.target.name)}>.</button>
                    <button name="0" onClick={e => this.onClick(e.target.name)}>0</button>
                    <button name="=" onClick={e => this.onClick(e.target.name)}>=</button>
                    <button name="/" onClick={e => this.onClick(e.target.name)}>÷</button><br />

                    <button name="CE" onClick={e => this.onClick(e.target.name)}> Delete </button>
                    <button name="C" onClick={e => this.onClick(e.target.name)}>C</button><br />
                </div>
            </div>
        )
    }
}

export default Calc;
