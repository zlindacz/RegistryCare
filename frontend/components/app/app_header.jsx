import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import LoginFormContainer from '../login/login_form_container';
import { withRouter } from 'react-router';
import SearchBar from './search_container';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
    this.navigateToSignup = this.navigateToSignup.bind(this);
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentUser && nextProps.currentUser) {
      this.closeModal();
      this.props.router.push(`/index`);
    } else if (this.props.currentUser && !nextProps.currentUser) {
      this.props.router.push("/");
    }
  }

  navigateToHome() {
    this.props.router.push('/')
  }

  navigateToSignup() {
    this.props.router.push('signup')
  }

  navigateToProfile(user) {
    this.props.router.push('profile')
  }

  openModal() {
    this.setState({modalOpen: true});
    this.props.clearErrors();
    console.log('opened modal');
  }

  closeModal() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }

  onModalOpen() {
    ModalStyle.content.opacity = 20;
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.guestLogin();
  }

  handleLogout() {
    this.props.clearUserInfo();
    this.props.logout();
  }

  notLoggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a onClick={this.guestLogin}>Guest Login</a></li>
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
          <p className="welcome-message">
            Welcome back, { this.props.currentUser.username }!
          </p>
          <li><a onClick={ this.navigateToProfile }>Profile</a></li>
          <li><a onClick={ this.handleLogout }>Log Out</a></li>
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
            <LoginFormContainer
              closeModal={ this.closeModal }
              errorStatus={ this.state.freshErrors } />
            <a onClick={this.closeModal} className="modal-close-link">Close</a>
        </Modal>
        <div className="header-img-logo" onClick={ this.navigateToHome }>
          <img className="logo" src="http://res.cloudinary.com/zlindacz/image/upload/v1473195164/heart_ljdual.png"/>
          <p className="app-name">Care</p>
        </div>
        <a className="browse-link">Browse</a>
        <SearchBar></SearchBar>
        { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
      </header>
    );
  }
}

export default withRouter(AppHeader);
