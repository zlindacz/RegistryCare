import React from 'react';
import FileInput from 'react-file-input';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm1: "inherit",
      showForm2: "none",
      showForm3: "none",
      username: "",
      organization_name: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      photo: "",
      category: "",
      items: []
    }
    this.update = this.update.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.readURL = this.readURL.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  addItem() {
    return e => { this.setState({items: this.state.items.concat(e.currentTarget.value)}); };
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      // hashHistory.push("signup2");
      console.log("signed up");
    }
  }

  // readURL(input) {
  //   if (input.files && input.files[0]) {
  //     const reader = new FileReader();
  //
  //     reader.onload = function (e) {
  //       $('.upload-profile-img').attr('src', e.target.result);
  //     }
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }

  readURL() {
    return e => {console.log('Selected file:', e.target.files[0]); }
  }

  goToForm2(e) {
    e.preventDefault();
    return e => { this.setState({showForm1: "none", showForm2: "inherit"}); };
  }

  goToForm3(e) {
    e.preventDefault();
    return e => { this.setState({showForm2: "none", showForm3: "inherit"}); };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({showForm3: false});
    const user = this.state;
    this.props.signup({user});
  }

  render() {
    return (
      <div className="signup-form-container">
        <h1>Sign Up</h1>

        <form onSubmit={ this.goToForm2 } className="showForm1">
          <input type="text" onChange={this.update("organization_name")} className="signup-input-field" placeholder="Organization Name" />

          <input type="text" onChange={this.update("username")} className="signup-input-field" placeholder="Username" />

          <input type="text" onChange={this.update("email")} className="signup-input-field" placeholder="Email" />

          <input type="text" onChange={this.update("address1")} className="signup-input-field" placeholder="Address 1" />

          <input type="text" onChange={this.update("address2")} className="signup-input-field" placeholder="Address 2" />

          <input type="text" onChange={this.update("city")} className="signup-input-field" placeholder="City" />

          <input type="text" onChange={this.update("state")} className="signup-input-field" placeholder="State" />

          <input type="text" onChange={this.update("zipcode")} className="signup-input-field" placeholder="Zip Code" />

          <input type="submit" value="Next" />
        </form>


        <form onSubmit={ this.goToForm3 } className="showForm2">
          <h1>Sign Up</h1>
          <FileInput accept=".png,.gif,.jpeg" className="upload-profile-img" onChange={this.readURL()} placeholder="Profile Picture"/>
          <input type="submit" value="Next" />
        </form>

        <form onSubmit={ this.handleSubmit } className="showForm3">
          <textarea onChange={this.update("description")} className="signup-input-field" value="Description" />

          <select value="Select Category" className="signup-select">
            <option value="AIDS" onChange={this.update("category")} className="signup-select-box" className="signup-select-box">AIDS</option>
            <option value="Animals" onChange={this.update("category")} className="signup-select-box">Animals</option>
            <option value="Arts & Culture" onChange={this.update("category")} className="signup-select-box">Arts & Culture</option>
            <option value="Breast Cancer" onChange={this.update("category")} className="signup-select-box">Breast Cancer</option>
            <option value="Bullying" onChange={this.update("category")} className="signup-select-box">Bullying</option>
            <option value="Cancer" onChange={this.update("category")} className="signup-select-box">Cancer</option>
            <option value="Childhood Obesity" onChange={this.update("category")} className="signup-select-box">Childhood Obesity</option>
            <option value="Children & Youth" onChange={this.update("category")} className="signup-select-box">Children & Youth</option>
            <option value="Civil Rights" onChange={this.update("category")} className="signup-select-box">Civil Rights</option>
            <option value="Climate Change" onChange={this.update("category")} className="signup-select-box">Climate Change</option>
            <option value="Crime & Law" onChange={this.update("category")} className="signup-select-box">Crime & Law</option>
            <option value="Cyber Security" onChange={this.update("category")} className="signup-select-box">Cyber Security</option>
            <option value="Disabilities" onChange={this.update("category")} className="signup-select-box">Disabilities</option>
            <option value="Disaster Aid" onChange={this.update("category")} className="signup-select-box">Disaster Aid</option>
            <option value="Domestic Violence" onChange={this.update("category")} className="signup-select-box">Domestic Violence</option>
            <option value="Education" onChange={this.update("category")} className="signup-select-box">Education</option>
            <option value="Environment" onChange={this.update("category")} className="signup-select-box">Environment</option>
            <option value="Food" onChange={this.update("category")} className="signup-select-box">Food</option>
            <option value="Gun Control" onChange={this.update("category")} className="signup-select-box">Gun Control</option>
            <option value="Homeless & Housing" onChange={this.update("category")} className="signup-select-box">Homeless & Housing</option>
            <option value="Human Trafficking" onChange={this.update("category")} className="signup-select-box">Human Trafficking</option>
            <option value="Immigration" onChange={this.update("category")} className="signup-select-box">Immigration</option>
            <option value="LGBTQ" onChange={this.update("category")} className="signup-select-box">LGBTQ</option>
            <option value="Literacy" onChange={this.update("category")} className="signup-select-box">Literacy</option>
            <option value="Mental Health" onChange={this.update("category")} className="signup-select-box">Mental Health</option>
            <option value="Refugees" onChange={this.update("category")} className="signup-select-box">Refugees</option>
            <option value="Religion" onChange={this.update("category")} className="signup-select-box">Religion</option>
            <option value="Reproductive Rights" onChange={this.update("category")} className="signup-select-box">Reproductive Rights</option>
            <option value="Seniors" onChange={this.update("category")} className="signup-select-box">Seniors</option>
            <option value="Veterans" onChange={this.update("category")} className="signup-select-box">Veterans</option>
            <option value="Voting Rights" onChange={this.update("category")} className="signup-select-box">Voting Rights</option>
            <option value="Water" onChange={this.update("category")} className="signup-select-box">Water</option>
            <option value="Women" onChange={this.update("category")} className="signup-select-box">Women</option>
          </select>
          <button onClick={this.update("category")}>Create New Category</button>

          <section className="checkboxes">
            <div>
              <h1 className="checkbox-title">CLOTHES</h1>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Tops"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Bottoms"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Dresses"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Outerwear"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Sleepwear"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Swim"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Shoes"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Accessories"/>
            </div>

            <div>
              <h1 className="checkbox-title">HOUSEHOLD</h1>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Electrical"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Furniture"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Computer"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Kitchen"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Vehicle"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Toys"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Books"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Miscellaneous"/>
            </div>

            <div>
              <h1 className="checkbox-title">VOLUNTEER</h1>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="No Preference"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Events"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Mentor"/>
              <input type="checkbox" onChange={this.addItem()} className="signup-checkbox" value="Tutor"/>
            </div>
          </section>

          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default SignupForm;
