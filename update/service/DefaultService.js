'use strict';


/**
 *
 * msg String Queryで送る文字（文）
 * returns Echo Reply
 **/
exports.echoGET = function(msg) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "hi "+msg,
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * msg String
 * returns Echo Reply2
 **/
exports.echoMsgGET = function(msg) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "hello "+msg,
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ciscoのネットワークインタフェースの状態を確認するコマンド（show interface ethernet 0/0）をRESTで実装する例
 *
 * slot Integer
 * port Integer
 * returns interface status
 **/
exports.intEthSlotPortGET = function(slot,port) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "Ethernet "+slot+"/"+port+" is up",
  "hardware" : "1000/10000 Ethernet, address: 000d:ece7.df48 MTU 1500 byte",
  "portmode" : "fex-fabrix full-duplex, 10Gb/s, media type is 1/10g"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
