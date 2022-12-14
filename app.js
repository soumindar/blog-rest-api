const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');
const corsOption = require('./config/cors.option');
const fileUpload = require('express-fileupload');

// variable untuk menyimpan directory penyimpanan file
global.__basedir = __dirname;

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(corsOption()));

app.use(fileUpload());

app.use('/', indexRouter);

module.exports = app;