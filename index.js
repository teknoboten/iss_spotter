const { nextISSTimesForMyLocation } = require('./iss');

const printPasses = (passTimes) => {

  console.log(`🛰️  izzy's next flybys are: 🛰️ \n`);
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`${date} for ${pass.duration} seconds!`);
  }

};

nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    console.log(`error! it didn't work!`);
  } else {
    printPasses(passTimes);
  }

});


















// fetchIp((error, ip) => {

//   if (error) {
//     console.log(`it failed! : ${error}`);
//     return;
//   }

//   if (ip) {
//     // console.log(`your ip is: ${ip}`);
//   }

// });

// fetchCoordsByIP('8.8.8.8', (error, coordinates) => {
//   if (error) {
//     console.log(`it failed! ${error}`);
//     return;
//   }

// });

// fetchISSFlyOverTime({ latitude: 37.751, longitude: -97.822 }, (error, flyOverTimes) => {

//   if (error) return console.log(error);

//   console.log(`success! izzy will flyover at the following times, which are easily read by humans:`);
//   console.log(flyOverTimes);

// });