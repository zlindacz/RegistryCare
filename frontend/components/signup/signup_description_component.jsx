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
      <form onSubmit={this.handleClick} className="show-form1">
        <h1 className="signup-title">Tell Us About {this.props.organization_name}'s Mission</h1>
        <textarea style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                className="signup-description-field"
                placeholder="Description"
                onChange={this.update}>
        </textarea>
        <input type="submit" value="Next" className="next-button" />
      </form>
    );
  }
}

export default SignupDescription;
