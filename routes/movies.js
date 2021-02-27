const express = require('express');
const Router = express();
const Movie = require('../models/Movie');

// Show All the Movies
Router.get('/showAll', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
        console.log(movies);
    } catch (error) {
        console.error(error)
    };
});

// Add new Movie
Router.post("/store", async (req, res) => {
    const movie = new Movie ({
        img: req.body.movieImg,
        title: req.body.movieTitle,
        description: req.body.movieDescription,
        categorie: req.body.movieCategorie,
        movieDate: req.body.movieDate,
    });
    try {
        const savedMovie = await movie.save();
        res.send(savedMovie);
        console.log(savedMovie);
    } catch (error) {
        console.error(error);
    }
})

module.exports = Router;