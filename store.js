var client = require('mongodb').MongoClient;

function store(data) {
  client.connect('mongodb://localhost:27017/myapp', { useUnifiedTopology: true }, function (err, db) {
    console.log('MongoDB 已连接');
    db.db.collection('albums').insertMany(data, function () {
      console.log('数据插入成功');
      db.close();
    });
  });

}

module.exports = store;