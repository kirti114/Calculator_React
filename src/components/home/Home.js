import React, { Component } from 'react';
import Calc from "../calc/Calc";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_calc: false
        }
    }

    handleSubmit = () => {
        this.setState({ open_calc: (this.state.open_calc == true) ? false : true });
    }

    render() {
        let { open_calc } = this.state;
        return (
            <div className="ml-3">
                <button className=" mt-2 btn btn-outline-primary" onClick={() => this.handleSubmit()}>{open_calc ? 'Close' : 'Open'} Calculator</button>

                <div className="mt-4">
                {(open_calc == true) &&
                    <Calc />
                }
                </div>
            </div>
        )
    }
}

export default Home;
