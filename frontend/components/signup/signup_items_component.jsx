import React from 'react';

class SignupItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {CLOTHES: [{name: 'Tops', id: 1},
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
              VOLUNTEER: [{name: 'No Preferences', id: 17},
                          {name: 'Events', id: 18},
                          {name: 'Mentor', id: 19},
                          {name: 'Tutor', id: 20}]
      }
    }
    this.updateItems = this.updateItems.bind(this);
    this.makeCheckboxes = this.makeCheckboxes.bind(this);
  }

  updateItems(itemType) {
    return e => { this.setState({items: this.state.items.itemType.concat(e.currentTarget.value)}); };
  }

  makeCheckboxes() {
    const itemType = Object.keys(this.state.items);
    const itemsArray = this.state.items[itemType[0]].concat(
                       this.state.items[itemType[1]].concat(
                       this.state.items[itemType[2]]
                     )
    )

    const allBoxes = [];

    itemType.forEach((type ) => {
      allBoxes.push(
        this.state.items[type].map((item) => {
          return(
            <div>
              <input type="checkbox"
                     onChange={this.updateItems(item[name])}
                     className="signup-checkbox"
                     id={`cbox${item[id]}`}
                     value={item[name]} />
              <label for={`cbox${item[id]}`}>{item[name]}</label>
            </div>
          );
        })
      );
    })
    return allBoxes;
  }

  render(){
    return(
      <form onSubmit={this.props.submit} className="show-form3">
        <div>{this.makeCheckboxes()}</div>
      </form>
    );
  }

}

export default SignupItems;
