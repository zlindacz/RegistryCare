import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import LoginFormContainer from '../login/login_form_container';
import SignupFormContainer from '../signup/signup_form_container';
import { withRouter } from 'react-router';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.navigateToSignup = this.navigateToSignup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      this.closeModal();
      this.props.router.push("/registry");
    } else if (this.props.currentUser && ! nextProps.currentUser) {
      this.props.router.push("/");
    }
  }

  navigateToSignup() {
    this.props.router.push('signup')
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }

  onModalOpen() {
    ModalStyle.content.opacity = 20;
  }

  notLoggedIn() {
   return(
     <div>
       <ul className="header-list group">
         <li><a>About</a></li>
           <li><a onClick={this.navigateToSignup}>Sign Up</a></li>
           <li><a onClick={() => this.openModal()}>Log In</a></li>
         </ul>
       </div>
     );
   }

  loggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a>About</a></li>
          <li><a onClick={() => this.props.logout()}>Log Out</a></li>
        </ul>
      </div>
    );
  }



  render() {
    return(
      <header className="header-nav">
        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
          onAfterOpen={this.onModalOpen}>
            <LoginFormContainer />
            <a onClick={this.closeModal} className="modal-close-link">Close</a>
        </Modal>
        <img src="assets/heart.png" className="logo"/>
        { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
      </header>
    );
  }
}

export default withRouter(AppHeader);
