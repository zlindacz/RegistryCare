import React from 'react';

class SignupCategory extends React.Component {
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
                        {name: 'Women', id: 33}]

    this.state = {category_ids: []}

    this.addCategory = this.addCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addCategory(e) {
    const matchedItem = this.categories.find(item => {
      return item.name === e.currentTarget.value
    });
    this.setState({category_ids: [matchedItem.id]});
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.category_ids.length === 0) {
      this.props.receiveInProgressUser(this.props.user.inProgressUser)
    } else {
      this.props.receiveInProgressUser(this.state);
    }
    this.props.next();
  }

  render(){
    const savedItem = this.categories.find(item => {
      if (this.props.user.inProgressUser.category_ids) {
        return (item.id === this.props.user.inProgressUser.category_ids[0])
      } else {
        return this.categories[0]
      }
    });

    return(
      <form onSubmit={this.handleClick} className="form-and-button">
        <select onChange={this.addCategory}
                className="signup-select-category-container"
                defaultValue={savedItem.name}>
            {this.categories.map((category) => {
            return(
              <option value={category.name}
                      className="signup-select-box"
                      key={category.id}>
                {category.name}
              </option>
            );
          })};
        </select>

        <input type="submit" value="Next" className="signup-next-button" />
      </form>
    )
  }

}

export default SignupCategory;
