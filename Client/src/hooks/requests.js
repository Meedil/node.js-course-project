const apiUrl = "http://localhost:5000";

async function httpGetPlanets() {
  const response = await fetch(`${apiUrl}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${apiUrl}/launches`);
  const fetchedLaunches =  await response.json();
  console.log(fetchedLaunches)
  return fetchedLaunches.sort((a,b) => {return a.flightNumber - b.flightNumber})
}

async function httpSubmitLaunch(launch) {
  console.log('sending: ', launch)
  let response = {};
  try{
    response =  await fetch(`${apiUrl}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch),
    })
  }catch(err){response =  {ok: false}};
  console.log('response from server: ', response)
  return response;
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};