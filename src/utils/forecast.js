const request = require('request');

const forecast =(latitude, longitude, callback)=>{
    const url ='https://api.darksky.net/forecast/777ce1bf03ae3e561251ee4dbfe90f3f/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si';
    
    request({url, json: true}, (errorLow, {body:{daily , currently , error}})=>{
        if(errorLow){
            callback('Problem connecting to the weather service!!', undefined);
        }else if(error){
            callback('Unable to find location', undefined);
        }else{
            callback(undefined, daily.data[0].summary+' '+currently.temperature+'C. There is a '+currently.precipProbability+'% chance of rain.');
        }
    })
}

module.exports = forecast;