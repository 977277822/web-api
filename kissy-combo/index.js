/**
 * Created by Administrator on 2015/6/15.
 */

var express = require("express");
var fs = require("fs");
var uuid = require('node-uuid');

var app = express();

app.get('/', function (req, res) {
    var originalUrl, relation, tag;
    originalUrl = req.originalUrl;
    if (originalUrl.indexOf("??") != -1) {
        relation = originalUrl.substring(originalUrl.indexOf("??") + 2);
        tag = relation.substring(relation.indexOf("?") + 1);
        relation = relation.replace(["?" + tag], "");
        readyAndConcat(relation);
    }
    console.log(tag);
    console.log(relation);
    res.sendfile('test.js');
});

var readyAndConcat = function (filePaths,tag) {
    var sdata = fs.readFileSync('src/kissy/seed.js');
    var ndata = fs.readFileSync('src/kissy/node.js');
    var mapKey = filePaths;
    var mapPath = uuid.v1() + "-" + tag;
    //fs.writeFile('delete.txt',sdata + ndata,function(err){ });
};

app.listen(3000);