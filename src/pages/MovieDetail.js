import React from 'react';
import ButtonBackHome from '../components/ButtonBackHome';

const API_KEY = '590a66a6';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
        this.fetchMovie = this.fetchMovie.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(movie => {
                console.log(movie)
                this.setState({ movie })
            })
    }

    goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <ButtonBackHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}

export default MovieDetail;