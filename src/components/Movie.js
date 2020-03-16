import React from 'react';
import { Link } from 'react-router-dom';

const Movie = props => {

    const handleFavs = e => {
        props.handleFavs(e.target)
    }

    const { id, poster, title, year } = props

    return (
        <div className="card">
            <div className="card-image">
                <figure>
                    <img
                        src={poster}
                        alt={title}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                    </div>
                    <div className="media-buttons">
                        <button onClick={handleFavs} className="button  is-warning is-focused">Add to Favs</button>
                        <Link to={`detail/${id}`}>
                            <button className="button  is-warning is-focused">View detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;
