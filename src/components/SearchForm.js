import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchMoviesStart } from '../redux/search/search.actions';

const SearchForm = ({ searchMoviesStart }) => {

	const [searchText, setSearchText] = useState('')

	const handleChange = (e) => {
		setSearchText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		searchMoviesStart(searchText);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="field has-addons" >
				<div className="control">
					<input
						className="input is-rounded"
						onChange={handleChange}
						type="text"
						placeholder="Try with Pulp Fiction"
						value={searchText}
					/>
				</div>
				<div className="control">
					<button className="button is-warning is-rounded">
						Search
          </button>
				</div>
			</div>
		</form>
	)
};

const mapDispatchToProps = dispatch => ({
	searchMoviesStart: searchText => dispatch(searchMoviesStart(searchText))
})

export default connect(null, mapDispatchToProps)(SearchForm);