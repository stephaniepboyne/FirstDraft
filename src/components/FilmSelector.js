import React from 'react';

const FilmSelector = ({films, onFilmSelected}) => {

    const handleChange = function (event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm)
    }

    const options = films.map((film, index) => {
        return <option value={index} key={index}>{film.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange} class='selector'>
            <option value="" selected>Select a film</option>
            {options}
        </select>
    )

}

export default FilmSelector