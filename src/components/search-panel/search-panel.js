import React, { Component } from 'react';

export default class SearchPanel extends Component {

  search = (event) => {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <input 
        type="text" 
        className="form-control search-input" 
        placeholder="Type to search"
        onChange={this.search}
      />
    )
  }
};
