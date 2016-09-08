import React from 'react';
import { withRouter } from 'react-router';

class MiniProfile extends React.Component {
  constructor(props) {
    super(props);

    this.navigateToRegistry = this.navigateToRegistry.bind(this);
  }

  navigateToRegistry() {
    this.props.router.push(`registry/${this.props.user.id}`)
  }

  render() {
    let user = this.props.user;

    let categories = user.categories.map(category => {
      return (<span className="mini-category" key={category.id}>{category.name}</span>);
    });

    let items = user.items.map(item => {
      return (<li className="mini-item" key={item.id}>{item.name}</li>);
    });

    return(
      <div className="mini-organization" user={user} onClick={this.navigateToRegistry}>
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

            <section className="mini-items-list">
              <h4 className="mini-subheading">Items</h4>
              <ul className="items-box">
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
 // <section className="contact-block">
  // <h4 className="mini-subheading">Contact</h4>
  // <p className="mini-contact-info">{user.address1}</p>
  // <p className={showAddress2}>{user.address2}</p>
  // <p className="mini-contact-info">{user.city}, {user.state} {user.zipcode}</p>
// </section>
