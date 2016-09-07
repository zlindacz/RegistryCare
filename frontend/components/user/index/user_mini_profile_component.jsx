import React from 'react';
import { withRouter } from 'react-router';

class MiniProfile extends React.Component {

  render() {
    let user = this.props.user;
    let showAddress2;
    showAddress2 = (user.address2 === "" ? "no-show" : "mini-contact-info");

    let categories = user.categories.map(category => {
      return (<span className="mini-category" key={category.id}>{category.name}</span>);
    });

    let items = user.items.map(item => {
      return (<li className="mini-item" key={item.id}>{item.name}</li>);
    });

    return(
      <div className="mini-organization">
        <figure className="mini-photo">
          <img src={user.photo} />
        </figure>
        <div className="mini-words">
          <h3 className="mini-heading">{user.organization_name}</h3>
          <section className="mini-categories-tags">{categories}</section>
          <section className="mini-description">
            {user.description}
          </section>
          <h4 className="mini-subheading">Contact Info</h4>
          <section>
            <p className="mini-contact-info">{user.address1}</p>
            <p className={showAddress2}>{user.address2}</p>
            <p className="mini-contact-info">{user.city}, {user.state} {user.zipcode}</p>
          </section>
          <section className="mini-items-list">
            <ul>
              {items}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(MiniProfile);
