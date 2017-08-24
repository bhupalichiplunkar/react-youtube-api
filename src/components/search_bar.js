import React , { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { searchTerm : ''}
  }

  onTermChange(term){
    this.setState({searchTerm : term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className="search-bar">
        <input
         value = {this.state.searchTerm}
         onChange={e => this.onTermChange(e.target.value) } />
      </div>
    );
  }
}

export default SearchBar;
