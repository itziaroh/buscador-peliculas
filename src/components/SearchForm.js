import React, { useState } from 'react';

const API_KEY = '590a66a6';

const SearchForm = (props) => {

    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`)
            .then(response => response.json())
            .then(data => {
                const { Search = [] } = data
                props.onResults(Search)
            })
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
}

export default SearchForm;