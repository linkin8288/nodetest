const express = require('express');
const cors = require('cors');
// point to the router relative path
const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// mounting router
app.use(planetsRouter);

module.exports = app;