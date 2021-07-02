const Joke = require("../models/joke.model");

//READ all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(alljokes => res.json({ joke: alljokes }))
        .catch(err => res.json({ messege: "Nope! Please try again", error: err }))
}

//READ one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(Onejoke => res.json({ joke: Onejoke }))
        .catch(err => res.json({ messege: "Nope! Please try again", error: err }))
}

//CREATE a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.status(400).json(err));
}

//UPDATE an existing joke
module.exports.updateJoke = (req, res) => {
    Joke.update({ _id: req.params._id }, {
            $set: {
                setup: req.body.setup,
                punchline: req.body.punchline
            }
        })
        .then(Onejoke => res.json({ joke: Onejoke }))
        .catch(err => res.status(400).json(err))
}

//DELETE an existing joke
module.exports.deleteJoke = (req, res) => {
    Joke.remove({ _id: req.params._id })
        .then(delJoke => res.json({ messege: "That was bad, so i removed it!" }))
        .catch(err => res.json({ messege: "Your joke sucked", error: err }))
}

//READ a random joke
module.exports.findRandom = (req, res) => {
    Joke.find()
        .then(jokes => {
            let rand = Math.floor(Math.random() * jokes.length);
            res.json({ joke: jokes[rand] });
        })
        .catch(err => res.json({ messege: "Nope! Please try again", error: err }))
}