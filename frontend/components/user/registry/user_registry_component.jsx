import React from 'react';
import { withRouter } from 'react-router';

class UserRegistry extends React.Component {
  constructor(props){
    super(props);

    this.determineIfPledged = this.determineIfPledged.bind(this);
    this.togglePledgeButton = this.togglePledgeButton.bind(this);
    this.togglePledgeButtonColor = this.togglePledgeButtonColor.bind(this);
    this.pluralizePledge = this.pluralizePledge.bind(this);
  };

  componentDidMount(){
    this.props.requestSingleUser(this.props.params.userId);
  };

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
      this.props.removePledge(this.props.user.id)
    } else {
      this.props.createPledge(this.props.user.id)
    }
  };

  togglePledgeButtonColor() {
    if (this.determineIfPledged()) {
      return "pledge-button red"
    } else {
      return "pledge-button green"
    }
  };

  pledgeText() {
    if (this.determineIfPledged()) {
      return "Unpledge";
    } else {
      return "Pledge";
    }
  };

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
      return (<span className="paragraph" key={category.id}>{category.name}</span>);
    });

    let items = user.items.map(item => {
      return (<li className="paragraph" key={item.id}>{item.name}</li>);
    });

    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "contact-info");
    return(
      <div className="registry-show">
        <h1 className="registry-tagline">{user.organization_name}</h1>

        <div className="registry-flex-parent">
          <img className="logo-photo" src={user.photo} />

          <div className="registry-body">
            <section className="registry-body-left">
              <div>
                <h3 className="registry-subtitle">Category:</h3>
                <p className="paragraph">{categories}</p>
              </div>
              <div className="registry-description">
                <h3 className="registry-subtitle">Description:</h3>
                <p className="paragraph">{user.description}</p>
              </div>

              <div className="registry-contact">
                <h3 className="registry-subtitle">Contact:</h3>
                <p className="paragraph">{user.address1}</p>
                <p className={showAddress2}>{user.address2}</p>
                <p className="paragraph">{user.city}, {user.state} {user.zipcode}</p>
                <h3 className="registry-subtitle">Items needed:</h3>
                <ul>{items}</ul>
              </div>
            </section>

            <section className="registry-body-right">
              <button className={this.togglePledgeButtonColor()} onClick={this.togglePledgeButton}>{this.pledgeText()}</button>
              <p className="pledge-count">{user.pledges.length} {this.pluralizePledge()}</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(UserRegistry);
