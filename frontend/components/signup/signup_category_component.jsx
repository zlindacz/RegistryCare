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
      <div className="show-form3">
        <h1 className="signup-title">Select Your Category</h1>
        <form onSubmit={this.handleClick} className="form3-container">
          <select onChange={this.addCategory} className="signup-select-box-container">
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

          <input type="submit" value="Next" className="signup-category-next-button" />
        </form>
      </div>
    )
  }

}

export default SignupCategory;
