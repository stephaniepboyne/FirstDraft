import React, { useState, useEffect } from 'react';
import FilmDetail from '../components/FilmDetail';
import FilmSelector from '../components/FilmSelector';


const FilmContainer = () => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [favourites, setFavourites] = useState([])
    useEffect(() => {
        getFilms();
    }, [])

    useEffect(() => {
        setFavourites(films)
    }, [films])

    

    

    const getFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(films => setFilms(films))
    }

    const onFilmSelected = function(film) {
        setSelectedFilm(film)
    }

    function handleFavourite(id) {
        const newFavourite = favourites.map(movie => {
            return movie.id === id ? {...movie, favourite: !movie.favourite} : movie;
        });

        setFavourites(newFavourite)
    }

        return (
            <div>
                <FilmSelector films={films} onFilmSelected={onFilmSelected} />
                {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> : null}
                <div>
                    <h3>List</h3>
                    <ul>
                        {favourites.map((movie, i) => (
                            <li key={i}>
                                {movie.title}
                                <button
                                    onClick={() => {
                                        handleFavourite(movie.id);
                                    }}>
                                        {movie.favourite === true ? "Remove from favourites" : "Add to favourites"}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <h3>Favourites</h3>
                <ul>
                    {favourites.map(movie => 
                    movie.favourite === true? <li key={movie.id}>{movie.title}</li> : null)}
                </ul>
            </div> 

        )

    }

export default FilmContainer;

