const request = require('request-promise-native');

const fetchMyIp = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=4f04d160-95d6-11ec-a16b-856b01e70b08`);
};

const fetchFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};
  
const nextISSTimesForMyLocation = () => {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };


