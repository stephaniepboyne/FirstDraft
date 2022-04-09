import React from 'react';

const FilmDetail = ({selectedFilm}) => {
    return (
        <div>
            <h3>{selectedFilm.title}</h3>
            <p>{selectedFilm.original_title}</p>
            <p>{selectedFilm.director}</p>
            <p>{selectedFilm.release_date}</p>
            <p>{selectedFilm.description}</p>
            <img src={selectedFilm.movie_banner}/>
        </div>
    )
}

export default FilmDetail; 