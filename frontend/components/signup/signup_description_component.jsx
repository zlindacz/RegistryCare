import React from 'react';

class SignupDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: ""}

    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.value = this.value.bind(this);
  }

  update(e) {
    this.setState({description: e.currentTarget.value});
  }

  value() {
    if (this.state.description.length === 0) {
      return this.props.user.inProgressUser.description;
    } else {
      return this.state.description;
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.description === "") {
      this.props.receiveInProgressUser(this.props.user.inProgressUser);
    } else {
      this.props.receiveInProgressUser(this.state)
    };
    this.props.next();
  }

  render(){
    return(
      <form onSubmit={this.handleClick} className="form-and-button">
        <textarea
            className="signup-description-field"
            placeholder="Description"
            value={this.value()}
            onChange={this.update}>
        </textarea>
        <input type="submit" value="Next" className="signup-next-button" />
      </form>
    );
  }
}

export default SignupDescription;
