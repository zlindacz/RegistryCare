import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.props.router.push(`/index/?query=${ e.currentTarget.value }`)
    this.props.submitQuery(e.currentTarget.value);
  }

  render() {
    return(
      <div className="search-bar">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        <form className="search-form" >
          <input type="text" onChange={ this.handleChange } className="search-bar-input" placeholder="Search by organization name, item, or category" />

        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
