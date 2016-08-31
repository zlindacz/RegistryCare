import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../login/session_form_container';

class AppHeader extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     modalOpen: false,
     formType: "login"
   };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
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
          <li><a onClick={() => this.openModal("signup")}>Sign Up</a></li>
          <li><a onClick={() => this.openModal("login")}>Log In</a></li>
        </ul>
      </div>
    );
  }

  loggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a><a>About</a></a></li>
          <li><a><a>Log Out</a></a></li>
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
        <SessionFormContainer formType={ this.state.formType } />
      </Modal>
        <img src="assets/heart.png" className="logo"/>
        { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
      </header>
    );
  }
}

export default AppHeader;
