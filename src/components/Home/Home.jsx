import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MoviesListing } from "../MoviesListing/MoviesListing";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../features/movies/movieSlice";

export const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry Potter";
    const showText = "Teenage Mutant Ninja Turtles";

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MoviesListing />
        </div>
    );
};
