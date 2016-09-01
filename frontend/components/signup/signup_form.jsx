import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      organization_name: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      // hashHistory.push("signup2");
      console.log("signed up");
    }
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={ this.handleSubmit } className="signup-form">
          <h1>Sign Up</h1>
          <input type="text" onChange={this.update("organization_name")} className="signup-input-form" placeholder="Organization Name" />

          <input type="text" onChange={this.update("username")} className="signup-input-form" placeholder="Username" />

          <input type="text" onChange={this.update("email")} className="signup-input-form" placeholder="Email" />

          <input type="text" onChange={this.update("address1")} className="signup-input-form" placeholder="Address 1" />

          <input type="text" onChange={this.update("address2")} className="signup-input-form" placeholder="Address 2" />

          <input type="text" onChange={this.update("city")} className="signup-input-form" placeholder="City" />

          <input type="text" onChange={this.update("state")} className="signup-input-form" placeholder="State" />

          <input type="text" onChange={this.update("zipcode")} className="signup-input-form" placeholder="Zip Code" />

          <input type="submit" value="Next" />
          <a>Log In</a>
        </form>
      </div>
    )
  }
}

export default SignupForm;
