const express = require('express');
const path = require('path');
const helmet = require('helmet');
const connection = require('../database/');
const router = require('./router');

const app = express();
const port = 9000;

app.use(helmet());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

app.listen(port, () => console.log(`***** Connected on port ${port} *****`));