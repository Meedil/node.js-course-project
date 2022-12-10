const express = require('express');

const { httpGetAllLaunches, httpAddNewLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
// launchesRouter.get('/upcoming', httpGetUpcomingLaunches);
// launchesRouter.get('/history', httpGetLaunchHistory)
launchesRouter.post('/', httpAddNewLaunch);
// launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter
