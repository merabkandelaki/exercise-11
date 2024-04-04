import React, { Component } from 'react';
import { findUser } from '../../utils';
import './LoginForm.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = findUser(email, password);
    if (user) {
      this.props.onLogin(user);
    } else {
      alert('Invalid email or password');
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h1 className="login-title">Login</h1>
        <form className="form-login" onSubmit={this.handleSubmit}>
          <div className="login-input-box">
            <label className="login-label" htmlFor="email">
              Email:
            </label>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="login-input-box">
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
