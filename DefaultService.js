'use strict';

/*
 * /v1/echo?msg=MESSAGEとCallされた場合の処理
 * 
 * Queryパラメータとして設定されている文字列は
 *  args["msg"]["value"]
 * で取得する。
 * GETで送られたメッセージについては、console.log(args);で確認可能
 */
exports.echoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * msg (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "status" : 200,
  "message" : "hello !!"
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

