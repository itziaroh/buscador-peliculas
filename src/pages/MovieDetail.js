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
        const { Title, Poster, Actors, Metascore, Plot, Genre, Runtime, Director } = this.state.movie
        return (
            <div>
                <ButtonBackHome />
                <h1 className="detail_title">{Title}</h1>
                <div className="detail_info">
                    <img src={Poster} alt={Title} />
                    <div className="detail_info-info">
                        <span className="detail_metascore"> <strong>Score:</strong> {Metascore}</span>
                        <p className="detail_plot"><strong>Director:</strong> {Director}</p>
                        <p className="detail_plot"><strong>Genre:</strong> {Genre}</p>
                        <p className="detail_plot"><strong>Runtime:</strong> {Runtime}</p>
                        <h3 className="detail_cast"><strong>Cast:</strong> {Actors}.</h3>
                        <p className="detail_plot"><strong>Plot:</strong> {Plot}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail;