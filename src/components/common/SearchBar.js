import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <i className="fas fa-search"></i>
      <input type="search" className="search-input" placeholder="i e apples..."></input>
    </div>
  )
}

export default SearchBar;
