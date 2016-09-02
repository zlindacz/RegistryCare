import React from 'react';

class SignupCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ['AIDS', 'Animals', 'Arts & Culture', 'Breast Cancer',
                 'Bullying', 'Cancer', 'Childhood Obesity', 'Children & Youth',
                 'Civil Rights', 'Climate Change', 'Crime & Law', 'Cyber Security',
                 'Disabilities', 'Disaster Aid', 'Domestic Violence', 'Education',
                 'Environment', 'Food', 'Gun Control', 'Homeless & Housing',
                 'Human Trafficking', 'Immigration', 'LGBTQ', 'Literacy', 'Mental Health',
                 'Refugees', 'Religion', 'Reproductive Rights', 'Seniors', 'Veterans',
                 'Voting Rights', 'Water', 'Women']
    }
    this.addCategory = this.addCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addCategory() {
    return e => { this.setState({category: this.state.category.concat(e.currentTarget.value)}); };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveInProgressUser(this.state);
    this.props.next();
  }

  render(){
    return(
      <form onSubmit={this.handleClick} className="show-form2">
        {this.state.category.map((category) => {
          return(
            <div>
              <option value={category} onChange={this.addCategory(category)} className="signup-select-box">
                {category}
              </option>
            </div>
          );
        })};
      </form>
    )
  }

}

export default SignupCategory;
