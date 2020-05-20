# HorseAPI node.js example
Get your API key for JSON Horse Odds at https://horseapi.com/
#### API Methods

#### Install Steps
`npm install`

#### Run application
`node index.js`

### Get a list of tracks
- api.horseapi.com/tracks
```
request('http://api.horseapi.com/tracks', { headers: {'Authorization': 'API_KEY' }, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});
```

### Get a list of races for a specified track
- api.horseapi.com/races/track/{trackId}
```
request('http://api.horseapi.com/races/WRD', { headers: {'Authorization': 'API_KEY' }, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});
```

### Get odds, runners, and results for a specified race
- api.horseapi.com/races/track/{trackId}/${raceNumber}
```
request('http://api.horseapi.com/races/WRD/1', { headers: {'Authorization': 'API_KEY' }, json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});
```
