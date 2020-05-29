let request = require("request");

let apiKey = "472430044e980f10dbf2bcbd0a0b6eee";
let city = "jos";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    console.log("body:", body);
  }
});
