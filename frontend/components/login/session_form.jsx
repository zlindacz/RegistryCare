import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
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
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1>{ this.props.formType }</h1>
          <input onChange={this.update("name")} type="text" className="input-field" placeholder="Name" />
          <input onChange={this.update("password")} type="password" className="input-field" placeholder="Password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default SessionForm;
