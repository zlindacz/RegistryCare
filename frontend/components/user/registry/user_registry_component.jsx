import React from 'react';
import { withRouter } from 'react-router';
// import UserHeader from './user_header_component';

class UserRegistry extends React.Component {
  constructor(props){
    super(props);

    this.determineIfPledged = this.determineIfPledged.bind(this);
    this.togglePledgeButton = this.togglePledgeButton.bind(this);
    this.pluralizePledge = this.pluralizePledge.bind(this);
  };


  componentDidMount(){
    this.props.requestSingleUser(this.props.params.userId);
  };

  // determineIfPledged() {
  //   let pledges = [];
  //   this.props.user.pledges.forEach(pledge => {
  //     if (pledge.other_user_id !== this.props.currentUser.id) {
  //       pledges.push(pledge.other_user_id);
  //     }
  //   });
  //
  //   if (pledges.includes(this.props.currentUser.id)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  determineIfPledged() {
    let pledged = false;
    if (this.props.user) {
      this.props.user.pledges.forEach(pledge => {
        if (pledge.other_user_id === this.props.currentUser.id) {
          pledged = true;
          return;
        }
      });
    }
    return pledged;
  };

  togglePledgeButton() {
    if (this.determineIfPledged()) {
      debugger
      this.props.removePledge(this.props.user.id)
    } else {
      this.props.createPledge(this.props.user.id)
    }
  };

  pledgeText() {
    if (this.determineIfPledged()) {
      return "Unpledge";
    } else {
      return "Pledge";
    }
  }

  pluralizePledge() {
    if (this.props.user.pledges.length === 1) {
      return "Pledge";
    } else {
      return "Pledges";
    }
  };

  render(){
    const user = this.props.user;
    if (!user) {return (<div>loading</div>);};

    let categories = user.categories.map(category => {
      return (<span className="mini-category" key={category.id}>{category.name}</span>);
    });

    let items = user.items.map(item => {
      return (<li className="mini-item" key={item.id}>{item.name}</li>);
    });

    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "contact-info");
    // debugger
    return(
      <div>
        <section className="registry-logo-title">
          <img className="logo-photo" src={user.photo} />
          <h1 className="registry-title">{user.organization_name}</h1>
        </section>

        <div className="registry-body">
          <section className="registry-body-left">
            <div className="registry-description">
              <h3 className="registry-subtitle">Description:</h3>
              <p className="description">{user.description}</p>
            </div>

            <div className="registry-contact">
              <h3 className="registry-subtitle">Contact:</h3>
              <p className="contact-info">{user.address1}</p>
              <p className={showAddress2}>{user.address2}</p>
              <p className="contact-info">{user.city}, {user.state} {user.zipcode}</p>
            </div>
          </section>

          <section className="registry-body-right">
            <button className="pledge-button" onClick={this.togglePledgeButton}>{this.pledgeText()}</button>
            <p className="pledge-count">{user.pledges.length} {this.pluralizePledge()}</p>
          </section>


        </div>
      </div>
    );
  }
};

export default withRouter(UserRegistry);
