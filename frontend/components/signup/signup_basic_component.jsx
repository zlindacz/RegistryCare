import React from 'react';
import merge from 'lodash/merge';

class SignupBasic extends React.Component {
  constructor(props) {
    super(props);

    const nullUser = {
      username: "",
      organization_name: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: ""
    }
    this.state = merge({}, nullUser, this.props.user.inProgressUser);
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

  renderErrors(){
    return(this.props.errors.map(error => (
      <div>
        <h3 className="error-subheading">Please fill in the following information before proceeding:</h3>
        <li>{error}</li>
      </div>
    )));
  }

  render(){
    return(
      <div>
        <ul>{this.renderErrors()}</ul>
        <form onSubmit={this.handleClick} className="form-and-button">
          <div className="form1-container">
            <input type="text" value={this.state.organization_name} onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
            <input type="text" value={this.state.username} onChange={this.update("username")} className="signup-input-field" placeholder="Username" />
            <input type="text" value={this.state.email} onChange={this.update("email")} className="signup-input-field" placeholder="Email" />
            <input type="password" value={this.state.password} onChange={this.update("password")} className="signup-input-field" placeholder="Password" />
            <input type="text" value={this.state.address1} onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />
            <input type="text" value={this.state.address2} onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />
            <input type="text" value={this.state.city} onChange={this.update("city")} className="signup-input-field" placeholder="City" />
            <input type="text" value={this.state.state} onChange={this.update("state")} className="signup-input-field" placeholder="State" />
            <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />
            <input type="text" className="signup-input-field" placeholder="Country" />
          </div>
          <input type="submit" value="Next" className="signup-next-button"/>
        </form>
      </div>
    );
  }
}

export default SignupBasic;
