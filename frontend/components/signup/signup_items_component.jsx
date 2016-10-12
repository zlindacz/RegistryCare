import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class SignupItems extends React.Component {
  constructor(props) {
    super(props);
    this.allItems = {CLOTHES: [{name: 'Tops', id: 1},
                               {name: 'Bottoms', id: 2},
                               {name: 'Dresses', id: 3},
                               {name: 'Outerwear', id: 4},
                               {name: 'Sleepwear', id: 5},
                               {name: 'Swim', id: 6},
                               {name: 'Shoes', id: 7},
                               {name: 'Accessories', id: 8}],
                    HOUSEHOLD: [{name: 'Electrical', id: 9},
                                {name: 'Furniture', id: 10},
                                {name: 'Computer', id: 11},
                                {name: 'Kitchen', id: 12},
                                {name:  'Vehicle', id: 13},
                                {name: 'Toys', id: 14},
                                {name: 'Books', id: 15},
                                {name: 'Miscellaneous', id: 16}],
                    VOLUNTEER: [{name: 'Volunteer: No Preferences', id: 17},
                                {name: 'Volunteer: Events', id: 18},
                                {name: 'Volunteer: Mentor', id: 19},
                                {name: 'Volunteer: Tutor', id: 20}]
                              };
    this.state = {item_ids: []};

    this.updateItems = this.updateItems.bind(this);
    this.turnItemIntoCheckbox = this.turnItemIntoCheckbox.bind(this);
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateItems(item) {
    const itemTypes = Object.keys(this.allItems); //["CLOTHES", "HOUSEHOLD", "VOLUNTEER"]
    const itemsArray = this.allItems[itemTypes[0]].concat(
                       this.allItems[itemTypes[1]]).concat(
                       this.allItems[itemTypes[2]])
    return e => { this.setState({item_ids: this.state.item_ids.concat([item["id"]])}); };
  }

  turnItemIntoCheckbox(item) {
    let keys = Object.keys(this.allItems)
    let itemKey;
    let i=0;
    while (i < keys.length) {
      let key = keys[i];
      if (this.allItems[key].includes(item)){
        itemKey = key;
        break;
      }
      i++;
    }

    return(
      <div key={`cbox${item["id"]}`}
           className="signup-checkbox">
        <input type="checkbox"
               onChange={this.updateItems(item)}
               className={`${itemKey}`}
               id={`cbox${item["id"]}`}
               value={item["name"]}/>

        <label htmlFor={`cbox${item["id"]}`}
               className="signup-checkbox-label">
                <span className="item-label-text">{item["name"]}</span>
        </label>
      </div>
    );
  }

  makeCheckboxes() {
    let allBoxes = [];
    let scope = this;
    const itemType = Object.keys(this.allItems);
    itemType.forEach((type) => {
      this.allItems[type].map((item) => {
        allBoxes.push(scope.turnItemIntoCheckbox(item));
      })
    })
    return allBoxes;
  }

  submit(e){
    e.preventDefault();
    debugger
    let user = merge({}, this.state, this.props.user.inProgressUser);
    this.props.submit(user);
  }

  render(){
    const checkboxes = this.makeCheckboxes();
    return(
      <form onSubmit={this.submit} className="form-and-button">
        <div className="box">{checkboxes}</div>
        <input type="submit" value="Create Account" className="signup-button" />
      </form>
    );
  }

}

export default withRouter(SignupItems);
