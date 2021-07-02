const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You need to do your joke"],
        minlength: [10, "Your joke need to be longer"]
    },
    punchline: {
        type: String,
        required: [true, "What were you saying"],
        minlength: [3, "Nope try again"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;