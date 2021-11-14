const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const stickyNoteRouter = require("./routes/sticky-note.route");
const userRouter = require("./routes/user.route");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/sticky-notes', stickyNoteRouter);
app.use('/users', userRouter);

mongoose.connect("", {useNewUrlParser: true, useUnifiedTopology: true}, function (){
    console.log('Connected to mongodb');
});

app.listen(3000);
console.log("App listening on port 3000");