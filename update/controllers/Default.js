'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.echoGET = function echoGET (req, res, next) {
  var msg = req.swagger.params['msg'].value;
  Default.echoGET(msg)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.echoMsgGET = function echoMsgGET (req, res, next) {
  var msg = req.swagger.params['msg'].value;
  // console.log(msg);
  Default.echoMsgGET(msg)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.intEthSlotPortGET = function intEthSlotPortGET (req, res, next) {
  var slot = req.swagger.params['slot'].value;
  var port = req.swagger.params['port'].value;
  Default.intEthSlotPortGET(slot,port)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
