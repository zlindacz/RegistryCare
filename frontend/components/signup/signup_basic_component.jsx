import React from 'react';

class SignupBasic extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveInProgressUser(this.state);
    this.props.next();
  }

  render(){
    return(
      <form onSubmit={this.handleClick} className="show-form1">
        <h1 className="signup-title">Basic Information</h1>

        <input type="text" onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
        <input type="text" onChange={this.update("username")} className="signup-input-field" placeholder="Username" />
        <input type="password" onChange={this.update("password")} className="signup-input-field" placeholder="Password" />
        <input type="text" onChange={this.update("email")} className="signup-input-field" placeholder="Email" />
        <input type="text" onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />
        <input type="text" onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />
        <input type="text" onChange={this.update("city")} className="signup-input-field" placeholder="City" />
        <input type="text" onChange={this.update("state")} className="signup-input-field" placeholder="State" />
        <input type="text" onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />

        <input type="submit" value="Next" className="next-button"/>
      </form>
    );
  }
}

export default SignupBasic;
