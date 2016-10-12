import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

// class UserProfile extends React.Component {
//   constructor({currentUser, errors, updateUser}) {
//     super({currentUser, errors, updateUser});
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.currentUser);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    this.addCategory = this.addCategory.bind(this);

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
                        {name: 'Women', id: 33}]
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

  render() {
    return(
      <div>
        <h1>Profile</h1>
        <form>
          <div>
            <h2>Your Info</h2>
            <input type="text" value={this.state.organization_name} onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />
            <input type="text" value={this.state.username} onChange={this.update("username")} className="signup-input-field" placeholder="Username" />
            <input type="text" value={this.state.email} onChange={this.update("email")} className="signup-input-field" placeholder="Email" />
            <input type="text" value={this.state.address1} onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />
            <input type="text" value={this.state.address2} onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />
            <input type="text" value={this.state.city} onChange={this.update("city")} className="signup-input-field" placeholder="City" />
            <input type="text" value={this.state.state} onChange={this.update("state")} className="signup-input-field" placeholder="State" />
            <input type="text" value={this.state.zipcode} onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />
          </div>
          <div>
            <h2>Your Photo</h2>
              <div className=""><img className="image" src={this.state.image} /></div>
              <button onClick={this.upload} className="">Change Photo</button>
          </div>
          <div>
            <h2>Mission Statement</h2>
            <textarea
            className="signup-description-field"
            placeholder="Description"
            onChange={this.update("description")}>
            </textarea>
          </div>
          <div>
            <select onChange={this.addCategory}
                    className="signup-select-category-container"
                    value={ this.state.categories[0] }>
                {this.categories.map((category) => {
                return(
                  <option value={category}
                          className="signup-select-box"
                          key={category.id}>
                    {category.name}
                  </option>
                );
              })};
            </select>
          </div>

          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }

}

export default UserProfile;
