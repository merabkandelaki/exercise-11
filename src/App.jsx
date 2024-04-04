import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import './App.css';

class App extends Component {
  state = {
    isRegistered: false,
    isLoggedIn: false,
    user: null,
  };

  handleRegistration = () => {
    this.setState({ isRegistered: true });
  };

  handleLogin = (user) => {
    this.setState({ isLoggedIn: true, user });
  };

  render() {
    const { isRegistered, isLoggedIn, user } = this.state;

    return (
      <div className='result'>
        {isLoggedIn ? (
          <h1 className='result-login'>Welcome {user.firstName}</h1>
        ) : isRegistered ? (
          <LoginForm onLogin={this.handleLogin} />
        ) : (
          <RegisterForm onRegistration={this.handleRegistration} />
        )}
      </div>
    );
  }
}

export default App;
