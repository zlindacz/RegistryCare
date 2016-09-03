import React from 'react';

class SignupCategory extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ['AIDS', 'Animals', 'Arts & Culture', 'Breast Cancer',
               'Bullying', 'Cancer', 'Childhood Obesity', 'Children & Youth',
               'Civil Rights', 'Climate Change', 'Crime & Law', 'Cyber Security',
               'Disabilities', 'Disaster Aid', 'Domestic Violence', 'Education',
               'Environment', 'Food', 'Gun Control', 'Homeless & Housing',
               'Human Trafficking', 'Immigration', 'LGBTQ', 'Literacy', 'Mental Health',
               'Refugees', 'Religion', 'Reproductive Rights', 'Seniors', 'Veterans',
               'Voting Rights', 'Water', 'Women']
    this.state = {category: "AIDS"}

    this.addCategory = this.addCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addCategory(e) {
    this.setState({category: e.currentTarget.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveInProgressUser(this.state);
    this.props.next();
  }

  render(){
    return(
      <form onSubmit={this.handleClick} className="show-form2">
        <h1>Select {this.props.organization_name}'s Category</h1>
        <select onChange={this.addCategory}>
          {this.categories.map((category) => {
            return(
              <option value={category}
                      className="signup-select-box"
                      key={category}>
                {category}
              </option>
            );
          })};
        </select>

        <input type="submit" value="Next"/>
      </form>
    )
  }

}

export default SignupCategory;
