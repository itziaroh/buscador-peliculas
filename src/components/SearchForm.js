import React, { Component } from 'react';

const API_KEY = '590a66a6';

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputMovie: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(response => response.json())
            .then(data => {
                const { Search = [] } = data
                this.props.onResults(Search)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons" >
                    <div className="control">
                        <input
                            className="input is-rounded"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Try with Pulp Fiction"
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
}

export default SearchForm;