import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { MovieCard } from '../MovieCard/MovieCard'
import './MoviesListing.scss'

export const MoviesListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = "";
    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => 
                <MovieCard key={index} data={movie} />
            )
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

        renderShows =
        shows.Response === "True" ? (
            shows.Search.map((movie, index) => 
                <MovieCard key={index} data={movie} />
            )
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );
        
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="movie-list">
                <h2>Show</h2>
                <div className="movie-container">{renderShows}</div>
            </div>
        </div>
    );
};
