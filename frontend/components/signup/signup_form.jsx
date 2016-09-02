import React from 'react';
import SignupBasic from './signup_basic_component';
import SignupCategory from './signup_category_component';
import SignupItems from './signup_items_component';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value}); };
  }

  nextStep(step) {
    this.setState({step: this.state.step+1});
  }

  render() {
    let nextForm;
      if (this.state.step === 1) {
        return(<SignupBasic
                next={() => this.nextStep(this.state.step)}
                receiveInProgressUser={this.props.receiveInProgressUser}
                update={this.update}/>);
      } else if (this.state.step === 2) {
        return(<SignupCategory
                next={() => this.nextStep(this.state.step)}
                receiveInProgressUser={this.props.receiveInProgressUser}/>);
      } else if (this.state.step === 3) {
        return(<SignupItems
                next={() => this.nextStep(this.state.step)}
                submit={this.props.signup}/>);
      }
  }

}

export default SignupForm;
