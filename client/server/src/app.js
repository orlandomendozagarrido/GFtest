require('dotenv').config();
const middlewares = require('./middlewares');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');




const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1/messages', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
