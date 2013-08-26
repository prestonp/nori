/**
 * Digital Ocean DNS Updater
 */
var config = require('../config')
  , request = require('request');

var getExternalIp = function(callback) {
  request(config.checkIp, function(error, response, body) {   
    if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback(error);
    }
  });
};

var getARecord = function(callback) {
  var options = {
    json: true
  , uri: config.apiUrl + '/domains/' + config.domain + '/records'
  , qs: {
      client_id: config.clientId
    , api_key: config.apiKey
    }
  };

  request.get(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      for (var i=0; i<body.records.length; i++) {
        if (body.records[i].record_type === 'A') {
          return callback(null, body.records[i]);
        }
      }
      callback('No A Record found for specified domain');
    } else {
      callback(error);
    }
  });
};

var setARecord = function(recordId, externalIp, callback) {
  var options = {
    json: true
  , uri: config.apiUrl + '/domains/' + 
         config.domain + '/records/' + 
         recordId + '/edit'
  , qs: {
      client_id: config.clientId
    , api_key: config.apiKey
    , data: externalIp
    }
  };

  request.get(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(null, body);
    } else {
      callback(error);
    }
  });
};

/**
 * Run ddns script
 */
console.log((new Date()).toLocaleString());
console.log('Updating dns for', config.domain);
getARecord(function getARecordCb(error, record) {
  console.log('A Record\'s ID:', record.id);
  
  getExternalIp(function getExternalIp(error2, ip) {
    console.log('External IP:', ip);
    setARecord(record.id, ip, function setARecordCb(error, response) {
      if(!error) {
        console.log('Updated A Record successfully!');
      } else {
        console.log('Error updating domain:', error);
      }
    });
  });
});
