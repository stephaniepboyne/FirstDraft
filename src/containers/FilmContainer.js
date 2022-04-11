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

    const onFilmClick = function(film) {
        setSelectedFilm(film)
    }

        return (
            <div class='body'>
                <div class="container">
                    <div><img src='https://www.sfweekly.com/wp-content/uploads/2017/01/film-redturtle.jpg'/></div>
                    <div><img src='https://www.alternateending.com/wp-content/uploads/2019/12/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg'/></div>
                    <div><img src='https://cdn.flickeringmyth.com/wp-content/uploads/2017/08/spirited-away.jpg'/></div>
                    <div><img src='https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/only-yesterday-2016/OnlyYesterday_2016_1.jpg'/></div>
                    <div><img src='https://dazedimg-dazedgroup.netdna-ssl.com/1185/azure/dazed-prod/1180/3/1183450.jpg'/></div>
                    <div><img src='https://junkyardview.files.wordpress.com/2018/07/princessmononoke.jpg?w=640'/></div>
                    <div><img src='https://cdn.onebauer.media/one/empire-tmdb/films/12429/images/akDpPae2zJXZhokzsAPgDyNwiwX.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill'/></div>
                    <div><img src='https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd6142db6-4081-11eb-83a7-25db7141c256.jpg?crop=2700%2C1519%2C0%2C11&resize=1200'/></div>
                    <div><img src={require('./totoro.jpg')}/></div>
                </div>
                <div class='gallery'><h2>GALLERY</h2></div><div class='halves'>
                <div class='logo-container'>
                    <div><img class='logo' src='https://cdn.worldvectorlogo.com/logos/studio-ghibli-logo.svg'/>
                    </div>
                </div>
                <br></br><hr></hr>
                <br></br>
                <div class='selector-container'><FilmSelector films={films} onFilmSelected={onFilmSelected}/></div>
                </div>
                {selectedFilm ? <FilmDetail selectedFilm={selectedFilm} handleFavourite={handleFavourite} favourites={favourites}/> : null}
                <br></br>
                <br></br>
                <div class='faves-container'>
                <div><h3>FAVOURITES</h3></div>
                    {favourites.map(movie => 
                    movie.favourite === true? <div key={movie.id} onClick={() => onFilmClick(movie)}>{movie.title}</div> : null)
                    } 
                </div></div>
                

        )

    }

export default FilmContainer;

