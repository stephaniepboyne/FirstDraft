import React from 'react';

const Film = ({film, index, onFilmClick, addToFaves}) => {

    const handleFaveClick = function() {
        onFilmClick(film);
    }

    return <div>
        <h3 onClick={handleFaveClick}>{film.title}</h3>
        <button onClick={handleFaveClick} value={index}>Add to favourites</button>
    </div>
    

}

export default Film;