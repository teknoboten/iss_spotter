const { fetchIp, fetchCoordsByIP } = require('./iss');

fetchIp((error, ip) => {

  if (error) {
    console.log(`it failed! : ${error}`);
    return;
  }

  if (ip) {
    // console.log(`your ip is: ${ip}`);
  }

});

// fetchCoordsByIP('333.8.8.8', (error, data) => {
//   console.log(error);
//   console.log(data);
// })

// fetchCoordsByIP('8.8.8.8', (error, data) => {
//   console.log(error);
//   console.log(data);
// })