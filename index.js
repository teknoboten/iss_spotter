const { fetchIp, fetchCoordsByIP, fetchISSFlyOverTime } = require('./iss');

fetchIp((error, ip) => {

  if (error) {
    console.log(`it failed! : ${error}`);
    return;
  }

  if (ip) {
    // console.log(`your ip is: ${ip}`);
  }

});

fetchCoordsByIP('8.8.8.8', (error, coordinates) => {
  if (error) {
    console.log(`it failed! ${error}`);
    return;
  }

});

fetchISSFlyOverTime({ latitude: 37.751, longitude: -97.822 }, (error, flyOverTimes) => {

  if (error) return console.log(error);

  console.log(`success! izzy will flyover at the following times, which are easily read by humans:`);
  console.log(flyOverTimes);

});