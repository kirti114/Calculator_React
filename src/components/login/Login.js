import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit = () => {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div class="login">
                <h2 class="login-header">Log in</h2>

                <form onSubmit={this.handleSubmit} class="login-container text-center">
                    <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                    <input type="password" name="pwd" value={this.state.pwd} placeholder="Password" required onChange={this.handleChange} />
                    <div className="btn btn-outline-primary mt-2" onClick={() => this.handleSubmit()} >Log In</div>
                </form>
            </div>
        )
    }
}

export default Login;
