const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Mission KALB',
    launchDate: new Date('December 3, 1976'),
    target: 'kepler-442 b',
    rocket: "January 17, 2030",
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}
function getUpcomingLaunches(){
    return getAllLaunches.filter((launch) => launch.upcoming);
}
function getLauchHistory(){
    return getAllLaunches.filter(launches => !launch.upcoming);
}

function addNewLaunch(launch){
    console.log('adding: ', launch)
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch,{
        flightNumber: latestFlightNumber,
        upcoming: true,
        success: true,
        customer: ['ZTM', 'NASA'],
    }));
}

// function setToFailiure(id){}
// function deleteFromLaunches(id){}

// function abortLaunch(id){
    
// }

module.exports = {
    getAllLaunches,
    getUpcomingLaunches,
    getLauchHistory,
    addNewLaunch,
    // abortLaunch
}