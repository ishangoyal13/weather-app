const request = require('request')

const geocode = (address,callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaXNoYW5nb3lhbDEzIiwiYSI6ImNrem1uZDRlbzAxZXMyeHBkNDAyN2F5MWYifQ.8qS8D7_fGndku-JzdliH1A'

  request({url : url, json : true}, (error,response) => {
    if(error) {
      callback('Unable to connect',undefined)
    }
    else if(response.body.features.length === 0){
      callback('Unable to find location',undefined)
    }
    else {
      callback(undefined, {
        latitude : response.body.features[0].center[1],
        longitude : response.body.features[0].center[0],
        location : response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode