const { fetchIp } = require('./iss');

fetchIp((error, ip) => {

  if (error) {
    console.log(`it failed! : ${error}`);
    return;
  }

  if (ip) {
    console.log(`your ip is: ${ip}`);
  }

});