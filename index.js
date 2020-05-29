let request = require("request");

let apiKey = "472430044e980f10dbf2bcbd0a0b6eee";
let city = "jos";
let zipCode = 930271;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&zip={zipCode}&appid=${apiKey}`;

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    console.log("body:", weather);
  }
});
