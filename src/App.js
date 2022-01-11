import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/movie/:imdbID"
                            element={<MovieDetail />}
                        ></Route>
                        <Route element={<PageNotFound />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
