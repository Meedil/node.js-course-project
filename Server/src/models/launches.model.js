const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: '',
    date: new Date('December 3, 1976'),
    destination: 'kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches);
}
function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(launch.flightNumber, launch);
}

module.exports = {
    getAllLaunches
}

/* type launch {
    launchNum
    date,
    missionName,
    rocketType,
    destination,
    customer
} */