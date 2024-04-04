import React, { Component } from 'react';
import initialState from '../InitialState';
import validateForm from '../ValidationRules';
import { registerUser } from '../../utils';
import './RegisterForm.css';
import RegisterImage from '../../assets/register_img.png';
import GoogleIcon from '../../assets/google.png';
import GitHubIcon from '../../assets/github.png';

class RegisterForm extends Component {
  state = initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(this.state);
    if (!Object.keys(errors).length) {
      const { firstName, lastName, birthDate, email, password } = this.state;
      const user = { firstName, lastName, birthDate, email, password };
      registerUser(user);
      this.props.onRegistration();
      console.log('Registration successful');
    } else {
      this.setState({ errors });
    }
  };
  render() {
    const {
      firstName,
      lastName,
      birthDate,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
      <>
        <div className="registration">
          <div className="register-left-box">
            <img className="image" src={RegisterImage} alt="Registration" />
          </div>
          <div className="register-right-box">
            <h1 className="register-right-box-title">Welcome User</h1>
            <form className="form-register" onSubmit={this.handleSubmit}>
              <div className="register-input-box">
                <label className="register-label" htmlFor="firstName">
                  Firstname:
                </label>
                <input
                  className="register-input"
                  type="text"
                  name="firstName"
                  placeholder="Enter your Firstname"
                  value={firstName}
                  onChange={this.handleChange}
                />
                {errors.firstName && (
                  <span className="register-errors">{errors.firstName}</span>
                )}
              </div>

              <div className="register-input-box">
                <label className="register-label" htmlFor="lastName">
                  Lastname:
                </label>
                <input
                  className="register-input"
                  type="text"
                  name="lastName"
                  placeholder="Enter your Lastname"
                  value={lastName}
                  onChange={this.handleChange}
                />
                {errors.lastName && (
                  <span className="register-errors">{errors.lastName}</span>
                )}
              </div>

              <div className="register-input-box">
                <label className="register-label" htmlFor="birthDate">
                Select your date of birth:
                </label>
                <input
                  className="register-input"
                  type="date"
                  name="birthDate"
                  placeholder="Enter your Birth date"
                  value={birthDate}
                  onChange={this.handleChange}
                />
                {errors.birthDate && (
                  <span className="register-errors">{errors.birthDate}</span>
                )}
              </div>

              <div className="register-input-box">
                <label className="register-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="register-input"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={this.handleChange}
                />
                {errors.email && (
                  <span className="register-errors">{errors.email}</span>
                )}
              </div>

              <div className="register-input-box">
                <label className="register-label" htmlFor="password">
                  Password:
                </label>
                <input
                  className="register-input"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.handleChange}
                />
                {errors.password && (
                  <span className="register-errors">{errors.password}</span>
                )}
              </div>

              <div className="register-input-box">
                <label className="register-label" htmlFor="confirmPassword">
                  Confirm password:
                </label>
                <input
                  className="register-input"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
                {errors.confirmPassword && (
                  <span className="register-errors">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <button className="register-button" type="submit">
                Create Account
              </button>
            </form>
            <div className="register-right-box-bottom">
              <h2 className="register-right-box-bottom-title">OR</h2>
              <div className="alternative-registration">
                <div className="google-registration">
                  <img className="icon" src={GoogleIcon} alt="Googleicon" />
                  <span className="alternative-registration-name">
                    Sing up with Google
                  </span>
                </div>
                <div className="github-registration">
                  <img className="icon" src={GitHubIcon} alt="Githubicon" />
                  <span className="alternative-registration-name">
                    Sing up with GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterForm;
