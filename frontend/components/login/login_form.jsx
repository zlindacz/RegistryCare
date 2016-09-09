import React from 'react';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showErrors() {
    let loginErrors = this.props.errors;
    // console.log(loginErrors);
    if (loginErrors.length >= 1) {
      return loginErrors.map((error,i) => {
        return(<li key={i}>{error}</li>);
        // console.log(error);
      });
    };
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }


  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1 className="login-heading">Log In</h1>

          <div className="login-error-messages">
            <ul>{this.showErrors()}</ul>
          </div>

          <span className="login-input">
            <i className="fa fa-user icon-4x" aria-hidden="true"></i>
            <input onChange={this.update("username")} type="text" className="login-input-field" placeholder="Name" />
          </span>


          <span className="login-input">
            <i className="fa fa-lock icon-4x" aria-hidden="true"></i>
            <input onChange={this.update("password")} type="password" className="login-input-field" placeholder="Password" />
          </span>

          <input type="submit" value="Login" className="login-submit-button"/>
        </form>
      </div>
    )
  }

}

export default withRouter(LoginForm);
