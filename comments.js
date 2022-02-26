
/*
fetchMyIp()
  -> call fetchMyIp (it returns a promise, and expects a callback)
  -> fetchCoordsByIP is the callback
  -> when request completes, fetchCoordsByIP is called by the .then method

    ** .then does the magic. **
    -> it takes the response from fetchMyIP and passes it to fetchCoordsByIP for us

.then(fetchCoordsByIP)
  -> fetchCoordsByIP returns a promise and expects a callback....
  -> etc etc

.then(fetchFlyOverTimes)
.then(body => console.log(body));


//notes: url is different
//question: why do we not have to define 'body' anywhere. don't full understand why this is
//possibly provided by request-promise-native?? .... docs are sparse
//or maybe this doesn't matter... it just returns whatever it returns and we do what we want with that data



//passTimes is the 'data' returned by nextISSTimes()
//.then we pass the passtimes data to the printPasses function

*/
