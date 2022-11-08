const express = require('express');

const planetsModel = require('../../models/planets.model');
const { 
    httpGetAllPlanets, } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;