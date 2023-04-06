// getAllPlanets function (or any other functions related to planets) that will handle the business logic of the planets API:

const planets = require('../../models/planets.model')

function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
}