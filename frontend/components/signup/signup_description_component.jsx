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
      <div className="show-form2">
        <h1 className="signup-title">Tell Us About Your Mission</h1>
        <form onSubmit={this.handleClick} className="form2-container">
          <textarea style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  className="signup-description-field"
                  placeholder="Description"
                  onChange={this.update}>
          </textarea>
          <input type="submit" value="Next" className="signup-description-next-button" />
        </form>
      </div>
    );
  }
}

export default SignupDescription;
