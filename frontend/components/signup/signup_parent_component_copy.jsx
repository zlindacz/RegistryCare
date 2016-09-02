import React from 'react';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }

    this.update = this.update.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.submitCategoryForm = this.submitCategoryForm.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  addCategory() {
    return e => { this.setState({category: this.state.category.concat(e.currentTarget.value)}); };
  }

  updateItems(itemType) {
    return e => { this.setState({items: this.state.items.itemType.concat(e.currentTarget.value)}); };
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      // hashHistory.push("signup2");
      console.log("signed up");
    }
  }

  goToForm2(e) {
    e.preventDefault();
    return e => { this.setState({showForm1: "none", showForm2: "inherit"}); };
  }

  goToForm3(e) {
    e.preventDefault();
    return e => { this.setState({showForm2: "none", showForm3: "inherit"}); };
  }

  submitCategoryForm(e) {
    e.preventDefault();
    return e => { this.addCategory(e.currentTarget.value) };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({showForm3: false});
    const user = this.state;
    this.props.signup({user});
  }

  renderCategories() {
    this.state.category.map((category) => {
      return(
        <div>
          <option value={category} onChange={this.addCategory(category)} className="signup-select-box">
            {category}
          </option>
        </div>
      );
    });
  }

  // renderItems() {
  //   debugger
  //   const itemType = Object.keys(this.state.items);
  //
  //   const categorizedItems = itemType.map((type) => {
  //     return(
  //       <div>
  //         <h1 className="checkbox-title">{type}</h1>
  //         {this.state.items[type].map((item) => {
  //           const idNumber = this.state.items.values.indexOf(item);
  //           return(
  //             <div>
  //               <input type="checkbox" onChange={this.updateItems(type)} className="signup-checkbox" id={`cbox${idNumber}`} value={item} />
  //               <label for={`cbox${idNumber}`}>{item}</label>
  //             </div>
  //           )
  //         })
  //       }
  //       </div>
  //     );
  //   })
  //   return(
  //     {categorizedItems}
  //   );
  // }

  makeCheckboxes(type) {
    const itemType = Object.keys(this.state.items);
    const itemsArray = this.state.items[itemType[0]].concat(
                       this.state.items[itemType[1]].concat(
                       this.state.items[itemType[2]]
                     )
    )
    return this.state.items[type].map((item) => {
      const idNumber = itemsArray.indexOf(item);
      return(
        <div>
          <input type="checkbox" onChange={this.updateItems(type)} className="signup-checkbox" id={`cbox${idNumber}`} value={item} />
          <label for={`cbox${idNumber}`}>{item}</label>
        </div>
      )
    })
  }

  renderItems() {
    const itemType = Object.keys(this.state.items);

    const allItems = itemType.map((type) => {
      return(
        <div>
          <h1 className="checkbox-title">{type}</h1>
          {this.makeCheckboxes.bind(this, type)()}
        </div>
      );
    })

    return(
      {allItems}
    );
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
          <FileInput accept=".png,.gif,.jpeg" className="upload-profile-img" onChange={this.uploadImg()} placeholder="Profile Picture" />
        </form>

        <form onSubmit={ this.handleSubmit } className="showForm3">
          <h1>Sign Up</h1>
          <textarea onChange={this.update("description")} className="signup-input-field" value="Description" />

          <select value="Select Category" className="signup-select">
            {this.renderCategories()}
          </select>

          <form onSubmit={ this.submitCategoryForm } className="add-category">
            <input type="text" className="signup-input-field" placeholder="Category Name" />
            <input type="submit" value="Create New Category" />
          </form>

          <section className="checkboxes">
            {this.renderItems()}
            {/* <div>
              <h1 className="checkbox-title">CLOTHES</h1>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox1" value="Tops"/>
              <label for="cbox1">Tops</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox2" value="Bottoms"/>
              <label for="cbox2">Bottoms</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox3" value="Dresses"/>
              <label for="cbox3">Dresses</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox4" value="Outerwear"/>
              <label for="cbox4">Outerwear</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox5" value="Sleepwear"/>
              <label for="cbox5">Sleepwear</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox6" value="Swim"/>
              <label for="cbox6">Swim</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox7" value="Shoes"/>
              <label for="cbox7">Shoes</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox8" value="Accessories"/>
              <label for="cbox8">Accessories</label>
            </div>

            <div>
              <h1 className="checkbox-title">HOUSEHOLD</h1>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox9" value="Electrical"/>
              <label for="cbox9">Electrical</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox10" value="Furniture"/>
              <label for="cbox10">Furniture</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox11" value="Computer"/>
              <label for="cbox11">Computer</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox12" value="Kitchen"/>
              <label for="cbox12">Kitchen</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox13" value="Vehicle"/>
              <label for="cbox13">Vehicle</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox14" value="Toys"/>
              <label for="cbox14">Toys</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox15" value="Books"/>
              <label for="cbox15">Books</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox16" value="Miscellaneous"/>
              <label for="cbox16">Miscellaneous</label>
            </div>

            <div>
              <h1 className="checkbox-title">VOLUNTEER</h1>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox17" value="No Preference"/>
              <label for="cbox17">No Preference</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox18" value="Events"/>
              <label for="cbox18">Events</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox19" value="Mentor"/>
              <label for="cbox19">Mentor</label>
              <input type="checkbox" onChange={this.updateItems()} className="signup-checkbox" id="cbox20" value="Tutor"/>
              <label for="cbox20">Tutor</label>
            </div> */}
          </section>

          <input type="submit" value="Create Account" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
