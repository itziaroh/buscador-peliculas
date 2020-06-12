import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonBackHome from '../components/ButtonBackHome';
import { searchByIdStart } from '../redux/search/search.actions';
import { selectSingleMovie } from '../redux/search/search.selectors';

const MovieDetail = ({ match }) => {

	const dispatch = useDispatch();
	const movieResult = useSelector(selectSingleMovie);

	useEffect(() => {
		const movieId = match.params.id;
		dispatch(searchByIdStart(movieId));
	}, []);

	const { Title, Poster, Actors, Metascore, Plot, Genre, Runtime, Director } = movieResult;
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

export default MovieDetail;