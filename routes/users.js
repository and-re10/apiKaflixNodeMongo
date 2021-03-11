const express = require('express');
const Router = express();
const User = require('../models/User');

// Show All the Users
Router.get('/showAll', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
        console.log(users);
    } catch (error) {
        console.error(error)
    };
});

// Add new User
Router.post("/store", async (req, res) => {
    const user = new User ({
        name: req.body.userName,
        tagName: req.body.userTagName,
        password: req.body.userPassword,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
        console.log(savedUser);
    } catch (error) {
        console.error(error);
    }
})

//Show One Movie
Router.get('/showOne/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        res.send(user);
        console.log(user);
    } catch (error) {
        console.error(error)
    }
})

// Add friends
Router.put('/addFriends/:id', async (req, res, next) => {
    User.findOne({ _id: req.params.id }, function (err, user){
        if (err) return res.send(err);

        user.friends.push({
            friendId: req.body.friendId,
        })

        user.save(function(err){
            if (err) return next(err);
            console.log(user);
            res.send(user)
        })
    })
})

// Add favorite movies
Router.put('/addFavMovie/:id', async (req, res, next) => {
    User.findOne({ _id: req.params.id }, function (err, user){
        if (err) return res.send(err);

        user.favMovies.push({
            favMovieId: req.body.favMovieId
        })

        user.save(function(err){
            if (err) return next(err);
            console.log(user);
            res.send(user)
        })
    })
})

// Add groups
// Router.put('/addPersonne/:id', async (req, res, next) => {
//     Groupe.findOne({ _id: req.params.id }, function (err, groupe){
//         if (err) return res.send(err);

//         groupe.personnes.push({
//             personneId: req.body.personneId,
//         })

//         groupe.save(function(err){
//             if (err) return next(err);
//             console.log(groupe);
//             res.send(groupe)
//         })
//     })
// })

// Delete a User
Router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });
        res.send(user);
    } catch (error) {
        console.error(error);
    }
})


module.exports = Router;