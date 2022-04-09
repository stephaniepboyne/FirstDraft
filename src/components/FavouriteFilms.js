import React from 'react';
import Film from './Film';

const FavouriteFilms = ({films, addToFaves}) => {

    const faveFilms = films.map((film, index) => {
        return <Film film={film} key={index} addToFaves = {addToFaves}/>
    }) 

    return (
        <>
            <ul>
                {faveFilms}
            </ul>
        </>
    )
}

export default FavouriteFilms