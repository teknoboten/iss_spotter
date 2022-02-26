const { nextISSTimesForMyLocation } = require('./promised');

const printPasses = (passTimes) => {
  console.log(`🛰️  izzy's next flybys are: 🛰️ \n`);
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`${date} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPasses(passTimes);
  })
  .catch((error) => {
    console.log(`⛈️  sorry, your request didn't work ⛈️ \n\n`,error.message,`\n`);
  });

