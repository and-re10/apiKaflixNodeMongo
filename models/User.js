const mongoose = require('mongoose');

// Filmes favorits de l'utilisateur
const FavMoviesSchema = mongoose.Schema({
    favMovieId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// Amis dans le groupe
const FriendSchema = mongoose.Schema({
    friendId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// Groupes de l'utilisateur
const GroupeSchema = mongoose.Schema({
    groupeId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tagName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favMovies: [FavMoviesSchema],
    // push notre utilisateur dans mes amis de nos amis
    friends: [FriendSchema],
    // push le groupe d'un autre utilisateur si notre tagName est dedans
    groups: [GroupeSchema],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UserSchema);