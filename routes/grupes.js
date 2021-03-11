const express = require('express');
const Router = express();
const Groupe = require('../models/Groupe');

// Show All the Groupes
Router.get('/showAll', async (req, res) => {
    try {
        const groupes = await Groupe.find();
        res.send(groupes);
        console.log(groupes);
    } catch (error) {
        console.error(error)
    };
});

// Add new Groupe
Router.post("/store", async (req, res) => {
    const groupe = new Groupe({
        name: req.body.groupeName,
        userCreatorId: req.body.userCreatorId
    });
    try {
        const savedGroupe = await groupe.save();
        res.send(savedGroupe);
        console.log(savedGroupe);
    } catch (error) {
        console.error(error);
    }
})

//Show One Groupe
Router.get('/showOne/:id', async (req, res) => {
    try {
        const groupe = await Groupe.findOne({ _id: req.params.id });
        res.send(groupe);
        console.log(groupe);
    } catch (error) {
        console.error(error)
    }
})

// Add personne to the groupe
Router.put('/addPersonne/:id', async (req, res, next) => {
    Groupe.findOne({ _id: req.params.id }, function (err, groupe){
        if (err) return res.send(err);

        groupe.personnes.push({
            personneId: req.body.personneId,
        })

        groupe.save(function(err){
            if (err) return next(err);
            console.log(groupe);
            res.send(groupe)
        })
    })
})

// Delete one Groupe
Router.delete('/delete/:id', async (req, res) => {
    try {
        const groupe = await Groupe.deleteOne({ _id: req.params.id });
        res.send(groupe);
    } catch (error) {
        console.error(error);
    }
})



module.exports = Router;