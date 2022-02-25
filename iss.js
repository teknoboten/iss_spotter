const request = require('request');

const fetchIp = (callback) => {

  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `status code: ${response.statusCode} when fetching ip.\nresponse: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};


const fetchCoordsByIP = (ip, callback) => {

  const req = `https://api.freegeoip.app/json/${ip}?apikey=4f04d160-95d6-11ec-a16b-856b01e70b08`;
  request(req, (error, response, body) => {

    if (response.statusCode !== 200) {
      const msg = `you got an error! status: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);
    const data = { latitude, longitude };
  
    callback(null, data);
  });
};




module.exports = { fetchIp, fetchCoordsByIP };


// curl 'https://api.freegeoip.app/json/8.8.8.8?apikey=4f04d160-95d6-11ec-a16b-856b01e70b08'

