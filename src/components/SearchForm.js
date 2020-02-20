import React, { Component } from 'react';

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
        console.log(this.state.inputMovie)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputMovie)
    }

    render() {
        return (
            <form>
                <div className="field has-addons" onSubmit={this.handleSubmit}>
                    <div className="control">
                        <input
                            className="input"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Título de la película"
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;