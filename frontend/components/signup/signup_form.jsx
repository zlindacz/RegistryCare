import React from 'react';
import SignupBasic from './signup_basic_component';
import CloudinaryImage from './signup_cloudinary_component';
import SignupDescription from './signup_description_component';
import SignupCategory from './signup_category_component';
import SignupItems from './signup_items_component';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 }

    this.nextStep = this.nextStep.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length >= 1) {
      this.setState({step: 1});
    }
  }

  nextStep(step) {
    this.setState({step: this.state.step+1});
    this.props.clearErrors();
  }

  render() {
    let nextForm;
      if (this.state.step === 1) {
        return(<SignupBasic
                next={() => this.nextStep(this.state.step)}
                errors={this.props.errors}
                user={this.props.user}
                receiveInProgressUser={this.props.receiveInProgressUser} />);
      } else if (this.state.step === 2) {
        return(<CloudinaryImage
          user={this.props.user}
          next={() => this.nextStep(this.state.step)}
          receiveInProgressUser={this.props.receiveInProgressUser}/>);
      } else if (this.state.step === 3) {
        return(<SignupDescription
          user={this.props.user}
          next={() => this.nextStep(this.state.step)}
          receiveInProgressUser={this.props.receiveInProgressUser}/>);
      } else if (this.state.step === 4) {
        return(<SignupCategory
                user={this.props.user}
                next={() => this.nextStep(this.state.step)}
                receiveInProgressUser={this.props.receiveInProgressUser}/>);
      } else if (this.state.step === 5) {
        return(<SignupItems
                next={() => this.nextStep(this.state.step)}
                user={this.props.user}
                submit={this.props.signup}/>);
      }
  }

}

export default SignupForm;
