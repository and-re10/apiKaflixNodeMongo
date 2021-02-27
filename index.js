const mongoose = require('mongoose');
require('dotenv/config');

// Data base Connection
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    async () => {
        try {
            console.log("DB CONNECTED");
        } catch (error) {
            console.error(error);
        };
    }
);

// Server Connection
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());

// Routes
const movieRoute = require('./routes/movies');
app.use('/api/movies/', movieRoute);

app.get('/', (req, res) => {
    res.json({
        msg: 'OK',
    })
})

// Port du Server
app.listen(3010, () => {
    try {
        console.log("CONNECTED ON PORT 3010");
    } catch (error) {
        console.log(error);
    };
});