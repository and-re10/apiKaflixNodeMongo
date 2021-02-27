const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    img: {
        type: String,
        required: false,
    }, 
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categorie: {
        type: String,
        required: true,
    },
    movieDate: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Movies', MovieSchema);