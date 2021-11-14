const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const stickyNoteRouter = require("./routes/sticky-note.route");
const userRouter = require("./routes/user.route");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/sticky-notes', stickyNoteRouter);
app.use('/users', userRouter);

app.listen(3000);
console.log("App listening on port 3000");