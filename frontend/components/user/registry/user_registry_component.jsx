import React from 'react';
import { withRouter } from 'react-router';
import Map from './map_component';

class UserRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  };


  render(){
    const photoUrl = this.props.user.photo
    const myRegex = /(^.*upload\/)(.*?$)/g;
    var matched = myRegex.exec(photoUrl);
    var firstMatch = matched[1];
    var lastMatch = matched[2];
    var quality250w = "f_auto,q_72,w_250/";
    var quality600w = "f_auto,q_72,w_600/";
    var quality1500w = "f_auto,q_72,w_1500/";

    const user = this.props.user;
    if (!user) {return(<div>Loading</div>);}

    let items = user.items.map(item => {
      return (<li className="item-list" key={item.id}>{item.item_type}:  {item.name}</li>);
    });

    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "contact-info");
    return(
      <div className="registry-parent">
        <h1 className="registry-tagline">{user.organization_name}</h1>

        <div className="registry-show">
          <img className="logo-photo"
               src={firstMatch + quality1500w + lastMatch}
               srcSet={firstMatch + quality250w + lastMatch + ' 250w',
                       firstMatch + quality600w + lastMatch + ' 600w'}
               alt="profile picture"
               sizes="(max-width: 250px) 90vw, 40vw" />

          <div className="registry-block">
            <h3 className="registry-subtitle">Category:</h3>
            <div className="category-text">
              <p className="paragraph" key={user.category.id}>{user.category.name}</p>
            </div>
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

        <Map user={user}
             requestSingleUser={this.props.requestSingleUser} />
      </div>
    );
  }
};

export default withRouter(UserRegistry);
