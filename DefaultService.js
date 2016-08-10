'use strict';

/*
 * /v1/echo?msg=MESSAGEがCallされた場合の処理
 * 以下の処理では、固定されたメッセージを返す
 */
exports.echoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * msg (String)
  **/
  var examples = {};
  examples['application/json'] = {
  "status" : 200,
  "message" : "hello"
  };
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

/*
 * /v1/echo/MESSAGEがCallされた場合の処理
 * 以下のの処理では、パスの最後に指定されている文字列(MESSAGE)を取得して、返すメッセージに含める
 */
exports.echoMsgGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * msg (String)
  **/
  var examples = {};
  examples['application/json'] = {
  "status" : 200,
  "message" : "hello "+args["msg"]["value"]+" !!"
  };
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

/*
 * /v1/int/eth/{slot}/{port}がCallされた場合の処理
 * slotとportは数値が入力される
 * 以下の処理では、{slot}と{port}の値を取得して、statusメッセージを動的に作成する
 */
exports.intEthSlotPortGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * slot (Integer)
  * port (Integer)
  **/
  var examples = {};
  examples['application/json'] = {
  "status" : "Ethernet"+args["slot"]["value"]+"/"+args["port"]["value"]+" is up",
  "hardware" : "1000/10000 Ethernet, address: 000d.ece7.df48",
  "portmode" : "fex-fabric full-duplex, 10 Gb/s, media type is 1/10g"
  };
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}
