import React from 'react';

const Favs = props => {
  const { favs } = props
  return (
    <div className="favs_list">
      LISTA DE FAVORITOS
      {/* {favs.map(fav => {
        return (
          <div className="favs_list-item" key={fav.imdbID}>
            <Movie
              title={fav.Title}
              year={fav.Year}
              poster={fav.Poster}
              id={fav.imdbID}
            />
          </div>
        )
      })} */}
    </div >
  )
}

export default Favs;