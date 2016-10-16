import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

// class UserProfile extends React.Component {
//   constructor({currentUser, errors, updateUser}) {
//     super({currentUser, errors, updateUser});
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

  this.items = {CLOTHES: [{name: 'Tops', id: 1},
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

    this.state = merge({}, this.props.currentUser);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.submit = this.submit.bind(this);

  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results) {
      if (!error){
        this.setState({image: results[0].url});
      }

    }.bind(this));
  }

  addCategory(e) {
    debugger
    this.setState({category_ids: [e.currentTarget.value.id]});
  }

  submit(e) {
    e.preventDefault();
    let user = merge({}, this.state, this.props.currentUser);
    this.props.updateUser(user);
  }

  render() {
    const selectedValue = this.state.categories[0].name;
    return(
      <div>
        <h1 className="profile-title">Profile</h1>
        <form onSubmit={ this.submit }>
          <div className="profile-basic-info">
            <h2 className="profile-subtitle">Your Info</h2>
            <input type="text" value={this.state.organization_name} onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
            <input type="text" value={this.state.username} onChange={this.update("username")} className="signup-input-field" placeholder="Username" />
            <input type="text" value={this.state.email} onChange={this.update("email")} className="signup-input-field" placeholder="Email" />
            <input type="text" value={this.state.address1} onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />
            <input type="text" value={this.state.address2} onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />
            <input type="text" value={this.state.city} onChange={this.update("city")} className="signup-input-field" placeholder="City" />
            <input type="text" value={this.state.state} onChange={this.update("state")} className="signup-input-field" placeholder="State" />
            <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />
          </div>
          <div className="profile-photo">
            <h2 className="profile-subtitle">Your Photo</h2>
              <div className=""><img className="image" src={this.state.photo} /></div>
              <button onClick={this.upload} className="profile-photo-change-button">Change Photo</button>
          </div>
          <div className="profile-mission">
            <h2 className="profile-subtitle">Mission Statement</h2>
            <textarea
            className="profile-description-field"
            defaultValue={ this.state.description }
            placeholder="Description"
            onChange={this.update("description")}>
            </textarea>
          </div>
          <div className="profile-category">
            <h2 className="profile-subtitle">Category</h2>
            <select onChange={this.addCategory}
                    className="profile-select-category-container"
                    value={selectedValue}>
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
          <div className="profile-items">
            <h2 className="profile-subtitle">Items Needed</h2>

          </div>

          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }

}

export default UserProfile;
