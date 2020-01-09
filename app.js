
var clawer = require('./clawer');
var store = require('./store');

const options = {
  host: 'johnyu.cn',
  port: 3000,
  path: '/albums'
};

clawer(options, function (data) {
  console.log(data);
  store(data);
});


