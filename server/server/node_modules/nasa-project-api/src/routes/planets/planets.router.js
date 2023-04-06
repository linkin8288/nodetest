// Define the router and pass it to app.js and mount it there.

const express = require('express');

const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// use the getAllPlanets function as the route handler:
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;