import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => { this.setState({"login": e.currentTarget.value}); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn){
      // hashHistory.push("/");
      console.log("logged in!");
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1 className="login-heading">Log In</h1>

          <span className="login-input">
            <i className="fa fa-user icon-4x" aria-hidden="true"></i>
            <input onChange={this.update("name")} type="text" className="login-input-field" placeholder="Name" />
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

export default LoginForm;
