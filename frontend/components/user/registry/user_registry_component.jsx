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
      return (<p className="paragraph" key={category.id}>{category.name}</p>);
    });

    let items = user.items.map(item => {
      return (<li className="paragraph-end" key={item.id}>{item.name}</li>);
    });

    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "contact-info");
    return(
      <div className="registry-parent">
        <h1 className="registry-tagline">{user.organization_name}</h1>

        <div className="registry-show">
          <img className="logo-photo" src={user.photo} />

          <div className="registry-block">
            <h3 className="registry-subtitle">Category:</h3>
            <div className="category-text">{categories}</div>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Contact:</h3>
            <div className="address-block">
              <p className="paragraph-end">{user.address1}</p>
              <p className={showAddress2}>{user.address2}</p>
              <p className="paragraph-end">{user.city}, {user.state} {user.zipcode}</p>
            </div>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Description:</h3>
            <p className="paragraph-end">{user.description}</p>
          </div>

          <div className="registry-block">
            <h3 className="registry-subtitle">Items needed:</h3>
            <ul className="address-block">{items}</ul>
          </div>
        </div>
      </div>
      // <div className="registry-parent">
      //   <h1 className="registry-tagline">{user.organization_name}</h1>
      //
      //   <div className="registry-show">
      //     <img className="logo-photo" src={user.photo} />
      //
      //     <div className="registry-left-right">
      //       <div className="registry-body-top">
      //         <div className="label-and-text">
      //           <h3 className="registry-subtitle">Category:</h3>
      //           <div className="category-text">{categories}</div>
      //         </div>
      //
      //         <div className="registry-contact">
      //           <h3 className="registry-subtitle">Contact:</h3>
      //           <p className="paragraph">{user.address1}</p>
      //           <p className={showAddress2}>{user.address2}</p>
      //           <p className="paragraph">{user.city}, {user.state} {user.zipcode}</p>
      //         </div>
      //
      //       </div>
      //
      //     </div>
      //
      //     <div className="registry-top-bottom">
      //       <section className="registry-body-bottom">
      //         <div className="registry-description">
      //           <h3 className="registry-subtitle">Description:</h3>
      //           <p className="paragraph">{user.description}</p>
      //         </div>
      //
      //         <div className="items-needed">
      //           <h3 className="registry-subtitle">Items needed:</h3>
      //           <ul>{items}</ul>
      //         </div>
      //       </section>
      //     </div>
      //   </div>
      // </div>


      // <div className="registry-show">
      //   <h1 className="registry-tagline">{user.organization_name}</h1>
      //
      //   <div className="registry-flex-parent">
      //     <img className="logo-photo" src={user.photo} />
      //
      //     <div className="registry-body">
      //       <section className="registry-body-top">
      //         <div>
      //           <h3 className="registry-subtitle">Category:</h3>
      //           <p className="paragraph">{categories}</p>
      //         </div>
      //
      //         <div className="registry-contact">
      //           <h3 className="registry-subtitle">Contact:</h3>
      //           <p className="paragraph">{user.address1}</p>
      //           <p className={showAddress2}>{user.address2}</p>
      //           <p className="paragraph">{user.city}, {user.state} {user.zipcode}</p>
      //         </div>
      //       </section>
      //
      //       <section className="registry-body-bottom">
      //         <div className="registry-description">
      //           <h3 className="registry-subtitle">Description:</h3>
      //           <p className="paragraph">{user.description}</p>
      //         </div>
      //
      //         <div className="items-needed">
      //           <h3 className="registry-subtitle">Items needed:</h3>
      //           <ul>{items}</ul>
      //         </div>
      //       </section>
      //     </div>
      //   </div>
      // </div>
    );
  }
};

export default withRouter(UserRegistry);
