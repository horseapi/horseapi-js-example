const request = require('request');

const config = {
    API_KEY: 'YOUR_API_KEY_HERE',
};

const headers = {
    'Authorization': config.API_KEY
};

// Get a list of tracks
request('http://api.horseapi.com/tracks', { headers, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});

// Get a list of races for a specific track
// http://api.horseapi.com/races/track/{trackId}
request('http://api.horseapi.com/races/WRD', { headers, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});

// Get race odds, runners, and results for a specific race
// http://api.horseapi.com/races/track/{trackId}/{raceNumber}
request('http://api.horseapi.com/races/WRD/1', { headers, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});

