const http = require('http');

function clawer(options, callback) {

  // 发出请求。
  const req = http.request(options);
  req.end();

  var albums = null;

  req.on('response', (response) => {
    console.log(`响应状态码：${response.statusCode}`);
    response.on('data', function (chunk) {
      // console.log(`响应结果：${chunk.toString('utf8')}`);
      callback(chunk.toString('utf8'));
    })
  });
}

module.exports = clawer;