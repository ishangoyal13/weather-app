const  request = require('request')

const forecast = (latitude,longitude,callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=dcb65f8bef5a6cc3a16a0e36584f8e8e&query=' + latitude + ',' + longitude

  request({ url : url, json : true}, (error,response)=>{
      if(error){
        callback('Unable to connect',undefined)
      }
      else if(response.body.error){
        callback('Unable to find location',undefined)
      }
      else {
        callback(undefined,"it is currently " + response.body.current.temperature + " degrees out. But it feels like " + response.body.current.feelslike + " degrees out")
      }
    })
}

module.exports = forecast