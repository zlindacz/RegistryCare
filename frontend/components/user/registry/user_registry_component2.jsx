import React from 'react';
import { withRouter } from 'react-router';
import Map from './map_component';

class UserRegistry extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount(){
    this.props.requestSingleUser(this.props.params.userId);
  };

  render(){
    const user = this.props.user;
    if (!user) {return (<div>loading</div>);};

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

        <Map user={this.props.user}
             singleRegistry={true} />
      </div>
    );
  }
};

export default withRouter(UserRegistry);
