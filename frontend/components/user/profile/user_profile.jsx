import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.categories = [ {name: 'AIDS', id: 1},
                        {name: 'Animals', id: 2},
                        {name: 'Arts & Culture', id: 3},
                        {name: 'Breast Cancer', id: 4},
                        {name: 'Bullying', id: 5},
                        {name: 'Cancer', id: 6},
                        {name: 'Childhood Obesity', id: 7},
                        {name: 'Children & Youth', id: 8},
                        {name: 'Civil Rights', id: 9},
                        {name: 'Climate Change', id: 10},
                        {name: 'Crime & Law', id: 11},
                        {name: 'Cyber Security', id: 12},
                        {name: 'Disabilities', id: 13},
                        {name: 'Disaster Aid', id: 14},
                        {name: 'Domestic Violence', id: 15},
                        {name: 'Education', id: 16},
                        {name: 'Environment', id: 17},
                        {name: 'Food', id: 18},
                        {name: 'Gun Control', id: 19},
                        {name: 'Homeless & Housing', id: 20},
                        {name: 'Human Trafficking', id: 21},
                        {name: 'Immigration', id: 22},
                        {name: 'LGBTQ', id: 23},
                        {name: 'Literacy', id: 24},
                        {name: 'Mental Health', id: 25},
                        {name: 'Refugees', id: 26},
                        {name: 'Religion', id: 27},
                        {name: 'Reproductive Rights', id: 28},
                        {name: 'Seniors', id: 29},
                        {name: 'Veterans', id: 30},
                        {name: 'Voting Rights', id: 31},
                        {name: 'Water', id: 32},
                        {name: 'Women', id: 33}];

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

    this.category_ids = this.props.currentUser.category.id;
    this.item_ids = this.props.currentUser.items.map(item => {
      return item.id;
    });
    this.state = merge({}, this.props.currentUser, {category_ids: this.category_ids}, {item_ids: this.item_ids});
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.selected = this.selected.bind(this);
    this.turnItemIntoCheckbox = this.turnItemIntoCheckbox.bind(this);
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(cloudinary_options, function(error, results) {
      if (!error){
        this.setState({photo: results[0].url});
      }
    }.bind(this));
  }

  changeCategory(e) {
    let categoryName = e.currentTarget.value;
    const matchedCategory = this.categories.find(category => {
      return category.name === categoryName;
    });
    this.setState({category_ids: matchedCategory.id});
  }

  selected() {
    const matchedCategory = this.categories.find(category => {
      return category.id === this.state.category_ids
    });
    return matchedCategory.name;
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

  submit(e) {
    e.preventDefault();
    let user = merge({}, this.props.currentUser, this.state);
    this.props.updateUser(user);
    this.props.router.push(`registry/${this.props.currentUser.id}`)
  }

  render() {
    return(
      <div>
        <form className="update-form" onSubmit={ this.submit }>
          <div className="update-container">
            <h1 className="profile-title">Profile Info</h1>
            <div className="border">
              <div className="profile-basic-info">
                <input type="text" value={this.state.organization_name} onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
                <input type="text" value={this.state.username} onChange={this.update("username")} className="signup-input-field" placeholder="Username" />
                <input type="text" value={this.state.email} onChange={this.update("email")} className="signup-input-field" placeholder="Email" />
                <input type="text" value={this.state.address1} onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />
                <input type="text" value={this.state.address2} onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />
                <input type="text" value={this.state.city} onChange={this.update("city")} className="signup-input-field" placeholder="City" />
                <input type="text" value={this.state.state} onChange={this.update("state")} className="signup-input-field" placeholder="State" />
                <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />
              </div>
            </div>

            <div className="profile-photo">
              <h2 className="profile-title">Your Photo</h2>
              <div className="border">
                <div className=""><img className="image" src={this.state.photo} alt="profile picture"/></div>
                <button onClick={this.upload} className="profile-photo-change-button">Change Photo</button>
              </div>
            </div>

            <div className="profile-mission">
              <h2 className="profile-title">Mission Statement</h2>
              <div className="border">
                <textarea
                className="signup-description-field"
                defaultValue={ this.state.description }
                placeholder="Description"
                onChange={this.update("description")}>
                </textarea>
              </div>
            </div>

            <div className="profile-category">
              <h2 className="profile-title">Category</h2>
              <div className="border">
                <select onChange={this.changeCategory}
                        className="profile-select-category-container"
                        value={this.selected()}>
                    {this.categories.map((category) => {
                    return(
                      <option value={category.name}
                              className="profile-select-box"
                              key={category.id}>
                        {category.name}
                      </option>
                    );
                  })};
                </select>
              </div>
            </div>

            <div className="profile-items">
              <h2 className="profile-title">Items Needed</h2>
              <div className="border">
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
              </div>
            </div>
          </div>

          <input type="submit" value="Update" className="update-button"/>
        </form>
      </div>
    )
  }

}

export default withRouter(UserProfile);
