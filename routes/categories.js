const express = require('express');
const { findOne } = require('../models/Movie');
const Router = express();
const Categorie = require('../models/Categorie');

// Show All the Movies
Router.get('/showAll', async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.send(categories);
        console.log(categories);
    } catch (error) {
        console.error(error)
    };
});

// Add new Categorie
Router.post("/store", async (req, res) => {
    const categorie = new Categorie ({
        name: req.body.categorieName,
        
    });
    try {
        const savedCategorie = await categorie.save();
        res.send(savedCategorie);
        console.log(savedCategorie);
    } catch (error) {
        console.error(error);
    }
})

//Show One Categorie
Router.get('/showOne/:id', async (req, res) => {
    try {
        const categorie = await Categorie.findOne({ _id: req.params.id });
        res.send(categorie);
        console.log(categorie);
    } catch (error) {
        console.error(error)
    }
})

// Delete one Categorie
Router.delete("/delete/:id", async (req, res) => {
    try {
        const categorie = await Categorie.deleteOne({ _id: req.params.id});
        res.send(categorie);
    } catch (error) {
        console.error(error);
    }
})

module.exports = Router;