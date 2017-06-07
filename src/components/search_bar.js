import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
}


	render () { //method in SearchBar class, when you render Searchbar, it will call this render method. (in which you have jsx)
		return (
			<div className="search-bar">
				Search <input 
				value= {this.state.term}
				onChange={ e => this.onInputChange(e.target.value)} /> 
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
} 

export default SearchBar;