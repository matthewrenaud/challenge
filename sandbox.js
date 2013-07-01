var cb = require('couchbase');

var config = {
  hosts : [ "localhost:8091" ],
  bucket : "default"
};


cb.connect(config, function(err, cb1) {
  if (err) {
    console.log("Failed to connect to the cluster")
    process.exit(1)
  } else {
    console.log('11112')
    cb1.set('testkey2', 1, function (err, meta) {
      console.log('11113')
      cb1.get('testkey2', function (err, doc, meta) {

        process.exit(1)
      })
    });
  }
});