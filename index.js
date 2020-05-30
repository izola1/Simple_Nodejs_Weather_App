const argv = require("yargs").argv;
const axios = require("axios");

//adding yargs for command line interactivity
let city = argv.c || "New York";
let postCode = argv.p || "10001";

let locationDetail = [city, postCode];

const params = {
  access_key: "6b3baf578c4838ec20f381b2640e1bf4",
  query: locationDetail[0] || locationDetail[1],
};

//making get request to the weather api and displaying result to the console
axios
  .get("http://api.weatherstack.com/current", { params })
  .then((response) => {
    const apiResponse = response.data;
    console.log(
      `The local time in ${apiResponse.location.name} ${apiResponse.location.country} is ${apiResponse.location.localtime} and its current temperature is ${apiResponse.current.temperature}℃  and cloud cover is ${apiResponse.current.cloudcover}. `
    );
  })
  .catch((error) => {
    console.log(error);
  });
