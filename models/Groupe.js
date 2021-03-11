const mongoose = require('mongoose');

// Filmes deja vus dans le groupe
const MovieAleradySeenSchema = mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const PersonneSchema = mongoose.Schema({
    personneId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const GroupeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userCreatorId: {
        type: String,
        required: true
    },
    personnes: [PersonneSchema],
    moviesAleradySeen: [MovieAleradySeenSchema],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Groupes', GroupeSchema);