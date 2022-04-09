import React from 'react';

const FilmDetail = ({selectedFilm, handleFavourite}) => {
    
    

    return (
        <div>
            <h3>{selectedFilm.title}</h3>
            <p>{selectedFilm.original_title}</p>
            <p>{selectedFilm.director}</p>
            <p>{selectedFilm.release_date}</p>
            <p>{selectedFilm.description}</p>
            <img src={selectedFilm.movie_banner}/>
            <button class="favebutton" 
                onClick={() => {
                    handleFavourite(selectedFilm.id);
                    }}>
                    Add / Remove from Favourites
            </button>
        </div>
    )
}

export default FilmDetail; 