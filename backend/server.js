const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // helps us to connect to MongoDB

require('dotenv').config();

// create our react server
const app = express();
const port = process.env.PORT || 5050;

// middleware
app.use(cors());
app.use(express.json());

// connect to mongoDB
const uri = process.env.ATLAS_URI; // we need to get this from our MongDB Atlas project
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established sucessfully")
})

// tell mongoDB to use our user and exercise routers
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})