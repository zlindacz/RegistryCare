import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class SignupItems extends React.Component {
  constructor(props) {
    super(props);
    this.items = [{name: 'Tops', id: 1, category: 'clothes'},
                  {name: 'Bottoms', id: 2, category: 'clothes'},
                  {name: 'Dresses', id: 3, category: 'clothes'},
                  {name: 'Outerwear', id: 4, category: 'clothes'},
                  {name: 'Sleepwear', id: 5, category: 'clothes'},
                  {name: 'Swim', id: 6, category: 'clothes'},
                  {name: 'Shoes', id: 7, category: 'clothes'},
                  {name: 'Accessories', id: 8, category: 'clothes'},
                  {name: 'Electrical', id: 9, category: 'household'},
                  {name: 'Furniture', id: 10, category: 'household'},
                  {name: 'Computer', id: 11, category: 'household'},
                  {name: 'Kitchen', id: 12, category: 'household'},
                  {name: 'Vehicle', id: 13, category: 'household'},
                  {name: 'Toys', id: 14, category: 'household'},
                  {name: 'Books', id: 15, category: 'household'},
                  {name: 'Miscellaneous', id: 16, category: 'household'},
                  {name: 'Volunteer: No Preferences', id: 17, category: 'volunteer'},
                  {name: 'Volunteer: Events', id: 18, category: 'volunteer'},
                  {name: 'Volunteer: Mentor', id: 19, category: 'volunteer'},
                  {name: 'Volunteer: Tutor', id: 20, category: 'volunteer'}];

    this.state = {item_ids: this.props.user.inProgressUser.item_ids || []};

    this.updateItems = this.updateItems.bind(this);
    this.turnItemIntoCheckbox = this.turnItemIntoCheckbox.bind(this);
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateItems(item) {
    if (this.state.item_ids.includes(item.id)) {
      const itemIdx = this.state.item_ids.indexOf(item.id);
      let itemIdsDup = this.state.item_ids;
      itemIdsDup.splice(itemIdx, 1);
      this.setState({item_ids: itemIdsDup});
    } else {
      this.setState({item_ids: this.state.item_ids.concat([item.id])});
    }
  }

  turnItemIntoCheckbox(item) {
    return(
      <div className="signup-checkbox"
           key={item.id}>
        <input type="checkbox"
               className="checkbox"
               onChange={() => this.updateItems(item)}
               id={item.name}
               value={item.name}
               checked={(this.state.item_ids.includes(item.id)) ? item.name : ""}
               />

        <label htmlFor={item.name}
               className="signup-checkbox-label">
                <span className="item-label-text">{item.name}</span>
        </label>
      </div>
    );
  }

  makeCheckboxes(category) {
    let allBoxes = [];
    let scope = this;
    this.items.map(item => {
      if (item.category === category) {
        allBoxes.push(scope.turnItemIntoCheckbox(item));
      }
    });
    return allBoxes;
  }

  submit(e){
    e.preventDefault();
    if (this.state.item_ids.length === 0) {
      this.props.receiveInProgressUser(this.props.user.inProgressUser)
    } else {
      this.props.receiveInProgressUser(this.state);
    }
    let user = merge({}, this.state, this.props.user.inProgressUser);
    this.props.submit(user);
  }

  render(){
    return(
      <form onSubmit={this.submit} className="items-form-and-button">
        <div className="boxes-container">
          <div className="checkbox-category-container">
            <h3 className="checkbox-category-title">CLOTHES</h3>
            <div className="box">{this.makeCheckboxes('clothes')}</div>
          </div>
          <div className="checkbox-category-container">
            <h3 className="checkbox-category-title">HOUSEHOLD</h3>
            <div className="box">{this.makeCheckboxes('household')}</div>
          </div>
          <div className="checkbox-category-container">
            <h3 className="checkbox-category-title">VOLUNTEER</h3>
            <div className="box-volunteer">{this.makeCheckboxes('volunteer')}</div>
          </div>
        </div>
        <input type="submit" value="Create Account" className="signup-button" />
      </form>
    );
  }
}

export default withRouter(SignupItems);
