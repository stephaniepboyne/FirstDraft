import React from 'react';

const FilmDetail = ({selectedFilm, handleFavourite}) => {
    
    

    return (
        <div class="details">
            <h3>{selectedFilm.title}</h3>
            <p>{selectedFilm.original_title}</p>
            <button class="favebutton" 
                onClick={() => {
                    handleFavourite(selectedFilm.id);
                    }}>
                    ★
            </button>
            <p>Directed by {selectedFilm.director}</p>
            <p>Released in {selectedFilm.release_date}</p>
            <img src={selectedFilm.movie_banner} class="banner"/>
            <br></br>
            <br></br>
            <p class='description'>{selectedFilm.description}</p>
            
            
        </div>
    )
}

export default FilmDetail; 