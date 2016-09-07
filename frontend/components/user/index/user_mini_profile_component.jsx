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
        <figure className="mini-photo-container">
          <img className="mini-photo" src={user.photo} />
        </figure>

        <div className="mini-words">
          <h3 className="mini-heading">{user.organization_name}</h3>

          <div className="mini-category-block">
            <h4 className="mini-subheading">Category</h4>
            <section className="mini-categories-tags">{categories}</section>
          </div>

          <div className="mini-contact-items">
            <section className="contact-block">
              <h4 className="mini-subheading">Contact Info</h4>
              <p className="mini-contact-info">{user.address1}</p>
              <p className={showAddress2}>{user.address2}</p>
              <p className="mini-contact-info">{user.city}, {user.state} {user.zipcode}</p>
            </section>

            <section className="mini-items-list">
              <h4 className="mini-subheading">Items</h4>
              <ul>
                {items}
              </ul>
            </section>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(MiniProfile);
//
// <section className="mini-description">
//   {user.description}
// </section>
