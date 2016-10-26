import React from 'react';
import { withRouter } from 'react-router';
import UserShow from './user_show_component';

class UserRegistry extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  };


  render(){
    const user = this.props.user;
    if (!user) {return(<div>Loading</div>);}

    return( <UserShow user={user}
            requestSingleUser={ this.props.requestSingleUser } /> );
  }
};

export default withRouter(UserRegistry);
