import React from 'react';

class SignupDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: ""}

    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({description: e.currentTarget.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveInProgressUser(this.state);
    this.props.next();
  }

  render(){
    return(
      <form onSubmit={this.handleClick} className="form-and-button">
        <textarea
            className="signup-description-field"
            placeholder="Description"
            onChange={this.update}>
        </textarea>
        <input type="submit" value="Next" className="signup-next-button" />
      </form>
    );
  }
}

export default SignupDescription;
