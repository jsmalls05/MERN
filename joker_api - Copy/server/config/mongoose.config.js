const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_api", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Found the mongoose"))
    .catch(() => console.log("Where did it go?", err))