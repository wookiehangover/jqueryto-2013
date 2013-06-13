var http = require('http');
var fs = require('fs');

var ecstatic = require('ecstatic');
var ramrod = require('ramrod');

var ec = ecstatic( __dirname );
var router = ramrod();

router.add("assets/*path", ec);

router.add("app/*path", ec);

router.on('*', function( req, res ){
  fs.createReadStream('./index.html').pipe(res);
});

http.createServer(function( req, res ){
  router.dispatch( req, res );
}).listen(process.env.PORT || 3000);

