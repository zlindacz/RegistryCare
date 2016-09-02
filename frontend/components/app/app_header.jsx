import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../login/login_form_container';
import SignupFormContainer from '../signup/signup_form_container';
import { withRouter } from 'react-router';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: "login"
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.navigateToSignup = this.navigateToSignup.bind(this);
  }

  navigateToSignup() {
   this.props.router.push('signup')
  }

  openModal(type) {
   this.setState({modalOpen: true, formType: type});
  }

  closeModal() {
   this.setState({modalOpen: false});
  }

  notLoggedIn() {
   return(
     <div>
       <ul className="header-list group">
         <li><a>About</a></li>
           <li><a onClick={this.navigateToSignup}>Sign Up</a></li>
           <li><a onClick={() => this.openModal("login")}>Log In</a></li>
         </ul>
       </div>
     );
   }

  loggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a>About</a></li>
          <li><a>Log Out</a></li>
        </ul>
      </div>
    );
  }

  render() {
    return(
      <header className="header-nav">
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }>
          { this.state.formType === 'login' ? <LoginFormContainer formType={ this.state.formType } /> : <SignupFormContainer formType={ this.state.formType } /> }
        </Modal>
        <img src="assets/heart.png" className="logo"/>
        { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
      </header>
    );
  }
}

export default withRouter(AppHeader);
