import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchMoviesStart } from '../redux/search/search.actions';

const SearchForm = () => {

	const [searchText, setSearchText] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setSearchText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchMoviesStart(searchText));
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

export default SearchForm;