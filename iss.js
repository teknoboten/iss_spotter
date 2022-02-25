const request = require('request');

const fetchIp = (callback) => {

  request('https://api.ipify.org?format=json', (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `status code: ${response.statusCode} when fetching ip.\nresponse: ${body}`;
      callback(Error(msg), null);
      return;
    }

    if (response) {
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    }

  });
    
};


module.exports = { fetchIp };