//ja inicializa
const express = require('express');
const router = require('./router');
const app = express();

app.use(router); // falo que tudo q ta no router, pode ou será usado aqui.

module.exports = app;
