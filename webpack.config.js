let path =require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
module.exports={
    entry:path.resolve("./index.js"),
    mode:"development",
    target:"node",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"dist")
    },
    resolve:{
        extensions:["js"]
    },
    externals: nodeModules,

}