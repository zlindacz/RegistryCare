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

        <input type="text" onChange={this.props.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
        <input type="text" onChange={this.props.update("username")} className="signup-input-field" placeholder="Username" />
        <input type="text" onChange={this.props.update("email")} className="signup-input-field" placeholder="Email" />
        <input type="text" onChange={this.props.update("address1")} className="signup-input-field" placeholder="Address 1" />
        <input type="text" onChange={this.props.update("address2")} className="signup-input-field" placeholder="Address 2" />
        <input type="text" onChange={this.props.update("city")} className="signup-input-field" placeholder="City" />
        <input type="text" onChange={this.props.update("state")} className="signup-input-field" placeholder="State" />
        <input type="text" onChange={this.props.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />

        <input type="submit" value="Next" />
      </form>
    );
  }
}

export default SignupBasic;
