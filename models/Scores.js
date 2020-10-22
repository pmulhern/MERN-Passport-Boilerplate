const mongoose = require('mongoose');

const ScoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    scores:{
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model('Scores',ScoresSchema);