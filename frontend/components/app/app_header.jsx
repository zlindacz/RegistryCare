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
    this.props.logout();
  }

  notLoggedIn() {
    return(
      <ul className="header-list">
        <li><a onClick={this.guestLogin}>Guest Login</a></li>
        <li><a onClick={this.navigateToSignup}>Create Registry</a></li>
        <li><a onClick={() => this.openModal()}>Log In</a></li>
      </ul>
    );
  }

  loggedIn() {
    return(
      <ul className="header-list">
        <h2 className="welcome-message">
          Welcome back, { this.props.currentUser.username }!
        </h2>
        <SearchBar></SearchBar>
        <li><a onClick={ this.navigateToHome }>Index</a></li>
        <li><a onClick={ this.navigateToProfile }>Profile</a></li>
        <li><a onClick={ this.handleLogout }>Log Out</a></li>
      </ul>
    );
  }

  render() {
    return(
      <header className="row header-nav">
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
        <div className="col-2">
          <div className="header-img-logo" onClick={ this.navigateToHome }>
            <img className="logo"
              src="http://res.cloudinary.com/zlindacz/image/upload/v1483217370/heart2_icwkjp.png"
              alt="heart logo" />
            <p className="app-name">Care</p>
          </div>
        </div>
        <div className="col-10 right">
          { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
        </div>
      </header>
    );
  }
}

export default withRouter(AppHeader);
