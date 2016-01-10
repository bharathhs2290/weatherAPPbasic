/**
 * Created by bharath on 1/3/2016.
 */
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=domlur,uk&units=metric&appid=2de143494c0b295cca9337e1e96b00e0';


request({url:url, json: true},
    function(error,response,body){

        if  (error)
        {
            console.log('unable to fetch weather');


        }
        else
        {
           //console.log(JSON.stringify(body,null,4));
            console.log('weather in ' + body.name + 'is : '+  body.main.temp);
        }
    }



);