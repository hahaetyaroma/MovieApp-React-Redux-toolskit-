import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import user from "../../images/user.jpg";
import "./Header.scss";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../features/movies/movieSlice";

export const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === '') return alert('Please, dont troll me')
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm('');
    };
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                        placeholder="Search"
                        type="text"
                        name=""
                        id=""
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};
